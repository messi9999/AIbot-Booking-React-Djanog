import React, { useState } from 'react'
import Header from '../components/Header'

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers';

export default function ScheduleScreen() {
  const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
  const [notes, setNotes] = useState("")
  

  const handleOnAccept = () => {
    console.log(value)
    console.log(notes)
  }

  const handleOnCancel = () => {
    setValue(dayjs('2022-04-17T15:30'))
  }

  return (
    <>
        <div><Header /></div>
        <div className='bg-sky-300 h-screen'>
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
                        <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} value={value} onChange={(newValue) => setValue(newValue)} onAccept={handleOnAccept} onCancel={handleOnCancel}/>
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex flex-col justify-start p-7">
                <div className='mb-4'>
                  <label className='text-2xl text-cyan-700 font-bold'>Notes</label>
                </div>
                <div>
                  <textarea className='w-full rounded-lg p-4 py-6 overflow-y-clip shadow-lg outline outline-2 outline-green-700' value={notes} rows={20} onChange={e=>setNotes(e.target.value)}></textarea>
                </div>
              </div>
            </div>
            <div className='bg-teal-100 h-screen'></div>
          </div>
        </div>
    </>
    
  )
}
