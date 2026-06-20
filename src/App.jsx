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


// import React from 'react'
// import {Route,Routes} from 'react-router-dom'
// import Home from './Components/Routing/Pages/Home'
// import About from './Components/Routing/Pages/About'
// import Contact from './Components/Routing/Pages/Contact'
// import Navbar from './Components/Routing/Navbar/Navbar'
// import Products from './Components/Routing/Pages/Products'
// import Mens from './Components/Routing/NestedChilds/Mens'
// import Women from './Components/Routing/NestedChilds/Women'
// import Courses from './Components/Routing/Pages/Courses'
// import CoursesDetail from './Components/Routing/Pages/CoursesDetail'
// import Navbar2 from './Components/Routing/UseNavigate/Navbar2'
// const App = () => {
//   return (
//     <div>
//       <Navbar />  
//       <Navbar2 />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path = "/products" element = {<Products />}>
//           <Route path="men" element={<Mens />}/>
//           <Route path="women" element={<Women />}/>
//         </Route>
//         <Route path="Courses" element={<Courses />}/>
//         <Route path="/Courses/:courseId" element={<CoursesDetail />} />   //Dynamic Routing
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<h1>404 Page Not Found</h1>} />
//       </Routes>
//     </div>
//   )
// }

// export default App




import React from 'react'
import Child from './Components/PropsChildtoParent/Child';
import { useState } from 'react';
const App = () => {
  const [theme,setTheme] = useState("Dark");
  return (
    <div>
      <Child theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App