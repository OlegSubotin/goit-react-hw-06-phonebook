import ContactsItem from 'components/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import s from './ContactsList.module.css';


const ContactsList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    const onContactDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactsItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onContactDelete={onContactDelete}
                />
            ))}
        </ul>
    );
};

export default ContactsList;