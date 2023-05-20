const sql = require('mssql');
const express = require('express');
const app = express();

var cors = require('cors')

app.use(cors())

const config = {
   //DESKTOP-LIGFR4H DESKTOP-LIGFR4H\SQLEXPRESS
  user: 'erick',
  password: 'admin',
  server: 'localhost',
  database: 'efectos_vacuna_final',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

const pool = new sql.ConnectionPool(config)
pool.connect()

app.get('/efectos_por_alcaldia', (req, res) => {
  const tipo = req.query.tipo;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request(pool);

    if(tipo.length > 0){
      data = "SELECT alcaldia.alcaldia,count(alcaldia.alcaldia) AS total FROM efectos_secundarios v JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID where efecto_vacuna_covid.tipo = '" + tipo + "'GROUP BY alcaldia.alcaldia;";
      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
    else{
      data = "SELECT alcaldia.alcaldia,count(alcaldia.alcaldia) AS total FROM efectos_secundarios v JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID GROUP BY alcaldia.alcaldia;";
      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
  
  });
});

app.get('/efectos_por_coordenadas', (req, res) => {
  const tipo = req.query.tipo;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request(pool);

    if(tipo != 'todos'){
      data = "SELECT coordenada.latitud, coordenada.longitud FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN coordenada ON coordenada.idCoordenada = v.coordenadaID \
      where efecto_vacuna_covid.tipo = '" + tipo + "';";

      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
    else{
      data = "SELECT coordenada.latitud, coordenada.longitud FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN coordenada ON coordenada.idCoordenada = v.coordenadaID;";
      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
  
  });
});

app.get('/efectos_por_mes', (req, res) => {
  const tipo = req.query.tipo;
  const fecha_inicial = req.query.fecha_inicial;
  const fecha_final = req.query.fecha_final;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request(pool);

    if(tipo.length > 0){

      data = "SELECT fecha.mes,fecha.año,count(fecha.mes) AS total \
      FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN fecha ON fecha.idFecha = v.fechaID \
      WHERE efecto_vacuna_covid.tipo ='" + tipo + "' and fecha.fecha BETWEEN '" + fecha_inicial + 
      "' AND '" + fecha_final + "' \
      GROUP BY año, mes \
      order by mes desc;" 
      
      request.query(data, (err, recordset) => {
        if (err) console.log(err);

        res.send(recordset);
        sql.close();
      });
    }
    else{
      data = "SELECT fecha.mes,fecha.año,count(fecha.mes) AS total \
      FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN fecha ON fecha.idFecha = v.fechaID \
      WHERE fecha.fecha BETWEEN '" + fecha_inicial + 
      "' AND '" + fecha_final + "' \
      GROUP BY año, mes \
      order by mes desc;" 

      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
  
  });
});

app.get('/efectos_por_anio', (req, res) => {
  const tipo = req.query.tipo;
  const año = req.query.anio;

  const request = new sql.Request(pool);

  if(tipo.length > 0){

    data = "SELECT fecha.mes,fecha.año,count(fecha.mes) AS total \
    FROM efectos_secundarios v \
    JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
    JOIN fecha ON fecha.idFecha = v.fechaID \
    WHERE efecto_vacuna_covid.tipo ='" + tipo + "' and fecha.año ='" + año + "'\
    GROUP BY año, mes \
    ORDER BY CASE mes \
          WHEN 'enero' THEN 1 \
          WHEN 'febrero' THEN 2 \
          WHEN 'marzo' THEN 3 \
          WHEN 'abril' THEN 4 \
          WHEN 'mayo' THEN 5 \
          WHEN 'junio' THEN 6 \
          WHEN 'julio' THEN 7 \
          WHEN 'agosto' THEN 8 \
          WHEN 'septiembre' THEN 9 \
          WHEN 'octubre' THEN 10 \
          WHEN 'noviembre' THEN 11 \
          WHEN 'diciembre' THEN 12 \
       END;" 
    
    request.query(data, (err, recordset) => {
      if (err) console.log(err);

      console.log(recordset);
      res.send(recordset);
    });
  }
});

app.get('/tweets_por_marca', (req, res) => {
  const marca = req.query.marca;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request(pool);

    if(marca.length > 0){
      data = "SELECT distinct tweet \
      FROM efectos_secundarios v \
      JOIN tweet ON tweet.idTweet = v.tweetID \
      JOIN marca_vacuna ON marca_vacuna.idMarca = v.marcaID \
      WHERE marca_vacuna.marca ='" + marca + "' group by tweet, marca;";
      
      request.query(data, (err, recordset) => {
        if (err) console.log(err);

        res.send(recordset);
        sql.close();
      });
    }
    else{
      data = "SELECT fecha.mes,fecha.año,count(fecha.mes) AS total \
      FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN fecha ON fecha.idFecha = v.fechaID \
      WHERE fecha.fecha BETWEEN '" + fecha_inicial + 
      "' AND '" + fecha_final + "' \
      GROUP BY año, mes \
      order by mes desc;" 

      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
  
  });
});

app.get('/efectos_por_marca', (req, res) => {
  const marca = req.query.marca;
  const tipo = req.query.tipo;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request(pool);
    
    if(marca.length > 0){
      data = "SELECT alcaldia.alcaldia,count(alcaldia.alcaldia) AS total \
      FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID \
      JOIN marca_vacuna ON marca_vacuna.idMarca = v.marcaID \
      WHERE marca_vacuna.marca = '" + marca + "' and \
      efecto_vacuna_covid.tipo = '" + tipo + "' \
      group by alcaldia.alcaldia;";
      
      request.query(data, (err, recordset) => {
        if (err) console.log(err);

        res.send(recordset);
        sql.close();
      });
    }
    else{
      data = "SELECT fecha.mes,fecha.año,count(fecha.mes) AS total \
      FROM efectos_secundarios v \
      JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID \
      JOIN fecha ON fecha.idFecha = v.fechaID \
      WHERE fecha.fecha BETWEEN '" + fecha_inicial + 
      "' AND '" + fecha_final + "' \
      GROUP BY año, mes \
      order by mes desc;" 

      request.query(data, (err, recordset) => {
        if (err) console.log(err);
        
        res.send(recordset);
        sql.close();
      });
    }
  
  });
});

app.listen(5000, () => console.log('Server is running on port 5000'));
