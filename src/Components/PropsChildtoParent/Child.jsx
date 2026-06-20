import React from 'react'

const Child = (props) => {
    const btnClicked =()=>{
        console.log(props);
        props.setTheme("Light");
    }
  return (
    <div>
        <h1>{props.theme} is the color</h1>
        <button onClick={()=>{btnClicked()}} className='h-10 bg-amber-300 p-5 flex items-center rounded-2xl'>Click me </button>
    </div>
  )
}

export default Child