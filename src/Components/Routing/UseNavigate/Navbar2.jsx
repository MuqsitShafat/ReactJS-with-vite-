import React from 'react'
import { useNavigate} from 'react-router-dom'

const Navbar2 = () => {
  let navigate = useNavigate();
  
  return (
  <div className='bg-slate-800 text-white flex items-start gap-10 p-10 '>
        
        <button onClick={()=>{navigate('/')}}className='h-10 bg-amber-300 px-5 rounded active:scale-95 cursor-pointer'>Return to Home Page</button>
        <button onClick={()=>{navigate(-1)}}className='h-10 bg-amber-300 px-5 rounded active:scale-95 cursor-pointer'>Back</button>
        <button onClick={()=>{navigate(+1)}}className='h-10 bg-amber-300 px-5 rounded active:scale-95 cursor-pointer'>Next</button>
    </div>
  )
}

export default Navbar2