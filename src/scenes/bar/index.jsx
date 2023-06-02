import Header from '../../components/header';
import BarChart from "../../components/BarChart";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import axios from 'axios';
import React, { useState, useEffect} from 'react';

let tweets_iniciales = [
  {
  tweet: "Actualización Vacuna AstraZeneca: toda la madrugada estuve con escalofríos, un poco de dolor de cabeza y febrícula. Hoy amanecí chida ??, ya solo dolor en e brazo.",
  },
  {
  tweet: "locatel #VacunaCOVID19 #AstraZeneca mi temperatura ya supero los 38 ° a qué hora me empiezo a preocupar?",
  },
  {
  tweet: "@AniiParra1 En mi 3er dosis (Astra) tuve un poco de dolor de brazo y mucha fatiga, pasé toda la tarde durmiendo, al otro día anduve al 90%afortunadamente al 2do día ya al 100. Quedo al pendiente.",
  },
  {
  tweet: "@carloselpika @Cuauhtemoc_1521 @KyoWasTaken Nos unimos al club de la vacuna #aztrazeneca a temperatura y escalofrio, verdad @sakura092982",
  },
  {
  tweet: "@CaymanMexico @BicireporteraDF A mi me vacunaron con la de Astra y todo súper, solo el dolor del brazo",
  },
  {
  tweet: "@CERISEYAZZ Que te crees que ando bien adolorido, me duele la cabeza y el cuerpo, me tocó la vacuna ayer, Astra Zeneca y me pegó duro.... Espero mañana amanecer mejor, pero éso si a votar en contra de Morena!!!",
  },
  {
  tweet: "@Chescan4 AstraZeneca. Con la 2a dosis tuve dolor de cabeza intenso x 2 dias, un poco de tos, dificultad para respirar y cansancio. Luego desapareció todo",
  },
  {
  tweet: "@chix Saludos Hermano! Yo acompañé a mi Mamá en la Benito Juárez y le tocó AstraZeneca, le fue bien, pero sin presentó reacción a la vacuna, por día y medio tuvo dolor de cuerpo, dolor de articulaciones y un poco de dolor de cabeza, pero con paracetamol la libró bien.",
  },
  {
  tweet: "@Cuauhtemoc_1521 @asordog En mi caso, la primera dosis fue mucho peor que la segunda dosis de Astra Zeneca. En la primera tuve escalofríos, dolor muscular, en la segunda no me dolió nada.",
  },
  {
  tweet: "@Cuauhtemoc_1521 A mí también me dio fiebre con la 2a dosis de #AztraSeneca y mucho cansancio, que te mejores. Coincido en dejarme acompañar por María Auxiliadora y San Francisco de Asís es inspirador.",
  },
  {
  tweet: "@Cuauhtemoc_1521 Así estuve yo con la primera dosis de Astra Zeneca y en la segunda dosis fue más leve solo temperatura y estuve tomando paracetamol por dos días cada 6 horas y todo termino muy bien",
  },
  {
  tweet: "@DrChavezDiaz @COFEPRIS Esto ya habian dicho d la 2a dosis a los 6 meses, casi sin efectos secundarios a mí me duró el dolor de cabeza 5 días, cuerpo 3 días, dolor de estómago, náuseas, a mis hermanos les tocó Astra Zeneca en Iztapalapa Población 30-39 años como si nada, mos papás Sputnik y sin efectos"
  },
  {
  tweet: "@DrMauricioGon Doc. ¿Puede informar porqué después de vacunarse (Astra Zeneca) los síntomas de dolor de articulaciones del cuerpo humano duran días y hasta semanas?"
  },
  {
  tweet: "@edusax79 de la frutisima, vómitos, diarrea, febricula, dolor de cabeza infernal... 2a dosis del diablo #AstraZeneca"
  },
  {
  tweet: "@Elkekeke @camelia03499471 Si se vacuno en Benito Juarez o Cuauhtemoc fue la de AstraZeneca y a mi mama tambien le dio mucho sueño y a dos tios también, es un efecto de la vacuna quiero suponer... pero nunca nos comentaron nada del sueño solo fiebre y dolor en el brazo... pero de ahi en fuera todo bien ????"
  },
  {
  tweet: "@GlodeJo07 Yo sólo tuve ligero dolor de cabeza y brazo,obviamente mi vacuna fue Aztra Zeneca.... Las molestias secundarias en todo tipo de vacunas con virus atenuado son normales, lo sé ir hay que atender son las molestias persistentes o intensas..."
  },
  {
  tweet: "@Hectorcillo_Gar @zuleikaazul @MonyLoOficial @alfa913fm Yo sentí sueño y hambre con la vacuna Aztra Zeneca. De hecho, siempre tengo hambre y sueño! Jajaja! ???? #Vacuna"
  },
  {
  tweet: "@HLGatell Dr. Está vacuna a echo reacción en muchas personas con dolor de cabeza y más porque se autorizo Astra y no la misma que se puso con segunda dosis y en reportes dice que aztra no es efectiva contra omicron debe de dar una respuesta ."
  },
  {
  tweet: "@IngGonzaloCort2 Yo tengo ya las dos dósis de AztraZeneca y y las reacciones fueron prácticamente nulas a excepción de un ligero dolor de cabeza y brazo 12 hrs después de la primera dósis, la segunda 8 semanas después no tuve ninguna reacción... https://t.co/MJnQxVtcG8"
  },
  {
  tweet: "@LaChinatriple Sabes que vacuna están poniendo en Tlalne? Acá en Coyoacán pusieron la Aztra Zeneca y tuve cuerpo cortado, dolor de cabeza y algo de dolor en el brazo por dos días."
  },
  {
  tweet: "@oak_erick Astrazeneca solo cansancio y ya"
  },
  {
  tweet: "@TeRe_Cisneros Ándale!!! Yo pensé que te tocaría la AstraZeneca ?? Me da gusto que ya estés vacunada, Tere. Te mando un abrazote y espero no pase del dolor de cabeza."
  },
  {
  tweet: "A @WilliamValdes A Victor Manuel bornacini hervella me vacunaron con astraceneca las tres me Calderón más o menos tuve q consultar médico para los dolores musculares me dieron paresetamol. Como sigues de tus dolores musculares ya consultaste médico amiguismo William ?? ?? ????"
  },
  {
  tweet: "A @ZoilaReyna10 Tuve dolor de cabeza, de estómago, moretones en el brazo que vacunaron y fiebre durante 2 días. Me tocó Aztraseneca."
  },
  {
  tweet: "13 Horas 10 minutos POSTVACUNA COVID Cuerpo cortado, ligero dolor de cabeza y mucha fatiga #VacunaCOVID19 #AstraZeneca @SimpsonitoMX https://t.co/TKzK9kCqi4"
  },
  {
  tweet: "72 horas después y ya sin dolor de cuerpo, estoy lista para retomar la vida. Entonces... ¿A dónde paso a recoger mi playera y botón de que sobreviví a la primera dosis de la Astra Zeneca? ??"
  },
  {
  tweet: "8:11 pm dolor de cabeza y mucha fatiga ???? #VacunaCOVID19 #AstraZeneca"
  },
  {
  tweet: "A mis padres les pusieron la vacuna de #AstraZeneca papá solo tuvo dolor de cabeza y mamá absolutamente nada. Hoy todos se quejan y lloran, está raro"
  },
  {
  tweet: "A poco más de 12 horas de estar vacunado con la 1er dosis de AstraZeneca no he sentido nada más allá de un ligero dolor en el brazo."
  },
  {
  tweet: "Ah la madre me pusieron la Vacuna de Astra Zeneca para COVID-19 y las reacciones secundarias se sienten de la chingada. Fiebre constante, dolor de cuerpo y dolor de cabeza. Todo sea por protegerse. La organización en Iztapalapa es ejemplar. #COVID19"
  },
  {
  tweet: "Ay bandita tuitera, esta fea la fiebre y el cuerpo cortado. Trataré de dormir. Los cuidados de @suxmx ni en el mejor hospital de #CDMX Hasta aquí mi reporte. P.d. Chingue su madre la vacuna y esa señora Astra. https://t.co/BE75WTGGP1"
  },
  {
  tweet: "Che temperatura ?? va y viene :( cuanto duran estas reacciones de la #VacunaCOVID19 #AstraZeneca"
  },
  {
  tweet: "Como que no aguantan nada ¿no creen? Soy la más chillona para las inyecciones y la neta ni dolió, si un poco de fiebre la primer dosis. Pero la segunda me hizo los mandados. #AztraZeneca"
  },
  {
  tweet: "Creí que no tendría efectos por la vacuna, pero hace un par de horas empecé con mucho frío, escalofríos y dolor de cuerpo. Nada de fiebre afortunadamente (aún) Bueno, nada más me queda esperar. Me pusieron #AstraZeneca ??"
  },
];

