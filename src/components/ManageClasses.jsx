import React from 'react';
import ClassTables from './ClassTables';
import { Fade, Zoom } from 'react-reveal';
const ManageClasses = () => {
    return (
        <Zoom>
            <ClassTables />
        </Zoom>
    );
};

export default ManageClasses;