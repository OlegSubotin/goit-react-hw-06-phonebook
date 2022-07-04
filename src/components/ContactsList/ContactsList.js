import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onContactDelete, }) => {
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

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number:PropTypes.string.isRequired,
        })
    ).isRequired,
    onContactDelete:PropTypes.func.isRequired,
};

//   function getVisibleContacts() {
//     const normalizedFilter = filter.toLocaleLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(normalizedFilter));
//   };

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
        || contact.number.includes(normalizedFilter)
    );
};

// const mapStateToProps = (state) => {
//     const { filter, items } = state.contacts;

//     const visibleContacts = getVisibleContacts(items, filter);

//     return { contacts: visibleContacts, };   
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    onContactDelete: id => dispatch(contactsActions.deleteContact(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);