import React  from "react";
import ContactItem from "components/ContactItem/ContactItem";

const ContactList = ({ contacts,onDeleteContact }) => (
    <ul>
        {contacts.map(contact => (
            <ContactItem contact={contact} onDeleteContact={onDeleteContact}/>    
        ))}
    </ul>
);

export default ContactList;