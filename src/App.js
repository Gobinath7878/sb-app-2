import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Buttons from "./scenes/buttons";
import Cards from "./scenes/cards";
import Colors from "./scenes/colors";
import Borders from "./scenes/borders"
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Chart from "./scenes/chart";
import FAQ from "./scenes/faq";
import Teachers from "./scenes/teachers"
import Students from "./scenes/students";
import Notice from "./scenes/noticeboard";
import Courses from "./scenes/courses"
import Departments from "./scenes/departments";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Studentcrud from "./scenes/studentcrud";
import Teachercrud from "./scenes/teachercrud";
import  Studentdetails from "./scenes/studentdetails";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // const navigate = useNavigate();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/borders" element={<Borders />} />
              <Route path="/form" element={<Form />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/noticeboard" element={<Notice />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/studentcrud" element={<Studentcrud/>} />
              <Route path="/teachercrud" element={<Teachercrud/>} />
              <Route path="/studentdetails" element={<Studentdetails/>} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


