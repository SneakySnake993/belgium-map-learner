import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CommuneList = ({ communes, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="communes">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {communes.map((commune, index) => (
              <Draggable key={commune.id} draggableId={commune.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="p-2 m-2 bg-gray-200 rounded"
                  >
                    {commune.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CommuneList;