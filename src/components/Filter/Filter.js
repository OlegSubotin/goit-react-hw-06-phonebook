import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import {changeFilter} from "../../redux/contacts/contacts-actions";
import s from './Filter.module.css';

const searchInputId = nanoid();

const Filter = ({value, onChange}) => {
    return (
        <div className={s.wrapper}>
            <label htmlFor={searchInputId} className={s.label}>Find contacts by name</label>
            <input
                id={searchInputId}
                className={s.input}
                type='text'
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: (e)=>dispatch(changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);