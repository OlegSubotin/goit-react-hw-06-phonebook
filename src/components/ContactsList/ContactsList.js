import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
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

const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
        || contact.number.includes(normalizedFilter)
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    onContactDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);