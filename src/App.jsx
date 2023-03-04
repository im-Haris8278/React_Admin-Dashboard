import React, { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/Global/TopBar";
import Sidebar from "./scenes/Global/Sidebar";
import Dashboard from "./scenes/Dashboard/Dashboard";
import Team from "./scenes/Team/Team";
import Invoices from "./scenes/Invoices/Invoices";
import Contacts from "./scenes/Contacts/Contacts";
import Bar from "./scenes/Bar/Bar";
import Form from "./scenes/Form/Form";
import Line from "./scenes/Line/Line";
import Pie from "./scenes/Pie/Pie";
import Faq from "./scenes/Faq/Faq";
import Geography from "./scenes/Geography/Geography";
import Calendar from "./scenes/Calendar/Calendar";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
