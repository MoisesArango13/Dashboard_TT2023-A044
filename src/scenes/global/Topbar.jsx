import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext} from "../../theme";
import LightModeOutlineIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlineIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return(
         <Box display="flex" justifyContent="space-between" p={2}>
            
            {/*Sección de Iconos*/}
            <Box display="flex" marginLeft="auto">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? ( 
                        <DarkModeOutlineIcon/>
                    ) : (
                        <LightModeOutlineIcon/>
                    )}
                </IconButton>   
            </Box>
         </Box>
    );
    
}

export default Topbar;  