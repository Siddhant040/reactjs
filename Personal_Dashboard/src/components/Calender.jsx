import Calendar from 'react-calendar'
import { useState } from 'react'

export default function CalendarWidget() {

  const [date, setDate] = useState(new Date())

  return (
    <div className="bg-[#283248] rounded-3xl p-4">
   <Calendar />
   onChange={setDate}
   value={date}
</div>
  )
}