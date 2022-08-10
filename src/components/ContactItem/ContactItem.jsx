
import PropTypes from 'prop-types';

function ContactItem({contact,onDeleteContact}) {
    return (
        <>
        <li key={contact.id} >
                <p>{contact.name}: {contact.number}</p>
                <button onClick={()=>onDeleteContact(contact.id)} >Delete</button>
                </li>
        </>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactItem;