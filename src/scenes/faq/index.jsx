import { Box, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (

    <Box m="19px">
      <Header title="Acerca de Nosotros" subtitle="Preguntas y Respuestas sobre el sitio web." />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿Quiénes somos?
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
            Nosotros somos Moisés Arango León y Erick Quintana Martínez, 
            alumnos de la carrera Ingeniería en Sistemas Computacionales 
            de la Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿De qué trata nuestro proyecto?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tenemos la clara misión de apoyar a la población dentro de la Ciudad de México contribuyendo 
          a complementar la información sobre los efectos secundarios a causa de la vacuna contra COVID-19.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿Qué puedo hacer en este sitio web?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para que uses este sitio web de la mejor manera te pedimos de favor seguir con atención las 
            siguientes instrucciones en donde podrás consultar de manera dinámica en tres tipos de Gráficas y un Mapa de Calor  
            los tipos de efectos secundarios que surgen
          </Typography>
          <Typography>
            al aplicarse las vacunas con base en datos extraídos de la red social Twitter.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿Cómo utilizar la Gráfica de Barras?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Debes seleccionar el efecto secundario que quieras analizar junto con la marca de vacuna de tu interes, de esa manera 
            podrás notar cuantos efectos secundarios se encontraron con la marca de vacuna elegida y en que alcaldías se presentaron.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿Cómo utilizar la Gráfica de Pastel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Debes seleccionar el efecto secundario de tu interes, una vez elegido se mostrará de manera porcentual en que alcaldías tuvo más menciones
            en caso de que no estuviera presente en la alcadía no se mostrará en la gráfica.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿Cómo utilizar la Gráfica Lineal?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Debes seleccionar tres efectos secundarios distintos así como el año de comparación, para que puedas ver cuantas veces se mencionaro
            a lo largo del año.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h6">
            ¿Cómo utilizar el Mapa de Calor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Debes seleccionar el efecto secundario de tu interes para verlo reflejado en el Mapa, entre más rojo este es dónde se concentraron
            las menciones del efecto seleccionado.
          </Typography>
        </AccordionDetails>
      </Accordion>

     

    </Box>

  );

};

export default FAQ;
