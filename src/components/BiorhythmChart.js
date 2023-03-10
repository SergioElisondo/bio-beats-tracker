import {CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis} from "recharts"
import {calculateBiorhythmSeries} from "../lib/biorhythms"

import './BiorhythmChart.css'

// const data = [
//   {date: '2022-10-01', physical: 1.0, emotional: -0.5, intellectual: -1.0},
//   {date: '2022-10-02', physical: -1.0, emotional: 1.5, intellectual: 0.0},
//   {date: '2022-10-03', physical: 0, emotional: 0.5, intellectual: 1.0},
// ]

function BiorhythmChart({birthDate, targetDate}) {
  const series = calculateBiorhythmSeries(birthDate, targetDate, 15)
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={series}>
          <CartesianGrid vertical={false} strokeDasharray="2 4" />
          <XAxis dataKey="date" ticks={[series[3].date, series[15].date, series[27].date]} />
          <ReferenceLine x={series[15].date} />
          <Line dataKey="physical" stroke="#F14668" dot={false} type="natural" />
          <Line dataKey="emotional" stroke="rgb(207, 162, 48)" dot={false} type="natural" />
          <Line dataKey="intellectual" stroke="rgb(22 187 167)" dot={false} type="natural" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BiorhythmChart
