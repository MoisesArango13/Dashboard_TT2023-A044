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
        <Box m="26px">
         <Header title="Efectos por alcaldía" subtitle="Gráfica de pastel" />

          <p>Las alcaldías que reportaron más efectos secundarios fueron Benito Juárez, Cuauhtémoc, Coyoacán, Tlalpan, y Miguel Hidalgo. Las cuales tuvieron como principales efectos dolor de cabeza, dolor de brazo y fiebre.</p>
          <p></p>
          <p>Para conocer los efectos por alcaldía. Seleccione el de su interes.</p>

          <div>
          <select value={efecto} onChange={createHandleOptionChange(seleccionEfecto)} 
              style={{
              color: "#000",
              backgroundColor: colors.greenAccent[400],
              borderRadius: "10px",
              padding: "7px",
              borderColor: "grey",
              borderWidth: "3px",
              borderStyle: "solid",
              display: 'inline-block', 
              marginRight: '10px',
              marginBottom: '15px' 
              }}>
                <option value="dolor cabeza">Dolor cabeza</option>
                <option value="cansado">Cansado</option>
                <option value="cansancio">Cansancio</option>
                <option value="ciclo menstrual">Ciclo menstrual</option>
                <option value="colico">Colico</option>
                <option value="cuerpo cortado">Cuerpo cortado</option>
                <option value="dolor articulacion">Dolor articulacion</option>
                <option value="dolor articular">Dolor articular</option>
                <option value="dolor brazo">Dolor brazo</option>
                <option value="dolor cuerpo">Dolor cuerpo</option>
                <option value="dolor garganta">Dolor garganta</option>
                <option value="dolor muscular">Dolor muscular</option>
                <option value="escalofrios">Escalofrios</option>
                <option value="escalofrio">Escalofrio</option>
                <option value="fatiga">Fatiga</option>
                <option value="fiebre">Fiebre</option>
                <option value="frio">Frio</option>
                <option value="gripa">Gripa</option>
                <option value="gripe">Gripe</option>
                <option value="mareo">Mareo</option>
                <option value="mareos">Mareos</option>
                <option value="nausea">Nausea</option>
                <option value="sudor">Sudor</option>
                <option value="sueño">Sueño</option>
                <option value="temperatura">Temperatura</option>
            </select>
          </div>
          
          <Box height="75vh">
             <PieChart effect = {data}/>
          </Box>
        </Box>
    )

}

export default Pie;