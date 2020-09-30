import React, { useState, useRef } from 'react';
import './Panelset.css';

import Panel from './Panel';

function Panelset({
    children,
    direction
}) {
    //state
    const [active_handle, setActiveHandle] = useState(null);
    const [panel_sizes, setPanelSizes] = useState([]);

    //ref to main panelset container
    const panelset_ref = useRef(null);

    //refs to panels
    const panel_refs = [];

    for(let i = 0, length = children.length; i < length; i++) {
        panel_refs[i] = React.createRef();
    };

    const onDragOverHandle = (e) => {
        if(active_handle && active_handle.closest('.panelset') === panelset_ref.current) {
            e.stopPropagation();
            e.preventDefault();
            
            e.dataTransfer.dropEffect = "move";

            let current_panel = active_handle.closest('.panel');
            let current_panelset = active_handle.closest('.panelset');
            let updated_panel_sizes = panel_sizes.slice();

            let index = -1;

            for(let i = 0, length = panel_refs.length; i < length; i++) {
                if(panel_refs[i].current === current_panel) {
                    index = i;
                    break;
                }
            }

            if(index < 0) {
                return false;
            }

            let current_panel_size = panel_sizes[index];
            let next_panel_size = panel_sizes[index + 1];
            let panel_size = 0;

            if(direction === 'vertical') {
                panel_size = ((e.clientY - current_panel.offsetTop) / current_panelset.offsetHeight) * 100;
            }
            else {
                panel_size = ((e.clientX - current_panel.offsetLeft) / current_panelset.offsetWidth) * 100;
            }

            if(updated_panel_sizes[index]) {
                updated_panel_sizes[index] = panel_size;
            }

            next_panel_size -= panel_size - current_panel_size;

            if(updated_panel_sizes[index + 1]) {
                updated_panel_sizes[index + 1] = next_panel_size;
            }

            calculatePanelSizes(updated_panel_sizes);
        }
    }
    
    const onDragStartHandle = (e) => {
        // remove drag ghost
        let img = document.createElement('img'); 
        img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        e.dataTransfer.setDragImage(img, 0, 0);

        e.dataTransfer.dropEffect = "move";

        setActiveHandle(e.target);
    }
    
    const onDragEndHandle = (e) => {
        e.preventDefault();
        setActiveHandle(null);
    }

    const calculatePanelSizes = (sizes = panel_sizes) => {
        let new_sizes = [];
        let available_space = 100;

        for(let i = 0, length = children.length; i < length; i++) {
            let size = sizes[i] || available_space / (children.length - i);
            available_space -= size;
            new_sizes.push(size);
        };

        setPanelSizes(new_sizes);
    }

    const getChildHeight = (i) => {
        if(!panel_sizes.length) {
            calculatePanelSizes();
        }

        return direction === 'vertical' ? `${panel_sizes[i]}%` : '100%';
    }
    
    const getChildWidth = (i) => {
        if(!panel_sizes.length) {
            calculatePanelSizes();
        }

        return direction === 'vertical' ? '100%' : `${panel_sizes[i]}%`;
    }

    return (
        <div 
            className={`panelset panelset-${direction ? direction : 'horizontal'}`}
            onDragOver={onDragOverHandle}
            ref={panelset_ref}
        >
            {React.Children.map(children, (child, i) => {
                return  (
                    <Panel
                        ref={panel_refs[i]}
                        height={getChildHeight(i)}
                        width={getChildWidth(i)}
                        onDragStartHandle={onDragStartHandle}
                        onDragEndHandle={onDragEndHandle}
                    >
                        {child}
                    </Panel>
                );
            })}
        </div>
    );
}

export default Panelset;