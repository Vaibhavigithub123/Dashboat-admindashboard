import React from 'react';
import css from '../KanbanBoard.module.css'
import { RxCross2 } from 'react-icons/rx';
import { useDraggable } from '@dnd-kit/core';

const TaskItem = ({ task, handleRemoveTask }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id.toString(),  // This makes this specific task draggable. Assigns a unique ID to the draggable item (task.id).
      });
    
      const style = {
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : undefined,
      };
  return (
   
    <div
    className={css.taskstodo}
    id={
      task.status === 'inprogress'
        ? css.taskinprogress
        : task.status === 'completed'
        ? css.taskcompleted
        : ''
    }

    ref={setNodeRef}
    {...listeners}  //This includes event handlers like onMouseDown, onTouchStart, and onKeyDown that make an element draggable
    {...attributes} // No functionality only for accessibility used for screen readers to understand the state
    style={style}
  >
    <div className={css.tasksTitle}>
      <span>{task.title}</span>
      <p>{task.description}</p>
    </div>
    <div>
      <RxCross2
        className={css.crossmark}
        onClick={() => handleRemoveTask(task.id)}
      />
    </div>
  </div>
  );
}

export default TaskItem