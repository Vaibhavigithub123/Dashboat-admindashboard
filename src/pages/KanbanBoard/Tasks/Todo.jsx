import React from 'react';
import css from '../KanbanBoard.module.css'
import { BsPlusLg } from 'react-icons/bs';
import { useDroppable } from '@dnd-kit/core';
import TaskItem from './TaskItem';

const Todo = ({ setShow, tasks, handleRemoveTask }) => {
  // Hook to make the "Todo" column droppable
  const { setNodeRef } = useDroppable({
    id: 'todo',   //drop zone with unique ID where tasks will get dropped
  });

  return (
    <div className={`${css.listscontainer} themeContainer`} ref={setNodeRef}> {/* setNodeRef- to tract dom element which states the drop zone for a task */}
      <div className={css.tasksHeading}>
        <span>Todo</span>
        <BsPlusLg onClick={() => setShow('todo')} />
      </div>

      {/* map over tasks array of objects whose status is 'todo' - [{id:'123', title: 'learn react', description: '...', status:'todo'},{} ]
       which is filtered out at the time of passing props to Todo compo as tasks={tasks.filter((task) => task.status === "todo")}          */}
      <div className={css.todoBottom}>    
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




export default Todo;
