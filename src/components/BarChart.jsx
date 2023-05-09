import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
//import { mockBarData as data } from "../data/mockData";
import axios from 'axios';
import React, { useState, useEffect} from 'react';

const BarChart = ({ isDhasboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [data, setData] = useState([]);
    
  useEffect(() => {

    const params = {
      tipo: '',
      fecha_inicial: '2021-06-07',
      fecha_final: '2021-07-24'
    };
    
    axios.get('http://localhost:5000/efectos_por_mes', {params})
      .then(response => {
        const recordsets = response.data.recordset;
        let mes = recordsets.map(value => value.mes);
        let año = recordsets.map(value => value.año);
        let total = recordsets.map(value => value.total);

        const values = mes.map((label, index) => {
          let fecha = label + "-" + año[index];
          let efecto = params.tipo + " " + fecha;
          return {
            fecha: fecha,
            [efecto]: total[index],
           "color": `hsl(${index * 162}, 70%, 50%)`,
          };
        });
        setData(values)
        //console.log(values)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const dates = []

  data.forEach(function(element) {
    const keys = Object.keys(element);
    dates.push(keys[1]); 
  });

    return (
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

          keys={dates} 
          indexBy="fecha"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
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
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDhasboard ? undefined : "fecha", // changed
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDhasboard ? undefined : "valor", // changed
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
      );

}

export default BarChart;
