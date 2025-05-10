import React, { useState } from "react";
import css from "./Taskpopup.module.css";

const Taskpopup = ({ show, addTask, setShow }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleaddTask = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    if (task.title.trim() && task.description.trim()) {
      //check title & description is not empty
      addTask({ ...task, status: show });
      setTask({ title: "", description: "" });
      setShow(null);
    }
  };

  if (!show) return null;

  return (
    <>
      <div className={css.taskcontainer}>
        <div className={css.taskheading}>
          <label>Add Title</label>
          <input
            type="text"
            placeholder="Add your title..."
            onChange={handleaddTask}
            value={task.title}
            name="title"
          />
        </div>

        <div className={css.description}>
          <label>Add Task Description</label>
          <input
            type="text"
            placeholder="Add your Task..."
            onChange={handleaddTask}
            value={task.description}
            name="description"
          />
        </div>

        <div className={css.addtaskbtn}>
          <button onClick={handleSubmit}>Add </button>
        </div>
      </div>
    </>
  );
};

export default Taskpopup;
