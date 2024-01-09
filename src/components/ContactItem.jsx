import PropTypes from "prop-types";


export const ContactItem = ({ contact, handleDelete }) => {
  
  return (
    <li>
      {contact.name} - {contact.number}{" "}
      <button onClick={() => handleDelete(contact.id)}>Eliminar</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
}