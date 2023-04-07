import React, { useState, useEffect } from "react";

function ContactForm({
  contacts,
  selectedContactIndex,
  setSelectedContactIndex,
  onSave,
}) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (selectedContactIndex !== null) {
      const selectedContact = contacts[selectedContactIndex];
      setName(selectedContact.name);
      setPhoneNumber(selectedContact.phoneNumber);
    } else {
      setName("");
      setPhoneNumber("");
    }
  }, [selectedContactIndex, contacts]);

  function handleSubmit(event) {
    event.preventDefault();

    // Check for duplicate phone numbers
    const isDuplicatePhoneNumber = contacts.some(
      (contact, index) =>
        index !== selectedContactIndex && contact.phoneNumber === phoneNumber
    );
    if (isDuplicatePhoneNumber) {
      alert("A contact with that phone number already exists.");
      return;
    }

    const contact = { name, phoneNumber };
    onSave(contact);

    setName("");
    setPhoneNumber("");
    setSelectedContactIndex(null);
  }

  return (
    <div>
      <h2>{selectedContactIndex !== null ? "Edit Contact" : "Add Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">
          {selectedContactIndex !== null ? "Save" : "Add"}
        </button>
        {selectedContactIndex !== null && (
          <button type="button" onClick={() => setSelectedContactIndex(null)}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
