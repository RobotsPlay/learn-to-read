import React from 'react';

const Panel = React.forwardRef((props, panel_ref) => (
    <PanelInner panel_ref={panel_ref} {...props} />
));

function PanelInner({
    panel_ref,
    children,
    width,
    height,
    onDragStartHandle,
    onDragEndHandle
}) {

    return (
        <div 
            ref={panel_ref}
            className={`panel`} 
            style={{width: width || 'auto', height: height || 'auto'}}
        >
            {children}
            
            <div 
                className="panel-handle" 
                draggable
                onDragStart={onDragStartHandle}
                onDragEnd={onDragEndHandle}
            ></div>
        </div>
    );
}

export default Panel;