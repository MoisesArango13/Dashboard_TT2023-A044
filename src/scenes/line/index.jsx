import { Box, useTheme } from "@mui/material";
import Header from '../../components/header';
import LineChart from "../../components/LineChart";
import { tokens } from "../../theme";
import React, { useState} from 'react';

const Line = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let [efecto1, seleccionEfecto1] = useState('fiebre');
    let [efecto2, seleccionEfecto2] = useState('dolor brazo');
    let [efecto3, seleccionEfecto3] = useState('dolor cabeza');
    let [anio, seleccionAnio] = useState(2021);

    const createHandleOptionChange = (selectedOptionStateSetter) => (event) => {
      selectedOptionStateSetter(event.target.value);
      console.log(efecto1);
    }

    let data = [efecto1, efecto2, efecto3, anio];

    return (
        <Box m="20px">
         <Header title="Efectos por año" subtitle="Gráfica poligonal" />
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
                <option value="dolor cabeza">dolor cabeza</option>
                <option value="cansado">cansado</option>
                <option value="cansancio">cansancio</option>
                <option value="ciclo menstrual">ciclo menstrual</option>
                <option value="colico">colico</option>
                <option value="cuerpo cortado">cuerpo cortado</option>
                <option value="dolor articulacion">dolor articulacion</option>
                <option value="dolor articular">dolor articular</option>
                <option value="dolor brazo">dolor brazo</option>
                <option value="dolor cuerpo">dolor cuerpo</option>
                <option value="dolor garganta">dolor garganta</option>
                <option value="dolor muscular">dolor muscular</option>
                <option value="escalofrios">escalofrios</option>
                <option value="escalofrio">escalofrio</option>
                <option value="fatiga">fatiga</option>
                <option value="fiebre">fiebre</option>
                <option value="frio">frio</option>
                <option value="gripa">gripa</option>
                <option value="gripe">gripe</option>
                <option value="mareo">mareo</option>
                <option value="mareos">mareos</option>
                <option value="nausea">nausea</option>
                <option value="sudor">sudor</option>
                <option value="sueño">sueño</option>
                <option value="temperatura">temperatura</option>
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
                <option value="fiebre">fiebre</option>
                <option value="dolor cabeza">dolor cabeza</option>
                <option value="cansado">cansado</option>
                <option value="cansancio">cansancio</option>
                <option value="ciclo menstrual">ciclo menstrual</option>
                <option value="colico">colico</option>
                <option value="cuerpo cortado">cuerpo cortado</option>
                <option value="dolor articulacion">dolor articulacion</option>
                <option value="dolor articular">dolor articular</option>
                <option value="dolor brazo">dolor brazo</option>
                <option value="dolor cuerpo">dolor cuerpo</option>
                <option value="dolor garganta">dolor garganta</option>
                <option value="dolor muscular">dolor muscular</option>
                <option value="escalofrios">escalofrios</option>
                <option value="escalofrio">escalofrio</option>
                <option value="fatiga">fatiga</option>
                <option value="frio">frio</option>
                <option value="gripa">gripa</option>
                <option value="gripe">gripe</option>
                <option value="mareo">mareo</option>
                <option value="mareos">mareos</option>
                <option value="nausea">nausea</option>
                <option value="sudor">sudor</option>
                <option value="sueño">sueño</option>
                <option value="temperatura">temperatura</option>
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
                <option value="dolor brazo">dolor brazo</option>
                <option value="dolor cabeza">dolor cabeza</option>
                <option value="fiebre">fiebre</option>
                <option value="cansado">cansado</option>
                <option value="cansancio">cansancio</option>
                <option value="ciclo menstrual">ciclo menstrual</option>
                <option value="colico">colico</option>
                <option value="cuerpo cortado">cuerpo cortado</option>
                <option value="dolor articulacion">dolor articulacion</option>
                <option value="dolor articular">dolor articular</option>
                <option value="dolor cuerpo">dolor cuerpo</option>
                <option value="dolor garganta">dolor garganta</option>
                <option value="dolor muscular">dolor muscular</option>
                <option value="escalofrios">escalofrios</option>
                <option value="escalofrio">escalofrio</option>
                <option value="fatiga">fatiga</option>
                <option value="frio">frio</option>
                <option value="gripa">gripa</option>
                <option value="gripe">gripe</option>
                <option value="mareo">mareo</option>
                <option value="mareos">mareos</option>
                <option value="nausea">nausea</option>
                <option value="sudor">sudor</option>
                <option value="sueño">sueño</option>
                <option value="temperatura">temperatura</option>
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