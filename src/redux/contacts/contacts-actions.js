import types from './contacts-types';
import { nanoid } from "nanoid";

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: nanoid(),
        name,
        number,
    },
});

const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId,
});

const changeFilter = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value,
});

export default { addContact, deleteContact, changeFilter };