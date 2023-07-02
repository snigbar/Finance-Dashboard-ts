import { useMemo } from "react"
import {createTheme} from '@mui/material/styles'
import { ThemeProvider, CssBaseline, Box } from "@mui/material"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./Pages/Navbar"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Prediction from "./Pages/Predictions/Prediction"


function App() {

  const theme = useMemo(()=> createTheme(),[])
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path='/prediction' element={<Prediction></Prediction>}></Route>
        </Routes>

      </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
