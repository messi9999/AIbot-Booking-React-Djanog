import React, { useState } from 'react'
import Header from '../components/Header'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import { Button } from '@mui/material';

export default function ScheduleScreen() {

  const now = new Date();  // Create a new Date object with the current date and time

  // Get the individual components of the date and time
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');  // Months are zero-based, so we add 1 and pad with leading zeros if needed
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  // Format the date and time as "yyyy-mm-ddThh:mm"
  const defaultTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  const [value, setValue] = useState(dayjs(defaultTime));
  const [notes, setNotes] = useState("")
  

  const handleOnAccept = () => {
    console.log(value)
    console.log(notes)
    console.log(now)
    console.log(defaultTime)
  }

  const handleOnCancel = () => {
    setValue(dayjs(defaultTime))
  }

  return (
    <>
        <div><Header /></div>
        <div className='bg-sky-300' style={{height:"880px"}}>
          <div className="grid grid-cols-4 gap-4">
            <div className='col-span-3 grid grid-cols-2 gap-4 p-20'>
              <div className='flex justify-center'>              
                <div className='bg-slate-100 p-9 w-min h-min rounded-2xl outline outline-2 outline-green-700 flex justify-center align-items-center'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        'DateTimePicker',
                        'MobileDateTimePicker',
                        'DesktopDateTimePicker',
                        'StaticDateTimePicker',
                      ]}
                      >
                      <DemoItem>
                        <StaticDateTimePicker defaultValue={dayjs(defaultTime)} value={value} onChange={(newValue) => setValue(newValue)} onAccept={handleOnAccept} onCancel={handleOnCancel}/>
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-col justify-start p-7">
                <div className='mb-4'>
                  <label className='text-2xl text-cyan-700 font-bold'>Notes</label>
                </div>
                <div className='mb-10'>
                  <textarea className='w-full rounded-lg p-4 py-6 overflow-y-clip shadow-lg outline outline-2 outline-green-700 bg-lime-50 font-sans font-semibold' value={notes} rows={20} onChange={e=>setNotes(e.target.value)}></textarea>
                </div>
                <div className='flex justify-end'>
                  <Button variant="contained">Schedule Now</Button>
                </div>
              </div>
            </div>
            <div className='bg-teal-100 mt-10 me-10 rounded-xl'></div>
          </div>
        </div>
    </>
    
  )
}
