import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard  from "./scenes/dashboard";
import FAQ  from "./scenes/faq";
import Bar  from "./scenes/bar";
import Pie  from "./scenes/pie";
import Line  from "./scenes/line";
import Geography  from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
       <div className="app">
        <Sidebar/>
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/faq" element={<FAQ/>}/> 
            <Route path="/bar" element={<Bar/>}/> 
            <Route path="/pie" element={<Pie/>}/> 
            <Route path="/line" element={<Line/>}/> 
            <Route path="/geography" element={<Geography/>}/> 
          </Routes>
        </main>
       </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
