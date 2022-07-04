
import types from './contacts-types';
import { nanoid } from "nanoid";

export const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: nanoid(),
        name,
        number,
    },
});

export const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId,
});

export const changeFilter = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value,
});

// export default { addContact, deleteContact, changeFilter };