function ContactForm({ name, number, handleSubmit, setName, setNumber }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-red-100 p-6 rounded-xl shadow-md border border-gray-100 flex flex-col gap-4 max-w-md mx-auto"
    >
      <label className="flex flex-col text-left text-sm font-semibold text-gray-700 gap-1">
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Petro Ivanov"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          onChange={(event) => setName(event.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
        />
      </label>

      <label className="flex flex-col text-left text-sm font-semibold text-gray-700 gap-1">
        Number
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="123-45-67"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(event) => setNumber(event.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
        />
      </label>

      <button
        type="submit"
        className="mt-2 w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700 active:scale-[0.98] transition duration-200 cursor-pointer shadow-sm"
      >
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
