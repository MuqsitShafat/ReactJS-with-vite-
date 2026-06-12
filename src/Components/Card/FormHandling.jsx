import React from 'react'

const FormHandling = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }
  return (
    <div>
        <form onSubmit={(e)=>{onSubmit(e)}}>
        <input type="text" placeholder='Enter Your Name'  />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandling