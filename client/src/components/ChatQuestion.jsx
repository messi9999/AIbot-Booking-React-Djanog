import React from 'react'

import {ReactComponent as UserIcon} from "../assets/logos/UserLogo.svg"

export default function ChatQuestion(props) {
  return (
    <>
        <div className='flex flex-row justify-end align-items-center ms-28 mb-5'>
            <div className='me-3 outline outline-1 outline-gray-400 rounded-lg p-2'>
                <p className='break-all'>{props.content}</p>
            </div>
            <div className='w-10 h-10 flex align-items-center'>
                <UserIcon />
            </div>
        </div>
    </>    
  )
}
