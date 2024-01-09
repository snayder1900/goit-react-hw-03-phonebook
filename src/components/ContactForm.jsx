import PropTypes from "prop-types";
import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";


export const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const nameExist = (name) => {
    const lowerName = name.toLowerCase();

    return contacts.some((contact) => contact.name.toLowerCase() === lowerName);
  }

  const showAlert = (message) => {
    alert(message);
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameExist(name)) {
      showAlert(`El contacto ${name} ya existe en la agenda`)
    } else {
      const newContact = { name: name, number: number, id: nanoid() };
    
      setContacts([...contacts, newContact]);
      
      setName("");
      setNumber("");
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form__name} htmlFor="name">Nombre</label>
      <input
        className={css.form__inputName}
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.form__number} htmlFor="number">Número</label>
      <input
        className={css.form__inputNumber}
        type="tel"
        name="number"
        id="number"
        value={number}
        onChange={handleNumberChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Añadir contacto</button>
    </form>
  );  
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired
}