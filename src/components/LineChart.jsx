import { ResponsiveLine } from "@nivo/line";

import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import React, { useState, useEffect} from 'react';

const LineChart = ({ effects, isCustomLineColors = false, isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    let [data, setData] = useState([]);

    useEffect(() => {
      
      //console.log(effects);
      const length = effects.length;
      
      let values = [];

      const colores = [tokens("dark").greenAccent[500], tokens("dark").blueAccent[300], 
      tokens("dark").redAccent[200]];

      for(let i = 0; i < length - 1; i++){
        const params = {
          tipo: effects[i],
          anio: effects[length - 1],
        };

        fetch(`http://localhost:5000/efectos_por_anio?${new URLSearchParams(params)}`)
  .then(response => response.json())
  .then(datas => {
          const recordsets = datas.recordset;
          let meses = recordsets.map(value => value.mes);
          let total = recordsets.map(value => value.total);

          const lista_meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

          const datos = lista_meses.map(mes => {
            const index = meses.indexOf(mes);
            const y = index !== -1 ? total[index] : 0;
            return { x: mes, y };
          });
          
          values.push(
            {
              id: effects[i],
              color: colores[i],
              data: datos
            }
          );
          //console.log(values)
          
        })
        .catch(error => {
          console.log(error);
        });
      }
      setTimeout(() => {
        setData(values);
      }, 1000); // update the state after 1 second
      //setData(values)
      console.log(values)
    }, [effects]);
    console.log(data);
    //console.log(mockLineData);

import { mockLineData as data } from "../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <ResponsiveLine
        data={data}
        theme={{
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
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",

          //zero: false,
          //stacked: true,
          //reverse: false,

          stacked: true,
          reverse: false,

        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,

          legend: isDashboard ? undefined : "meses", // added

          legend: isDashboard ? undefined : "transportation", // added

          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,

          legend: isDashboard ? undefined : "valor", // added

          legend: isDashboard ? undefined : "count", // added

          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    );
};

export default LineChart;
