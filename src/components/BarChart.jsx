import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
//import { mockTransactions } from "../data/mockData";
import axios from 'axios';
import React, { useState, useEffect} from 'react';

const BarChart = ({ datos, isDhasboard = false }) => {
  //console.log(datos);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  let tipo_efecto = datos[0];
  let marca_vacuna = datos[1];
    
  useEffect(() => {
    const params = {
      tipo: tipo_efecto,
      marca: marca_vacuna
    };
    
    axios.get('http://localhost:5000/efectos_por_marca', {params: params})
      .then(response => {
        
        const recordsets = response.data;
        //console.log(recordset)
        let alcaldia = recordsets.map(value => value.alcaldia);
        let total = recordsets.map(value => value.total);

        const values = alcaldia.map((label, index) => {
          let tipo = params.tipo + "-" + params.marca;
          return {
            alcaldia: label,
            [tipo]: total[index],
           "color": `hsl(${index * 62}, 70%, 50%)`,
          };
        });
        setTimeout(() => {
          setData(values);
        }, 2000);
        console.log(values)
      })
      .catch(error => {
        //console.log(error);
      });
  }, [datos]);

  const llaves = [];
  let totales = [];

  data.forEach(function(element) {
    const keys = Object.keys(element);
    totales.push(element[keys[1]]);
    llaves.push(keys[1]); 
  });

  let max = Math.max(...totales);
  
    return (
      <>
      <h2 style={{ textAlign: "center" }}>
        Efecto {tipo_efecto} con la vacuna {marca_vacuna}
        </h2>
        <ResponsiveBar
          data={data}
          theme={{
            // added
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}

          keys={[llaves[0]]} 
          indexBy="alcaldia"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear", min: 0,
          max: max,
          clamp: true}}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}

          tooltip={({ id, value }) => (
            <strong style={{ color: "black" }}>
              {id}: {value}
            </strong>
          )}

          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", "1.6"]],
          }}
          
          //enableGridX={false}
          enableGridY={false}

          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDhasboard ? undefined : "alcaldia", // changed
            legendPosition: "middle",
            legendOffset: 32,
          }}
          
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDhasboard ? undefined : "Cantidad de efectos encontrados", // changed
            legendPosition: "middle",
            legendOffset: -40,
          }}
          
          enableLabel={false}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          /*
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}*/
          role="application"
          barAriaLabel={function (e) {
            return e.id + ": " + e.formattedValue + " in fecha: " + e.indexValue;
          }}
        />
        </>
      );

}

export default BarChart;
