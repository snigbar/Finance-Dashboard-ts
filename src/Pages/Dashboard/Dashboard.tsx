import {Box, useMediaQuery} from '@mui/material'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'



const gridTemplate = 
`
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`

const gridTemplateSmall = 
`
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`

const Dashboard = () => {
    const isAboveMedia = useMediaQuery("(min-width: 1200px)")

  return (
   <Box width="100%" height="100%" display='grid' gap="1rem"
   sx={isAboveMedia?{
    gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
    gridTemplateRows: "repeat(10, minmax(50px, 1fr))",
    gridTemplateAreas: gridTemplate,
}:
{
    gridAutoColumns: "1fr",
    gridAutoRows: "80px",
    gridTemplateAreas: gridTemplateSmall,
}
}
>
    {/* row 1 */}
    <Row1></Row1>
    {/* row2 */}
    <Row2></Row2>
    {/* row3 */}
    <Row3></Row3>
   


   </Box>
  )
}

export default Dashboard