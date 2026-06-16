import React from "react";

const TodoNotes = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const onSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
    const copytask = [...tasks];
    copytask.push({
      title: title,
      description: description,
    });
    console.log(copytask);
    setTasks(copytask);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="bg-slate-300 h-screen w-screen flex flex-col">
      {/*  Title */}

      <h1 className="bg-black h-[15%] w-full text-white text-center text-7xl justify-around flex items-center italic ">
        Todo Notes
      </h1>
      <div className="flex flex-row m-5 gap-5 h-full ">
        {/* Entering Tasks */}
        <div className="flex flex-col mt-1 p-5 bg-amber-300  w-[50%] rounded-lg h-full">
          <input
            type="text"
            placeholder="Enter Title"
            className="h-10 w-96 mt-5 ml-5 rounded-lg text-center text-xl outline-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter Your Task Description"
            className="h-20 w-96 mt-5 ml-3  rounded-lg p-2 text-md border bg-white outline-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Submit Button */}
          <button
            onClick={(e) => onSubmit(e)}
            className="flex items-center justify-center h-10 w-full m-5 rounded-lg bg-green-500 text-black text-xl font-bold outline-2  active:scale-95 active:bg-green-600 transition-all"
          >
            Add Task
          </button>
        </div>
        {/* Tasks display  */}
        <div className="flex flex-col mt-1 p-5 bg-amber-950 w-[50%] rounded-lg h-full overflow-auto">
          <h1 className="text-3xl text-white text-center">Your Tasks</h1>
          <div className="flex flex-row flex-wrap gap-5 mt-5">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className="flex flex-col p-5 bg-slate-300 h-48 w-48 rounded-lg"
              >
                <h1 className="text-2xl text-black italic">{task.title}</h1>
                <p className="text-sm text-black mt-3 flex-1 min-h-0 overflow-y-auto scrollbar-hide break-words ">
                  {task.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoNotes;
