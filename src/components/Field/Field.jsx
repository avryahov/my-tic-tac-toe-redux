import React from 'react';
import FieldLayout from './FieldLayout';

const Field = ({ field, onCellClick }) => {
    return <FieldLayout field={field} onCellClick={onCellClick} />;
};

export default Field;