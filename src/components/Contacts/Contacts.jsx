import React from "react";
import PropTypes from 'prop-types';


const Contacts = ({contacts, filter, onDelete}) => {
    const normalizeFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter),);

    return (
        <ul>
        {filterContacts.map(({id, name, number}) => (
          <li
          key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
        
       </ul>
        )
}


export default Contacts;

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    filter: PropTypes.string.isRequired,
  };