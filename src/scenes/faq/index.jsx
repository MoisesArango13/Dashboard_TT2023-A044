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
    <Box m="20px">
      <Header title="Acerca de Nosotros" subtitle="Preguntas y Respuestas sobre el proyecto" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
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
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿De qué trata nuestro proyecto?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Tenemos la clara misión de apoyar a la población dentro de la Ciudad de México contribuyendo 
          a complementar la información sobre los efectos secundarios a causa de la vacuna vs COVID-19,
          que tiene como propósito orientar a sus usuarios sobre que tipos de riesgos o efectos
          surgen al aplicarse las vacunas con base en datos de la red social Twitter.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Ejemplo Pregunta
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
