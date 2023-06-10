import { Box, useTheme } from "@mui/material";
import Header from '../../components/header';
import LineChart from "../../components/LineChart";
import { tokens } from "../../theme";
import React, { useState} from 'react';

const Line = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let [efecto1, seleccionEfecto1] = useState('fiebre');
    let [efecto2, seleccionEfecto2] = useState('dolor de brazo');
    let [efecto3, seleccionEfecto3] = useState('dolor de cabeza');
    let [anio, seleccionAnio] = useState(2021);

    const createHandleOptionChange = (selectedOptionStateSetter) => (event) => {
      selectedOptionStateSetter(event.target.value);
      console.log(efecto1);
    }

    let data = [efecto1, efecto2, efecto3, anio];

    return (
        <Box m="18px">
         <Header title="Efectos por año" subtitle="Gráfica lineal" />
          <p>En el mes de julio de 2021, fue la fecha que se informaron más posibles efectos secundarios. Los síntomas comunes mencionados fueron dolor de cabeza, cansancio, fiebre, dolor de cuerpo y escalofríos. Esos efectos se presentaron horas después de la aplicación, tanto durante el día como por la noche, e incluso días después de recibir la dosis.</p>
          <p></p>
          <p>En el año 2022, los comentarios sobre posibles efectos secundarios estuvieron relacionados con las dosis de refuerzo. El mes más destacado con respecto a estos comentarios fue febrero</p>
          <p></p>
          <p>Para conocer las relaciones entre los efectos durante los años 2020-2023. Seleccione los de su interes</p>
          <div>   
            <select value={efecto1} onChange={createHandleOptionChange(seleccionEfecto1)} 
              style={{
              color: "#000",
              backgroundColor: colors.greenAccent[400],
              borderRadius: "5px",
              padding: "10px",
              borderColor: "grey",
              borderWidth: "2px",
              borderStyle: "solid",
              display: 'inline-block', 
              marginRight: '10px',
              marginBottom: '15px' 
              }}>
                <option value="dolor de cabeza">Dolor de Cabeza</option>
                <option value="cansado">Cansado</option>
                <option value="cansancio">Cansancio</option>
                <option value="ciclo menstrual">Ciclo Menstrual</option>
                <option value="colico">Colico</option>
                <option value="cuerpo cortado">Cuerpo Cortado</option>
                <option value="dolor articular">Dolor Articular</option>
                <option value="dolor de brazo">Dolor Brazo</option>
                <option value="dolor de cuerpo">Dolor Cuerpo</option>
                <option value="dolor de garganta">Dolor Garganta</option>
                <option value="dolor muscular">Dolor Muscular</option>
                <option value="escalofrio">Escalofrio</option>
                <option value="fatiga">Fatiga</option>
                <option value="fiebre">Fiebre</option>
                <option value="frio">Frio</option>
                <option value="gripe">Gripe</option>
                <option value="mareo">Mareo</option>
                <option value="nausea">Nausea</option>
                <option value="sudor">Sudor</option>
                <option value="sueño">Sueño</option>
                <option value="temperatura">Temperatura</option>
            </select>

            <select value={efecto2} onChange={createHandleOptionChange(seleccionEfecto2)} 
              style={{
              color: "#000",
              backgroundColor: colors.greenAccent[400],
              borderRadius: "5px",
              padding: "10px",
              borderColor: "grey",
              borderWidth: "2px",
              borderStyle: "solid",
              marginRight: '10px',
              display: 'inline-block'
              }}>
                <option value="dolor de cabeza">Dolor de Cabeza</option>
                <option value="cansado">Cansado</option>
                <option value="cansancio">Cansancio</option>
                <option value="ciclo menstrual">Ciclo Menstrual</option>
                <option value="colico">Colico</option>
                <option value="cuerpo cortado">Cuerpo Cortado</option>
                <option value="dolor articular">Dolor Articular</option>
                <option value="dolor de brazo">Dolor Brazo</option>
                <option value="dolor de cuerpo">Dolor Cuerpo</option>
                <option value="dolor de garganta">Dolor Garganta</option>
                <option value="dolor muscular">Dolor Muscular</option>
                <option value="escalofrio">Escalofrio</option>
                <option value="fatiga">Fatiga</option>
                <option value="fiebre">Fiebre</option>
                <option value="frio">Frio</option>
                <option value="gripe">Gripe</option>
                <option value="mareo">Mareo</option>
                <option value="nausea">Nausea</option>
                <option value="sudor">Sudor</option>
                <option value="sueño">Sueño</option>
                <option value="temperatura">Temperatura</option>
            </select>

            <select value={efecto3} onChange={createHandleOptionChange(seleccionEfecto3)} 
              style={{
              color: "#000",
              backgroundColor: colors.greenAccent[400],
              borderRadius: "5px",
              padding: "10px",
              borderColor: "grey",
              borderWidth: "2px",
              borderStyle: "solid",
              marginRight: '10px',
              display: 'inline-block'
              }}>
                <option value="dolor de cabeza">Dolor de Cabeza</option>
                <option value="cansado">Cansado</option>
                <option value="cansancio">Cansancio</option>
                <option value="ciclo menstrual">Ciclo Menstrual</option>
                <option value="colico">Colico</option>
                <option value="cuerpo cortado">Cuerpo Cortado</option>
                <option value="dolor articular">Dolor Articular</option>
                <option value="dolor de brazo">Dolor Brazo</option>
                <option value="dolor de cuerpo">Dolor Cuerpo</option>
                <option value="dolor de garganta">Dolor Garganta</option>
                <option value="dolor muscular">Dolor Muscular</option>
                <option value="escalofrio">Escalofrio</option>
                <option value="fatiga">Fatiga</option>
                <option value="fiebre">Fiebre</option>
                <option value="frio">Frio</option>
                <option value="gripe">Gripe</option>
                <option value="mareo">Mareo</option>
                <option value="nausea">Nausea</option>
                <option value="sudor">Sudor</option>
                <option value="sueño">Sueño</option>
                <option value="temperatura">Temperatura</option>
            </select>

            <select value={anio} onChange={createHandleOptionChange(seleccionAnio)} 
              style={{
              color: "#000",
              backgroundColor: colors.greenAccent[400],
              borderRadius: "5px",
              padding: "10px",
              borderColor: "grey",
              borderWidth: "2px",
              borderStyle: "solid",
              display: 'inline-block'
              }}>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            
          </div>
          <Box height="75vh">
             <LineChart effects = {data}/>
          </Box>
        </Box>
    )
}

export default Line;