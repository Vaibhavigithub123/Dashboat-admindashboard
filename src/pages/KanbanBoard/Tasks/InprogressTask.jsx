import React from "react";
import css from "../KanbanBoard.module.css";
import { BsPlusLg } from "react-icons/bs";
import TaskItem from "./TaskItem";
import { useDroppable } from "@dnd-kit/core";

const InprogressTask = ({ setShow, tasks, handleRemoveTask }) => {
  const { setNodeRef } = useDroppable({
    id: "inprogress",
  });
  return (
    <div className={`${css.listscontainer} themeContainer`} ref={setNodeRef}>
      <div className={css.tasksHeading}>
        <span>In Progress</span>
        <BsPlusLg onClick={() => setShow("inprogress")} />
      </div>

      <div className={css.inprogressBottom}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default InprogressTask;
