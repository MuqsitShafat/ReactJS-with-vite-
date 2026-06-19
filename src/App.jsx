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

// import FormHandling from "./Components/Card/FormHandling";
// import TwoWayBinding from "./Components/Card/TwoWayBinding";


// function App() {
//   return (
//     <div className="bg-slate-300 h-screen w-full">
//       {/* <FormHandling /> */}
//       <TwoWayBinding  />
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import TodoNotes from './Components/Card/TodoNotes';
// import LocalStorage from './Components/Card/LocalStorage';
// import GalleryAPI from './Components/Card/GalleryAPI';
// const App = () => {
//   return (
//     <div>
//       {/* <TodoNotes /> */}
//       {/* <LocalStorage /> */}
//       <GalleryAPI />
//     </div>
//   )
// }

// export default App


import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Routing/Pages/Home'
import About from './Components/Routing/Pages/About'
import Contact from './Components/Routing/Pages/Contact'
import Navbar from './Components/Routing/Navbar/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App