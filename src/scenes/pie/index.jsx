import { Box, useTheme } from "@mui/material";
import Header from '../../components/header';
import PieChart from "../../components/PieChart";
import React, { useState} from 'react';
import { tokens } from "../../theme";

const Pie = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let [efecto, seleccionEfecto] = useState('fiebre');

    const createHandleOptionChange = (selectedOptionStateSetter) => (event) => {
        selectedOptionStateSetter(event.target.value);
    }

    let data = [efecto];

    return (
        <Box m="20px">
         <Header title="Efectos por alcaldía" subtitle="Gráfica de pastel" />

          <p>Las alcaldías que reportaron más efectos secundarios fueron Benito Juárez, Cuauhtémoc, Coyoacán, Tlalpan, y Miguel Hidalgo. Las cuales tuvieron como principales efectos dolor de cabeza, dolor de brazo y fiebre.</p>
          <p></p>
          <p>Para conocer los efectos por alcaldía. Seleccione el de su interes.</p>

          <div>
          <select value={efecto} onChange={createHandleOptionChange(seleccionEfecto)} 
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
          </div>
          
          <Box height="75vh">
             <PieChart effect = {data}/>
          </Box>
        </Box>
    )

}

export default Pie;