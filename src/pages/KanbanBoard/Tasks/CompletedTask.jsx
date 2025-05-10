import React from "react";
import css from "../KanbanBoard.module.css";
import { BsPlusLg } from "react-icons/bs";
import { useDroppable } from "@dnd-kit/core";
import TaskItem from "./TaskItem";

const CompletedTask = ({ setShow, tasks, handleRemoveTask }) => {
  const { setNodeRef } = useDroppable({
    id: "completed",
  });
  return (
    <div className={`${css.listscontainer} themeContainer`} ref={setNodeRef}>
      <div className={css.tasksHeading}>
        <span>Completed</span>
        <BsPlusLg onClick={() => setShow("completed")} />
      </div>

      <div className={css.completedBottom}>
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

export default CompletedTask;
