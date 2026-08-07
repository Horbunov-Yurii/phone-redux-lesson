function ContactItem({ contact, deleteContact }) {
  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
