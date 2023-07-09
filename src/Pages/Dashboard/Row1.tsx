import { DashboardBox } from '@/Components/DashboardBox/DashboardBox'
import { useGetKpisQuery } from '@/State/api'
import { ResponsiveContainer, AreaChart,Area,Tooltip,XAxis,YAxis} from 'recharts'
import {useMemo} from 'react'
import { useTheme} from '@mui/material'
import BoxHeader from '@/Components/BoxHeader'


const Row1 = () => {
  const {data} = useGetKpisQuery()

  const {palette} = useTheme()

  const monthlyRevenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);

  
  return (
   <>

    <DashboardBox gridArea='a'>
      
    <BoxHeader title='Revenue And Expenses' subtitle='Topline indicating Revenue, Bottom line for expenses' sideText='+4%' />

    <ResponsiveContainer width="100%" height='80%'>
      
        <AreaChart
          data={monthlyRevenueExpenses}
          margin={{
            top: 15,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

              <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>

              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
        
          <XAxis dataKey="name" tickLine={false} style={{fontSize:'10px'}}/>
          <YAxis dataKey="revenue" tickLine={false} style={{fontSize:'10px'}}/>
          <Tooltip itemStyle={{color:palette.primary.dark, fontSize:'12px'}}/>
          <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fill="url(#colorRevenue)" fillOpacity={1} />
          <Area type="monotone" dataKey="expenses" stroke={palette.primary.main} fill="url(#colorExpenses)" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
   


    <DashboardBox gridArea='b'></DashboardBox>
    <DashboardBox gridArea='c'></DashboardBox>
   
   </>
  )
}

export default Row1