const Bar = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let [efecto, seleccionEfecto] = useState('fiebre');
    let [marca, seleccionMarca] = useState('astrazeneca');

    const createHandleOptionChange = (selectedOptionStateSetter) => (event) => {
      selectedOptionStateSetter(event.target.value);
    }

    const getImageSource = () => {
      if (marca === 'astrazeneca') {
        return '../../astrazeneca.png';
      } else if (marca === 'sputnik') {
        return '../../sputnik.png';
      } else if (marca === 'moderna') {
        return '../../moderna.png';
      }else if (marca === 'pfizer') {
        return '../../pfizer.png';
      } else if (marca === 'cansino') {
        return '../../cansino.png';
      }
    }

    let data = [efecto, marca];

    const [tweetsEstado, setTweets] = useState(tweets_iniciales);
    
    useEffect(() => {
      const params = {
        marca: marca,
      };

      axios.get('http://localhost:5000/tweets_por_marca', {params:params})
        .then(response => {
          let tweets = [];

          const recordsets = response.data;
          let tweets_recuperados = recordsets.map(value => value.tweet);

          for(let i = 0; i < tweets_recuperados.length; i++){
            let tweet = tweets_recuperados[i];
            tweets.push({tweet: tweet});
          }
          setTweets(tweets);
        })
        .catch(error => {
          console.log(error);
        });
    }, [marca]);

    return (
        <Box m="20px">
         <Header title="Efectos por vacuna" subtitle="Gráfica de barras" />
         <p>Las vacunas que más menciono la gente fueron AstraZeneca y Sputnik -v. En AstraZeneca predominaron los efectos dolor de cabeza, fiebre, dolor de brazo, escalofrío y dolor de cuerpo. Mientras que Sputnik-V los efectos fueron dolor de cabeza, fiebre, dolor de brazo y sueño.</p>
          <p></p>
          <p>Por otra parte, las alcaldías Cuauhtémoc, Benito Juárez, Tlalpan e Iztapalapa tienen como predominante efecto el dolor de cabeza con la vacuna AstraZeneca. En cambio, las alcaldías Coyoacán y Cuauhtémoc sobresale el efecto dolor de brazo, y en la Benito Juárez y Gustavo A Madero se presentó más dolor de cabeza con la vacuna Sputnik-V.</p>
          <p></p>
          <p>Para conocer más al respecto. Seleccione el efecto y vacuna de su interes.</p>
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
              <option value="fiebre">fiebre</option>
              <option value="dolor de cabeza">dolor de cabeza</option>
                <option value="cansado">cansado</option>
                <option value="cansancio">cansancio</option>
                <option value="ciclo menstrual">ciclo menstrual</option>
                <option value="colico">colico</option>
                <option value="cuerpo cortado">cuerpo cortado</option>
                <option value="dolor articular">dolor articular</option>
                <option value="dolor de brazo">dolor de brazo</option>
                <option value="dolor de cuerpo">dolor de cuerpo</option>
                <option value="dolor de garganta">dolor de garganta</option>
                <option value="dolor muscular">dolor muscular</option>
                <option value="escalofrio">escalofrio</option>
                <option value="fatiga">fatiga</option>
                <option value="frio">frio</option>
                <option value="gripe">gripe</option>
                <option value="mareo">mareo</option>
                <option value="nausea">nausea</option>
                <option value="sudor">sudor</option>
                <option value="sueño">sueño</option>
                <option value="temperatura">temperatura</option>
          </select>

          <select value={marca} onChange={createHandleOptionChange(seleccionMarca)}
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
              <option value="astrazeneca">astrazeneca</option>
              <option value="sputnik">sputnik</option>
              <option value="cansino">cansino</option>
              <option value="pfizer">pfizer</option>
              <option value="moderna">moderna</option>
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
              Tweets por vacuna
            </Typography>
          </Box>
          
          {tweetsEstado.map((element, i) => (
            <Box
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.grey[100]}>
                  {element.tweet}
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

          <Box height="75vh">
             <BarChart datos={data}/>
          </Box>
        </Box>
    )

}

export default Bar;
