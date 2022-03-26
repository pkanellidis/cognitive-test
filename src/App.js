import './App.css';
import {Button, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {TestContainer} from "./containers/TestContainer";
import React from "react";
import {Home} from "./containers/Home";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={(<Home />)}/>
                    <Route path="game" element={(<TestContainer/>)}/>
                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                            <p>Invalid path!</p>
                            <Link to="/">
                                <Button>Go Home</Button>
                            </Link>
                        </main>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    </ThemeProvider>
  );
}

export default App;
