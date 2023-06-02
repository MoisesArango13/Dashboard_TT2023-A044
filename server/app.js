/*const config = {
   //DESKTOP-LIGFR4H DESKTOP-LIGFR4H\SQLEXPRESS
  user: 'erick',
  password: 'admin',
  server: 'localhost',
  database: 'efectos_vacuna_final',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};*/


const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dataset_efectos_vacuna_covid',
  port: 3306,
};

const pool = mysql.createPool(config);

app.get('/efectos_por_alcaldia', (req, res) => {
  const tipo = req.query.tipo;

  pool.getConnection((err, connection) => {
    if (err) console.log(err);

    const query = tipo.length > 0
      ? `SELECT alcaldia.alcaldia, COUNT(alcaldia.alcaldia) AS total
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID
         WHERE efecto_vacuna_covid.tipo = '${tipo}'
         GROUP BY alcaldia.alcaldia;`
      : `SELECT alcaldia.alcaldia, COUNT(alcaldia.alcaldia) AS total
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID
         GROUP BY alcaldia.alcaldia;`;

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      res.send(results);
    });
  });
});

app.get('/efectos_por_coordenadas', (req, res) => {
  const tipo = req.query.tipo;

  pool.getConnection((err, connection) => {
    if (err) console.log(err);

    const query = tipo !== 'todos'
      ? `SELECT coordenada.latitud, coordenada.longitud
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN coordenada ON coordenada.idCoordenada = v.coordenadaID
         WHERE efecto_vacuna_covid.tipo = '${tipo}';`
      : `SELECT coordenada.latitud, coordenada.longitud
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN coordenada ON coordenada.idCoordenada = v.coordenadaID;`;

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      res.send(results);
    });
  });
});

app.get('/efectos_por_mes', (req, res) => {
  const tipo = req.query.tipo;
  const fecha_inicial = req.query.fecha_inicial;
  const fecha_final = req.query.fecha_final;

  pool.getConnection((err, connection) => {
    if (err) console.log(err);

    const query = tipo.length > 0
      ? `SELECT fecha.mes, fecha.año, COUNT(fecha.mes) AS total
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN fecha ON fecha.idFecha = v.fechaID
         WHERE efecto_vacuna_covid.tipo = '${tipo}' AND fecha.fecha BETWEEN '${fecha_inicial}' AND '${fecha_final}'
         GROUP BY año, mes
         ORDER BY mes DESC;`
      : `SELECT fecha.mes, fecha.año, COUNT(fecha.mes) AS total
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN fecha ON fecha.idFecha = v.fechaID
         WHERE fecha.fecha BETWEEN '${fecha_inicial}' AND '${fecha_final}'
         GROUP BY año, mes
         ORDER BY mes DESC;`;

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      res.send(results);
    });
  });
});

app.get('/efectos_por_anio', (req, res) => {
  const tipo = req.query.tipo;
  const año = req.query.anio;

  pool.getConnection((err, connection) => {
    if (err) {
    console.log(err);
    // Handle the error appropriately, such as returning an error response
    return;}

    const query = tipo.length > 0
      ? `SELECT fecha.mes, fecha.año, COUNT(fecha.mes) AS total
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN fecha ON fecha.idFecha = v.fechaID
         WHERE efecto_vacuna_covid.tipo = '${tipo}' AND fecha.año = '${año}'
         GROUP BY año, mes
         ORDER BY FIELD(mes, 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');`
      : '';

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      console.log(results);
      res.send(results);
    });
  });
});

app.get('/tweets_por_marca', (req, res) => {
  const marca = req.query.marca;

  pool.getConnection((err, connection) => {
    if (err) console.log(err);

    const query = marca.length > 0
      ? `SELECT DISTINCT tweet
         FROM efectos_secundarios v
         JOIN tweet ON tweet.idTweet = v.tweetID
         JOIN marca_vacuna ON marca_vacuna.idMarca = v.marcaID
         WHERE marca_vacuna.marca = '${marca}'
         GROUP BY tweet, marca;`
      : '';

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      res.send(results);
    });
  });
});

app.get('/tweets_por_efecto', (req, res) => {
  const tipo = req.query.tipo;

  pool.getConnection((err, connection) => {
    if (err) console.log(err);

    const query = tipo == 'todos'
      ? `SELECT DISTINCT tweet, alcaldia.alcaldia
         FROM efectos_secundarios v
         JOIN tweet ON tweet.idTweet = v.tweetID
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID
         GROUP BY tweet, alcaldia;`
      : 
         `SELECT DISTINCT tweet, alcaldia.alcaldia
         FROM efectos_secundarios v
         JOIN tweet ON tweet.idTweet = v.tweetID
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID
         WHERE efecto_vacuna_covid.tipo = '${tipo}'
         GROUP BY tweet, alcaldia;`

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      res.send(results);
    });
  });
});

app.get('/efectos_por_marca', (req, res) => {
  const marca = req.query.marca;
  const tipo = req.query.tipo;

  pool.getConnection((err, connection) => {
    if (err) console.log(err);

    const query = marca.length > 0
      ? `SELECT alcaldia.alcaldia, COUNT(alcaldia.alcaldia) AS total
         FROM efectos_secundarios v
         JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID
         JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID
         JOIN marca_vacuna ON marca_vacuna.idMarca = v.marcaID
         WHERE marca_vacuna.marca = '${marca}' AND efecto_vacuna_covid.tipo = '${tipo}'
         GROUP BY alcaldia.alcaldia;`
      : '';

    connection.query(query, (error, results) => {
      connection.release();
      if (error) console.log(error);

      console.log(results)

      res.send(results);
    });
  });
});

app.listen(5000, () => console.log('Server is running on port 5000'));
