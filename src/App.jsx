// import Card from "./Components/Card/Card";
/*
function App() {
  const skill = ["Figma", "Adobe XD", "Photoshop"];
  const cardnumber = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      {cardnumber.map((item,index) => {
        return (
          <Card
          key={index}
            name="Muqsit Shafat"
            profession="Web Developer"
            skill={skill}
            age="22"
          />
        );
      })}
    </div>
  );
}
*/
// import React from 'react';
// function App() {
//   function btnclicked () {
//   document.querySelector('h1').innerText = "Hello World";
//   document.querySelector('h1').style.backgroundColor = "white";
// }
//   return(
//     <div className='bg-slate-400 h-screen w-full'>
//       <h1 className='text-7xl'>hellossoss</h1>
//       <button onClick={btnclicked}>Click Me</button>
//     </div>  
//   )
// }
// export default App;

import FormHandling from "./Components/Card/FormHandling";
import TwoWayBinding from "./Components/Card/TwoWayBinding";


function App() {
  return (
    <div className="bg-slate-300 h-screen w-full">
      {/* <FormHandling /> */}
      <TwoWayBinding  />
    </div>
  );
}

export default App;