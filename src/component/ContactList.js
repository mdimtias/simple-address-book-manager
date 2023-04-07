import React, { useState } from 'react';

function ContactList({ contacts, onEdit, onDelete }) {
  const [nameFilter, setNameFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');

  const filteredContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter(contact => contact.phoneNumber.includes(phoneFilter));

  const sortedContacts = [...filteredContacts].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div>
        <label>
          Filter by name:
          <input type="text" value={nameFilter} onChange={event => setNameFilter(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Filter by mobile number:
          <input type="text" value={phoneFilter} onChange={event => setPhoneFilter(event.target.value)} />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phoneNumber}</td>
              <td>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
