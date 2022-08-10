import React, { Component } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { nanoid } from 'nanoid'

class numberBook extends Component {
    state = {
        contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        filter: "",
    };

    deleteContact = idContact => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact=>contact.id!==idContact),
        }))
      }

    formSubmitHandler = data => {
        const contact = {
          id: nanoid(),  
          name: data.name,
          number: data.number,
        }; 

        for (const item of this.state.contacts) {
            if (item.name.toLowerCase() === data.name.toLowerCase()) {
              alert(`${item.name} is already in contacts`);
              return;
            }
          }
        
        this.setState(prevState => {
            return {
                contacts: [contact, ...prevState.contacts],
            };
            }
        );
    }

    changeFilter = event => {
        this.setState({filter: event.currentTarget.value})
       };

     render() {

        const normalizedFilter = this.state.filter.toLocaleLowerCase();
        const filtredContacts = this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
        );
        return (
            <>
                <h1>Phonebook</h1>
                <h2>Add a new contact</h2>
                <ContactForm onSubmit={this.formSubmitHandler}/>
                <h2>Contacts </h2>
                <Filter value={this.state.filter} onChange={this.changeFilter}/>
                <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact}/>
            </>
        );
}}

export default numberBook;