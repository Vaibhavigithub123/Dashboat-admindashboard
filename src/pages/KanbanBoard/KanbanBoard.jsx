import React, { useState, useCallback } from "react";
import css from "./KanbanBoard.module.css";
import Todo from "./Tasks/Todo";
import InprogressTask from "./Tasks/InprogressTask";
import CompletedTask from "./Tasks/CompletedTask";
import Taskpopup from "./Taskpopup";
import { DndContext, closestCorners } from "@dnd-kit/core";

const KanbanBoard = () => {
  const [show, setShow] = useState(null); // 'todo' | 'inprogress' | 'completed' | null
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
    setShow(false);
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event; //active-item being dragged, over-droppable zone

    if (over && active.id !== over.id) {
      const updatedTasks = tasks.map((task) =>
        task.id === Number(active.id) ? { ...task, status: over.id } : task
      );
      setTasks(updatedTasks);
    }
  };

  return (
    <div className={css.kanbanwrapper}>
      <span className={css.title}>Kanban Board</span>

      <Taskpopup show={show} setShow={setShow} addTask={addTask} />

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        {" "}
        {/*When the user drops an item, handleDragEnd() will be called. */}
        <div className={css.kanbancontainer}>
          <Todo
            setShow={setShow}
            tasks={tasks.filter((task) => task.status === "todo")}
            handleRemoveTask={handleRemoveTask}
          />
          <InprogressTask
            setShow={setShow}
            tasks={tasks.filter((task) => task.status === "inprogress")}
            handleRemoveTask={handleRemoveTask}
          />
          <CompletedTask
            setShow={setShow}
            tasks={tasks.filter((task) => task.status === "completed")}
            handleRemoveTask={handleRemoveTask}
          />
        </div>
      </DndContext>
    </div>
  );
};

export default KanbanBoard;
