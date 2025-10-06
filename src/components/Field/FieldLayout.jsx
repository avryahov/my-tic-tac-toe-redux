import React from 'react';
import PropTypes from 'prop-types';
import {FaCircle, FaTimes} from 'react-icons/fa'; // ← Изменено
import styles from '../../styles/field.module.css';

const FieldLayout = ({field, onCellClick}) => {
    return (
        <div className={styles.field}>
            {field.map((cell, index) => (
                <button
                    key={index}
                    className={styles.cell}
                    onClick={() => onCellClick(index)}
                    disabled={!!cell}
                    aria-label={`Клетка ${index + 1}, значение: ${cell || 'пусто'}`}
                >
                    {cell === 'X' && <FaTimes size={36} color="#e63946"/>}
                    {cell === '0' && <FaCircle size={36} color="#2a9d8f"/>}
                </button>
            ))}
        </div>
    );
};

FieldLayout.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;