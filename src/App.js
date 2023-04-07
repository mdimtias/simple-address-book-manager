import React, { useState } from 'react';
import ContactList from './component/ContactList';
import ContactForm from './component/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContactIndex, setSelectedContactIndex] = useState(null);

  function handleAddContact(contact) {
    setContacts([...contacts, contact]);
  }

  function handleEditContact(index) {
    setSelectedContactIndex(index);
  }

  function handleUpdateContact(contact) {
    setContacts([
      ...contacts.slice(0, selectedContactIndex),
      contact,
      ...contacts.slice(selectedContactIndex + 1),
    ]);
    setSelectedContactIndex(null);
  }

  function handleDeleteContact(index) {
    setContacts([...contacts.slice(0, index), ...contacts.slice(index + 1)]);
    setSelectedContactIndex(null);
  }

  return (
    <div className='container'>
      <h1>Simple Address Book Manager</h1>
      <ContactList
        contacts={contacts}
        onEdit={handleEditContact}
        onDelete={handleDeleteContact}
      />
      <ContactForm
        contacts={contacts}
        selectedContactIndex={selectedContactIndex}
        setSelectedContactIndex={setSelectedContactIndex}
        onSave={selectedContactIndex !== null ? handleUpdateContact : handleAddContact}
      />
    </div>
  );
}

export default App;
