import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import axios from 'axios';
import React, { useState, useEffect} from 'react';


const PieChart = ({effect}) => {
  const [data, setData] = useState([]);
  
  let tipo_efecto = effect[0];

  useEffect(() => {

    const params = {
      tipo: tipo_efecto,
    };

    axios.get('http://localhost:5000/efectos_por_alcaldia', {params: params})
      .then(response => {
        const recordsets = response.data;
        let alcaldia = recordsets.map(value => value.alcaldia);
        let total = recordsets.map(value => value.total);

        const datas = alcaldia.map((label, index) => {
          return {
            id: label,
            label: label,
            value: total[index],
            color: `hsl(${index * 62}, 70%, 50%)`, // assigns a different color for each pie slice
          };
        });
        setData(datas)         
      })
      .catch(error => {
        console.log(error);
      });
  }, [effect]);

    const totalValue = data.reduce((total, arc) => total + arc.value, 0);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <>
        <h2 style={{ textAlign: "center" }}>
          Efecto {tipo_efecto}
        </h2>

        <ResponsivePie

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
              basic: {
                color: '#000000', // Set the tooltip text color to black
              },
          },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={5}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}

          
          //arcLinkLabelsSkipAngle={3}
          arcLinkLabelsTextColor={colors.grey[100]}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabel={(arc) => `${Math.round((arc.value / totalValue) * 100)}%`}
          enableArcLabels={true}
          arcLabelsRadiusOffset={0.4}
          arcLabelsSkipAngle={7}
          
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}

          /*legends={[
            {
              anchor: "bottom",
              direction: "column",
              justify: false,
              translateX: 330,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}*/
       />
     </>
    );
};

export default PieChart;