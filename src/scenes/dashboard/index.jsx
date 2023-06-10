import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);

  const data = [ //parámetros por default grafica lineal
    'fiebre',
    'dolor de brazo',
    'dolor de cabeza',
    2020,
  ];

  const data2 = [//parámetros por default 
    'sueño',
    'cansino'
  ];

  const data3 = [//parámetros por default 
    'fiebre',
  ];

  return (

    <Box m="10px">
      
      {/* HEADER */}

      <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
      >
        <Header title="DASHBOARD EFECTOS DE LA VACUNA CONTRA COVID-19 EN CDMX"  />
      </Box>

      {/* GRID & CHARTS */}

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows={isSmallScreen ? "auto" : "140px"}
        gap="20px"
      >
        {/* FILA 1 */}
        <Box //tweets totales
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="128,292"
            subtitle="Tweets Recolectados"
            progress="1"
          />
        </Box>

        <Box //tweets posibles efectos
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="606"
            subtitle="Posibles efectos secundarios"
            progress="0.4"
          />
        </Box>
      
        {/* ROW 2 */}

        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ padding: "20px 10px 0 30px" }}
          >
            Gráfica de barras
          </Typography>
          <Box height="300px" mt="50px">
            <BarChart datos = {data2} isDashboard={true} />
          </Box>
        </Box>

      
        {/* ROW 3 */}
          
        <Box //mapa de calor
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          padding="15px"
          height="300vs"
          border={`1px solid ${colors.grey[100]}`}
          borderRadius="5px"
          style={{ overflow: "hidden" }}
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ marginBottom: "9px" }}
          >
            Mapa de Calor CDMX
          </Typography>

          <Box 
            height="200vs"
            border={`1px solid ${colors.grey[100]}`}
            borderRadius="5px"
          >
            <GeographyChart effect = {data3} isDashboard={true} />
          </Box>

        </Box>

        <Box //grafica lineal
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="4px"
            p="1px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>

              <Typography
                variant="h6"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Potenciales efectos grafica lineal
              </Typography>
            </Box>
            
          </Box>

          <Box height="230px" m="-10px 50px 0 0">
            <LineChart effects = {data} isDashboard={true} />
          </Box>
        </Box>

      </Box>

    </Box>

  );
};

export default Dashboard;
