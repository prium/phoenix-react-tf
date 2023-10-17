// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult
// } from 'react-beautiful-dnd';
// import { PropsWithChildren, useEffect, useState } from 'react';
// import classNames from 'classnames';

// interface DragAndDropProps {
//   listItems: any;
//   listContainerClass?: string;
//   draggableIdField?: string;
//   handleDragEnd: (droppedItem: DropResult) => void;
// }

// const DragAndDrop = ({
//   listItems,
//   listContainerClass,
//   children,
//   draggableIdField = 'id',
//   handleDragEnd
// }: PropsWithChildren<DragAndDropProps>) => {
//   const [items, setItems] = useState([]);

//   const onDragEnd = (droppedItem: DropResult) => {
//     if (!droppedItem.destination) return;
//     const updatedList = [...items];
//     const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
//     updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
//     setItems(updatedList);

//     handleDragEnd(updatedList);
//   };

//   useEffect(() => {
//     setItems(listItems);
//   }, [listItems]);

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="list-container">
//         {provided => (
//           <div
//             className={classNames(listContainerClass, 'list-container')}
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//           >
//             {items.map((item, index) => (
//               <Draggable
//                 key={item[draggableIdField]}
//                 draggableId={String(item[draggableIdField])}
//                 index={index}
//               >
//                 {provided => (
//                   <div
//                     className={classNames('item-container')}
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                   >
//                     {children && children(provided, item, index)}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default DragAndDrop;

import React from 'react';

const DragAndDrop = () => {
  return <div>DragAndDrop</div>;
};

export default DragAndDrop;
