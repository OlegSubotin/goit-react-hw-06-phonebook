import React from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "redux/contacts/contacts-selectors";
import s from './Filter.module.css';

const searchInputId = nanoid();

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <div className={s.wrapper}>
            <label htmlFor={searchInputId} className={s.label}>Find contacts by name</label>
            <input
                id={searchInputId}
                className={s.input}
                type='text'
                value={value}
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
};

export default Filter;