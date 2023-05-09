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


app.get('/data', (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  console.log(id);
  console.log(name);

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request();

    if(name.length > 0){
      data = "SELECT alcaldia.alcaldia,count(alcaldia.alcaldia) AS total FROM efectos_secundarios v JOIN efecto_vacuna_covid ON efecto_vacuna_covid.idEfecto = v.efectoID JOIN alcaldia ON alcaldia.idAlcaldia = v.alcaldiaID where efecto_vacuna_covid.tipo = '" + name + "'GROUP BY alcaldia.alcaldia;";
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

app.get('/efectos_por_mes', (req, res) => {
  const tipo = req.query.tipo;
  const fecha_inicial = req.query.fecha_inicial;
  const fecha_final = req.query.fecha_final;

  sql.connect(config, (err) => {
    if (err) console.log(err);

    const request = new sql.Request();

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

app.listen(5000, () => console.log('Server is running on port 5000'));
