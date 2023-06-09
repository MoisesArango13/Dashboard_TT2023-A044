import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

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
        <Header title="DASHBOARD EFECTOS DE LA VACUNA VS COVID-19 EN CDMX"  />
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
            title="128,101"
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
            title="431,225"
            subtitle="Tweets de Vacunas"
            progress="0.50"
          />
        </Box>

        {/*<Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Nuevos sintomas"
            progress="0.50"
          />
        </Box>*/}

        {/*<Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* <StatBox
            title="1,325,134"
            subtitle="Ejemplo"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        */}
      
        {/* ROW 2 */}
        <Box
          gridColumn="span 9"
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

       {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recientemente agregado
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        */}

        {/* ROW 3 
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
        >
          <Typography variant="h5" fontWeight="600">
            Grafica de pastel
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              Datos
            </Typography>
            <Typography>Texto</Typography>
          </Box>
        </Box>
        */}

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
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h6"
            fontWeight="600"
            sx={{ marginBottom: "9px" }}
          >
            Mapa Calor CDMX
          </Typography>

          <Box height="200VS">
            <GeographyChart effect = {data3} isDashboard={true} />
          </Box>

        </Box>
      </Box>

    </Box>

  );
};

export default Dashboard;
