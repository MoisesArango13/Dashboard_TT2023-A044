import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

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
                        margin: "10px 0 20px 0",
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
                                    2023-A044
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollappsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/*Usuario*/}
                    {!isCollappsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <img 
                        alt ="profile-user"
                        width="100px"
                        height = "100px"
                        src={"../../assets/usuario.png"}
                        style={{ cursor: "pointer", borderRadius:"50%"}}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography 
                         variant="h2"
                         color={colors.grey[100]} 
                         fontWeight="bold" 
                         sx={{ m: "10px 0 0 0"}}
                         >
                            Moises Arango
                        </Typography>
                        <Typography
                        variant="h5"
                        color={colors.greenAccent[500]}
                        >Administrador
                        </Typography>
                    </Box>
                </Box>
                 )}

                 {/*Items para nuestro MENU */}
                 <Box paddingLeft={isCollappsed ? undefined : "10%"}>
                 <Item 
                    title="Dashboard"
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
                    Data
                </Typography>

                <Item 
                    title="Equipo"
                    to="/team"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Contactos"
                    to="/contacts"
                    icon={<ContactsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Balances"
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx = {{ m: "15px 0 5 px 20px"}}
                  >
                    Personal
                </Typography>
                
                <Item 
                    title="Nuevo Perfil"
                    to="/form"
                    icon={<PersonOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Calendario"
                    to="/calendar"
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx = {{ m: "15px 0 5 px 20px"}}
                  >
                    Tablas de datos
                </Typography>

                <Item 
                    title="Tabla de Barras"
                    to="/bar"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Tabla de Pastel"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Tabla Lineal"
                    to="/line"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item 
                    title="Tabla geografica"
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
                    title="FAQ Page"
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