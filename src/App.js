import './App.css';
import {Button, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {TestContainer} from "./containers/TestContainer";
import React from "react";
import {Home} from "./containers/Home";

const roundOptions = JSON.parse("[\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"NOGO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"NOGO\",\"GO\",\"NOGO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"GO\",\"NOGO\",\"NOGO\",\"GO\",\"NOGO\"]")


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const demoOptions = ["GO", "GO", "NOGO", "NOGO", "GO", "GO", "GO", "GO", "NOGO", "GO"]

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={(<Home />)}/>
                    <Route path="game" element={(<TestContainer roundOptions={roundOptions}/>)}/>
                    <Route path="demo" element={(<TestContainer roundOptions={demoOptions}/>)}/>
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
