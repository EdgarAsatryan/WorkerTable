import React from 'react'

export default function TableForm({dispatch, state}) {
  return (
    <div  className = "w-full h-[100px] bg-gray-800  flex items-center justify-center">
    <form onSubmit={(e) => {
        e.preventDefault()
        dispatch({type: 'add'})
        dispatch({type: 'removeState'})

    }}>
        <div className='flex items-center gap-3'>
        <input required className='bg-transparent text-white p-2' value={state.name} type="text" placeholder='name' onChange={(e) => dispatch({type: 'name', payload: e.target.value})} />
        <input required className='bg-transparent text-white p-2' value={state.surName} type="text" placeholder='surname' onChange={(e) => dispatch({type: 'surname', payload: e.target.value})} />
        <input required className='bg-transparent text-white p-2' value={state.age} type="number" placeholder='age' onChange={(e) => dispatch({type: 'age', payload: +e.target.value})} />
        <input required className='bg-transparent text-white p-2' value={state.position} type="text" placeholder='position' onChange={(e) => dispatch({type: 'position', payload: e.target.value})} />
        <input required className='bg-transparent text-white p-2' value={state.salary} type="number" placeholder='salary' onChange={(e) => dispatch({type: 'salary', payload: +e.target.value})} />
        <button type='submit' className='w-[120px] h-[30px] rounded bg-white p-2 flex justify-center items-center'>add</button>
        </div>
    </form>
    </div>
  )
}
