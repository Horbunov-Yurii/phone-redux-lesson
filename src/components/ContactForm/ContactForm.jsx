function ContactForm({
  name,
  number,
  handleSubmit,
  setName,
  setNumber,
}) {
  return (
    <>
     <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
         
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="tel"
          name="number"
          value={number}
          
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(event) => setNumber(event.target.value)}
        />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export default ContactForm;