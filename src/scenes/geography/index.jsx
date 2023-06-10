import { Box, useTheme, Typography } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/header";
import { tokens } from "../../theme";
import axios from 'axios';
import React, { useState, useEffect} from 'react';

let tweets_iniciales = [
  {
    tweet: "Actualización Vacuna AstraZeneca: toda la madrugada estuve con escalofríos, un poco de dolor de cabeza y febrícula. Hoy amanecí chida ??, ya solo dolor en e brazo.",
    alcaldia: "Iztapalapa"  
  },
    {
    tweet: "locatel #VacunaCOVID19 #AstraZeneca mi temperatura ya supero los 38 ° a qué hora me empiezo a preocupar?",
    alcaldia: "Gustavo A Madero" 
  },
    {
    tweet: "@AniiParra1 En mi 3er dosis (Astra) tuve un poco de dolor de brazo y mucha fatiga, pasé toda la tarde durmiendo, al otro día anduve al 90%afortunadamente al 2do día ya al 100. Quedo al pendiente.",
    alcaldia: "Iztapalapa" 
  },
    {
    tweet: "@carloselpika @Cuauhtemoc_1521 @KyoWasTaken Nos unimos al club de la vacuna #aztrazeneca a temperatura y escalofrio, verdad @sakura092982",
    alcaldia: "Coyoacan" 
  },

]

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let [efecto, seleccionEfecto] = useState('todos');

  const createHandleOptionChange = (selectedOptionStateSetter) => (event) => {
      selectedOptionStateSetter(event.target.value);
  }

  let data = [efecto];

  const [tweetsEstado, setTweets] = useState(tweets_iniciales);

  const getImageSource = () => {
    if (efecto === 'dolor de cabeza') {
      return '../../dolor_cabeza.png';
    } else if (efecto === 'fiebre') {
      return '../../fiebre.png';
    } else if (efecto === 'dolor de brazo') {
      return '../../dolor_brazo.png';
    }else if (efecto === 'dolor articular') {
      return '../../dolor_articular.png';
    } else if (efecto === 'dolor de cuerpo') {
      return '../../dolor_cuerpo.png';
    }else if (efecto === 'sueño') {
      return '../../sueno.png';
    }else if (efecto === 'mareo') {
      return '../../mareo.png';
    }else if (efecto === 'cuerpo cortado') {
      return '../../cuerpo_cortado.png';
    }else if (efecto === 'temperatura') {
      return '../../temperatura.png';
    }else if (efecto === 'fatiga') {
      return '../../fatiga.png';
    }else if (efecto === 'escalofrío') {
      return '../../escalofrio.png';
    }else if (efecto === ' frio') {
      return '../../frio.png';
    }else if (efecto === 'cansancio') {
      return '../../cansancio.png';
    }else if (efecto === 'dolor de garganta') {
      return '../../dolor_garganta.png';
    }else if (efecto === 'gripe') {
      return '../../gripe.png';
    }else if (efecto === 'cansado') {
      return '../../cansado.png';
    }else if (efecto === 'nausea') {
      return '../../nausea.png';
    }else if (efecto === 'dolor muscular') {
      return '../../dolor_muscular.png';
    }else if (efecto === 'cólico') {
      return '../../cólico.png';
    }else if (efecto === 'sudor') {
      return '../../sudor.png';
    }else if (efecto === 'ciclo menstrual') {
      return '../../ciclo_menstrual.png';
    }else if (efecto === 'todos') {
      return '../../todos.png';
    }
  }

    
  useEffect(() => {
      const params = {
        tipo: efecto,
      };

      axios.get('https://t-tserver.vercel.app/tweets_por_efecto', {params:params})
        .then(response => {
          let tweets = [];

          const recordsets = response.data;
          let tweets_recuperados = recordsets.map(value => value.tweet);
          let alcaldias = recordsets.map(value => value.alcaldia);

          for(let i = 0; i < tweets_recuperados.length; i++){
            let tweet = tweets_recuperados[i];
            let alcaldia = alcaldias[i];

            tweets.push({tweet: tweet, alcaldia: alcaldia});
          }
          setTweets(tweets);
        })
        .catch(error => {
          console.log(error);
        });
    }, [efecto]);

  return (
    <Box m="20px">
      <Header title="Efectos por coordenadas geográficas" subtitle="Mapa de calor" />
      <p>Predomino el centro de la ciudad (Benito Juárez y Cuauhtémoc) con más reportes, asimismo hacia el sur de la ciudad (Coyoacán y Tlalpan) se ve una gran densidad, y de la misma manera pasa con la alcaldía oeste de la ciudad Miguel Hidalgo. </p>
      <p></p>
      <p>Eso se debio a que se encontraron más tweets (en la extracción de datos) en esas alcaldías por el simple hecho de que ya sean que son muy pobladas o existe una gran cantidad de personas que usan Twitter como un medio de comunicación para expresarse de forma más libre (como son el caso de Benito Juárez, Cuauhtémoc y Miguel Hidalgo).</p>
      <div>
          <select value={efecto} onChange={createHandleOptionChange(seleccionEfecto)} 
              style={{
              color: "#000",
              backgroundColor: colors.greenAccent[400],
              borderRadius: "10px",
              padding: "7px",
              borderColor: "black",
              borderWidth: "3px",
              borderStyle: "solid",
              display: 'inline-block', 
              marginRight: '10px',
              marginBottom: '15px' 
              }}>
                  <option value="todos">Todos los efectos</option>
                  <option value="dolor de cabeza">Dolor de cabeza</option>
                  <option value="cansado">Cansado</option>
                  <option value="cansancio">Cansancio</option>
                  <option value="ciclo menstrual">Ciclo menstrual</option>
                  <option value="colico">Colico</option>
                  <option value="cuerpo cortado">Cuerpo cortado</option>
                  <option value="dolor articular">Dolor articular</option>
                  <option value="dolor de brazo">Dolor brazo</option>
                  <option value="dolor de cuerpo">Dolor cuerpo</option>
                  <option value="dolor de garganta">Dolor garganta</option>
                  <option value="dolor muscular">Dolor muscular</option>
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
        </div>

        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >  

        <Box
          gridColumn="span 6"
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
              Tweets de {efecto}
            </Typography>
          </Box>
          
          {tweetsEstado.map((element, i) => (
            <Box
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box marginRight="50px">
                <Typography color={colors.grey[100]}>
                  {element.tweet}
                </Typography>
              </Box>
              <Box>
              <Typography color={colors.grey[100]}>
                  {element.alcaldia}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

         <Box
          gridColumn="span 5"
          gridRow="span 2"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          <img src={getImageSource()} alt="s" height={300}/>
          </Box>
        </Box>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        
        <Box
            height="102.5vh"
            border={`1px solid ${colors.grey[100]}`}
            borderRadius="5px"
            style={{ overflow: "hidden" }}
        >
          <GeographyChart effect = {data}/>
        </Box>
    </Box>
  );
};

export default Geography;
