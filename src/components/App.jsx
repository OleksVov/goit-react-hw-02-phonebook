
import React, {Component} from "react";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({name:event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
       <form onSubmit={this.handleSubmit}>
       <label>
       Name
        <input
    type="text"
    name="name"
    value={this.state.name}
    onChange={this.handleChange}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
       </label>
  <button type="submit">Add contact</button>
       </form>
       <h2>Contacts</h2>
       {/* <ul>
        {this.state.contacts.map(contact => (
          <li>{contact.name}</li>
        ))}
        
       </ul> */}
      </div>
    );
  }
  
};

export default App;
