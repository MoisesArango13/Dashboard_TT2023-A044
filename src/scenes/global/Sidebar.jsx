import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import logoImage from '../../vacunacion.png';

const Item = ({ title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <MenuItem 
           active ={selected === title} 
           style={{ 
              color: colors.grey[100],
            }} 
           onClick={()=> setSelected(title)} 
           icon= {icon}
           >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollappsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
          sx = {{

             width: "100%",

             "& .pro-sidebar-inner": {
                 background: `${colors.primary[400]} !important`,
             },
             "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
             },
             "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
             },
             "& .pro-inner-item:hover": {
                color: "#868dfb !important",
             },
             "& .pro-menu-item.active": {
                color: "#687fa !important"
             },
          }}
        >
            <ProSidebar collapsed={isCollappsed}>
                <Menu iconShape="square">
                    {/*Logos e icono del menu*/}
                    <MenuItem
                      onClick={() => setIsCollapsed(!isCollappsed)}
                      icon={isCollappsed ? <MenuOutlinedIcon/> : undefined}
                      style={{
                        margin: "20px 0 20px 0",
                        color: colors.grey[100],
                      }}
                      >
                        {!isCollappsed &&( 
                            <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                   TT 2023-A044
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollappsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*Logo*/}
                    {!isCollappsed && (
                    <Box mb="30px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <img 
                        alt ="logo-app"
                        width="130px"
                        height = "130px"
                        src={logoImage}
                        style={{ cursor: "pointer", borderRadius:"70%"}}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography 
                         variant="h3"
                         color={colors.grey[100]} 
                         fontWeight="bold" 
                         sx={{ m: "10px 0 0 0"}}
                         >
                            Bienvenido
                        </Typography>

                        {/*        <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        >
                        </Typography>
                     */ }
                    </Box>
                </Box>
                 )}

                 {/*Items para nuestro MENU */}
                 <Box paddingLeft={isCollappsed ? undefined : "6%"}>
                 <Item 
                    title="Inicio"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx = {{ m: "15px 0 5 px 20px"}}
                  >
                    Gráficas Disponibles
                </Typography>

                <Item 
                    title="Efectos por vacuna"
                    to="/bar"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Efectos por alcaldia"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Efectos por año"
                    to="/line"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Efectos por coordenadas - Mapa de Calor"
                    to="/geography"
                    icon={<MapOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx = {{ m: "15px 0 5 px 20px"}}
                  >
                    Información
                </Typography>
                
                <Item
                    title="Preguntas Frecuentes"
                    to="/faq"
                    icon={<HelpOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                
                 </Box>
            </Menu>
            </ProSidebar>
         </Box>
                 
    );
};

export default Sidebar;
