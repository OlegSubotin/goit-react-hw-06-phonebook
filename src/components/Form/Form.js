import { useState } from "react";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contacts/contacts-actions';
import { getContacts } from "redux/contacts/contacts-selectors";
import s from './Form.module.css';

function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name': setName(value);
                break;
            case 'number': setNumber(value);
                break;
            default: return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.find(contact => contact.name === name || contact.number === number)) {
            alert(`! ${name} exist in the book !`)
        } else {
            dispatch(addContact({ name, number }));
            reset();
        };        
    }; 
    
    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label} htmlFor={nameInputId}> Name </label>
            <input
                className={s.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
                id={nameInputId}
            />
            <label className={s.label} htmlFor={numberInputId}>Number</label>
            <input
                className={s.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                id={numberInputId}
            />
            <button className={s.submit} type="submit">Add contact</button>
        </form>
    );
};

export default Form;