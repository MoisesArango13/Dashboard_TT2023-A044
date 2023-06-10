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

  const data = [ //parámetros por default 
    'fiebre',
    'dolor de brazo',
    'dolor de cabeza',
    2021,
  ];

  const data2 = [//parámetros por default 
    'fiebre',
    'astrazeneca'
  ];

  const data3 = [//parámetros por default 
    'fiebre',
  ];

  return (

    <Box m="20px">
      
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
        <Box
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

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="539"
            subtitle="Posibles efectos secundarios"
            progress="0.47"
          />
        </Box>
      
        {/* ROW 2 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Grafica de barras
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart datos = {data2} isDashboard={true} />
          </Box>
        </Box>

      
        {/* ROW 3 */}
        
        
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ marginBottom: "9px" }}
          >
            Mapa Calor CDMXX
          </Typography>

          <Box height="200vs">
            <GeographyChart effect = {data3} isDashboard={true} />
          </Box>

        </Box>

        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
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
                Casos Covid con grafica lineal en CDMX
              </Typography>
            </Box>
            
          </Box>

          <Box height="250px" m="-20px 0 0 0">
            <LineChart effects = {data} isDashboard={true} />
          </Box>
        </Box>

      </Box>

    </Box>

  );
};

export default Dashboard;
