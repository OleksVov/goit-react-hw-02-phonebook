
import React, {Component} from "react";
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [
      {id:nanoid() , name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline'},
    {id: nanoid(), name: 'Eden Clements'},
    {id: nanoid(), name: 'Annie Copeland'},
    ],
    name: '',
    number: '',
  };

  loginInputId = nanoid();

  handleChange = event => {
    console.log(event.target.value);
    this.setState({name:event.target.value})
  }
  handleChangeNumber = event => {
    console.log(event.target.value);
    this.setState({number:event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
      console.log(this.state);
      console.log(this.state.contacts);
      this.setState(
        prevState => ({
          contacts: [
            ...prevState.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number},
          ]
        })
      )
      this.reset();
  }

  reset = () => {
    this.setState({name: ''})
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
       Number
       <label htmlFor="">

       <input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChangeNumber}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
       </label>
  <button type="submit">Add contact</button>
       </form>
       <h2>Contacts</h2>
       <ul>
        {this.state.contacts.map(({id, name, number}) => (
          <li
          key={id}>
            <p>{name}:</p>
            <p>{number}</p>
          </li>
        ))}
        
       </ul>
      </div>
    );
  }
  
};

export default App;
