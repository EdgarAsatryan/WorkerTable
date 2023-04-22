import React from 'react'
import {BsFillTrashFill} from "react-icons/bs"

export default function TableRow({val,deleteRow}) {
    
  return (
    <tr className='border-2'>
        <td className='border-2 text-center p-2' onClick={() => editTd()}>{val.name}</td>
        <td className='border-2 text-center p-2'>{val.surName}</td>
        <td className='border-2 text-center p-2'>{val.age}</td>
        <td className='border-2 text-center p-2'>{val.position}</td>
        <td className='border-2 text-center p-2'>{val.salary}</td>
        <td className='border-2 cursor-pointer text-center p-2' onClick={() => deleteRow(val.id)}><BsFillTrashFill /></td>
    </tr>
  )
}
