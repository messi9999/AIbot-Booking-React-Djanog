import React from 'react'

import {ReactComponent as PcIcon} from "../assets/logos/pcicon.svg"

export default function ChatAnswer(props) {
  return (
    <>
        <div className='flex flex-row justify-start align-items-center me-28 mb-5'>
            <div className='w-10 h-10 flex align-items-center'>
                <PcIcon />
            </div>
            <div className='ms-3 outline outline-1 outline-gray-400 rounded-lg p-2'>
                <p className='break-all'>{props.content}</p>
            </div>
        </div>
    </>    
  )
}
