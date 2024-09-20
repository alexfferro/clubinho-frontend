import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react'

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

interface MyDateSelectorProps {
  onDateChange: (date: string) => void;
}

const MyDateSelector: React.FC<MyDateSelectorProps> = ({onDateChange}) => {
  const currentYear = new Date().getFullYear();
  const [years] = useState<number[]>(Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i));
  const [days, setDays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  useEffect(() => {
    updateDays();
  },[selectedMonth, selectedYear]);

  useEffect(()=>{
    const formattedDate = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
    onDateChange(formattedDate)
  },[selectedDay, selectedMonth, selectedYear, onDateChange])

  const updateDays = () => {
    const daysInMonth = new Date(parseInt(selectedYear), selectedMonth + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setDays(daysArray);
    if (!daysArray.includes(selectedDay)) {
      setSelectedDay(1); // Reset to first day if not valid
    }
  };

  return (
    <div className='px-8'>
      <label className="px-4 font-light">Data de Nascimento</label>
      <div className="flex gap-2 text-primary justify-between">
        <div className="flex bg-primary bg-opacity-30 rounded-2xl items-center px-1">
          <select
            className="bg-primary bg-opacity-0 placeholder:text-primary py-1 px-4 font-light appearance-none outline-none"
            id="day"
            value={selectedDay}
            onChange={(e) => setSelectedDay(Number(e.target.value))}
          >
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          <ChevronDown/>
        </div>   
        <div className="flex bg-primary bg-opacity-30 rounded-2xl items-center px-1">
          <select
            className="bg-opacity-0 bg-primary placeholder:text-primary py-1 px-4 rounded-2xl font-light w-60 appearance-none outline-none"
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <ChevronDown/>
        </div>
        <div className="flex bg-primary bg-opacity-30 rounded-2xl items-center px-1">     
          <select
          className="bg-opacity-0 bg-primary placeholder:text-primary py-1 px-4 rounded-2xl font-light appearance-none outline-none"
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <ChevronDown/>
        </div>  
      </div>
    </div>
  );
};

export default MyDateSelector;
