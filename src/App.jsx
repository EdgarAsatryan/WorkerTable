import React, {useReducer, useState} from 'react'
import TableForm from './components/TableForm'
import TableRow from './components/TableRow'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [rows, setRows] = useState([])

  const [state, dispatch] = useReducer((initialState, action) => {
     switch(action.type) {
      case 'name':
        return{
          ...initialState,
          name: action.payload
        }
      case 'surname':
        return{
          ...initialState,
          surName: action.payload
        }
      case 'age':
        return{
          ...initialState,
          age: action.payload
        }
      case 'position':
        return{
          ...initialState,
          position: action.payload
        }
      case 'salary':
        return{
          ...initialState,
          salary: action.payload
        }
      case 'add':
        setRows([
          ...rows,
          {
            ...initialState
          }
        ])
      case 'removeState':
        return {
            id: uuidv4(),
            name: '',
            surName: '',
            age: '',
            position: '',
            salary: ''
          }
        
     }
  }, {
    id: uuidv4(),
    name: '',
    surName: '',
    age: '',
    position: '',
    salary: ''
  })

  function deleteRow(id) {
    setRows(rows.filter(row => row.id !== id))
  }
  return (
    <div className='flex flex-col gap-3 min-h-screen  items-center'>
      <TableForm dispatch={dispatch} state={state} />
      <table className='border-2' >
        <tr className='border-2'>
          <th className='border-2 text-center p-2'>Name</th>
          <th className='border-2 text-center p-2'>Surname</th>
          <th className='border-2 text-center p-2'>Age</th>
          <th className='border-2 text-center p-2'>Position</th>
          <th className='border-2 text-center p-2'>Salary</th>
          <th className='border-2 text-center p-2'>Remove</th>
        </tr>
        {
          rows.map((val, i) => {
            return (
            <TableRow deleteRow={deleteRow} val={val} key={i}/>
            )
          })
        }
      </table>
      </div>
  )
}

export default App