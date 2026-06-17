import React from "react";

const LocalStorage = () => {
  localStorage.setItem("name", "Muqsit Shafat");
  // localStorage.setItem('age', 19)
  // console.log(typeof (localStorage.getItem(('name'))));
  // console.log(typeof (localStorage.getItem(('age'))));
  // localStorage.removeItem('name');
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: "Muqsit Shafat",
      age: 19,
      profession: "Web Developer",
    }),
  ); // The object is stored like a plain text in the drawer of localSorage example explanation so when u need to save the object into the drawer u have to convert it into string and then if wants to retrive u have to parse it to object 
  // const user = localStorage.getItem('user')
  // console.log(JSON.parse(user));
  // localStorage.clear();

  const show = () => {
    // const USER = localStorage.getItem('name');
    const USEROBJ = localStorage.getItem(('user')); 
    const hello = JSON.parse(USEROBJ);
    // document.querySelector('h1').innerText = USER
    document.getElementById("name").innerText = hello.name;
    document.getElementById("age").innerText = hello.age;
    document.getElementById("profession").innerText = hello.profession;
  };
  return (
    <div>
      <h1>Local Storage Data </h1>
      <div className="flex ">
        <h3 className="decoration-sky-500">Name : </h3>
        <h2 id="name"></h2>
      </div>
      <div className="flex ">
        <h3 className="decoration-sky-500">Age :</h3>
        <h3 id="age"></h3>
      </div>
      <div className="flex ">
        <h3 className="decoration-sky-500">Profession :</h3>
        <h3 id="profession"></h3>
      </div>
      <button onClick={show}>Show</button>
    </div>
  );
};

export default LocalStorage;
