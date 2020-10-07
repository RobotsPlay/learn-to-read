import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import FrameStyles from '../styles/FrameStyles';
import Word from './Word';

const Frame = ({
    frame, 
    response = {}, 
    setLetter = () => {}, 
    className = '',
    isDraggable = false,
}) => {
    const handleDragEnd = (result) => {
        if(frame.letterChoices[result.source.index] && result.destination?.droppableId === `drop-letter-${frame.word}`) {
            setLetter(frame.letterChoices[result.source.index])
        }
    }

    const setDropStyle = (style, snapshot) => {
        if (!snapshot.isDropAnimating) {
          return style;
        }
        return {
          ...style,
          // cannot be 0, but make it super tiny
          transitionDuration: `0.001s`,
        };
    }

    return (
        <FrameStyles className={className}>
            <div className="frame-image">
                <img src={require(`../assets/images/${frame.word}.svg`)} alt={`Illustration of a ${frame.word}`}/>
            </div>
            
            <DragDropContext onDragEnd={handleDragEnd}>
                <Word 
                    word={frame.word} 
                    responseLetter={response.responseLetter}
                    validClass={response.validClass}
                    checkLetter={frame.checkLetter}
                    letterChoices={frame.letterChoices}
                    isDraggable={isDraggable}
                />

                {isDraggable ? (
                    <>
                        <div className="instruction">
                            Drag the missing letter.
                        </div>

                        <Droppable droppableId={`drop-letter-${frame.word}-letters`} direction="horizontal">
                            {(provided) => (  
                                <div className="drag-letters"
                                    {...provided.droppableProps} 
                                    ref={provided.innerRef}
                                >
                                    {frame.letterChoices?.map((letter, i) => (
                                        <Draggable key={i} draggableId={`letter-${frame.word}-${i}`} index={i}>
                                            {(provided, snapshot) => (
                                                <span className="drag-letter" 
                                                    key={i}
                                                    ref={provided.innerRef} 
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps}
                                                    style={setDropStyle(provided.draggableProps.style, snapshot)}
                                                >{letter}</span>
                                            )}
                                        </Draggable>
                                    ))}

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </>
                ) : null}
             </DragDropContext>
        </FrameStyles>
    )
}

export default Frame;