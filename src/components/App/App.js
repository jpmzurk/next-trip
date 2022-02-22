import "./App.css";
import React from "react";
import UserForm from "../UserForm/Userform";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0097d0",
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 676,
      md: 992,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <div>
            <h1>NexTrip</h1>
          </div>
        </header>
        <main>
          <h2>Real-time Departures</h2>
          <UserForm />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
