import React, { useState } from 'react'
import {useTheme,Typography,Box} from '@mui/material'
import { Link } from "react-router-dom";
import PixIcon from '@mui/icons-material/Pix'
import { FlexBetween } from '@/Components/FlexBetween/FlexBetween'



type Props = {}



const Navbar = (props: Props) => {
    const [selected, setSelected] = useState("dashboard");
    const {palette} = useTheme()

  return (
    <FlexBetween mb='0.25 rem' color={palette.grey[300]}>
    {/* left nav */}
    <FlexBetween gap='0.75rem'>
    <PixIcon sx={{fontSize: '28px'}}></PixIcon>
    <Typography variant='h4' fontSize={'16px'}>Financia</Typography>
    </FlexBetween>

    {/* right nav */}
    <FlexBetween gap={'2rem'}>
    <Box sx={{"&:hover": { color: palette.primary[100] } }}><Link to='/'  onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}>Dashboard</Link></Box>
    <Box sx={{"&:hover": { color: palette.primary[100] } }}><Link to='/prediction'  onClick={() => setSelected("prediction")}
            style={{
              color: selected === "prediction" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}>Prediction</Link></Box>
    </FlexBetween>
   

    </FlexBetween>
  )
}

export default Navbar