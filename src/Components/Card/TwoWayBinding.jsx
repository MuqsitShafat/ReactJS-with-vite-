// jab aap react sai kaho kai wo kaam karay hum direct na karain dom ma changes to yai two way binding hai 
import React from 'react'

const TwoWayBinding = () => {
    const [name,setName] = React.useState("");
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(name);
        setName("");
    }
  return (
    <div>
        <form onSubmit={(e)=>{onSubmit(e)}}>
        <input type="text" placeholder='Enter Your Name'
        value={name}
        onChange ={(e)=>{setName(e.target.value)}}
        />
         <button>Submit</button>
        </form>
    </div>
  )
}

export default TwoWayBinding