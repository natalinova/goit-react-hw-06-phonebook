import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addContacts } from "redux/contactsSlice";
import { nanoid } from "nanoid";
import { FormTotal, InputField, InputButton } from './PhonebookStyled'
import { getContacts } from "redux/selectors";

export default function PhonebookForm() {
    const dispatch = useDispatch();
    const contactList = useSelector(getContacts);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
    const handleInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'number':
                setNumber(e.target.value)
                break;
            default:
                return
        }
    }
   
    const isDuplicate = (name, number) => {
        const result = contactList.find(contact => contact.name === name && contact.number === number);
        return result;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: nanoid(),
            name: name,
            number:number
        }
        if (isDuplicate(name, number)) {
            return alert (`There are ${name} in phonebook`)
        }
        dispatch(addContacts(newContact))
        setName('');
        setNumber('');
    }

return (
    <FormTotal onSubmit={handleSubmit}>
        <label htmlFor="id-name"> Name:</label>
        <InputField
            id="id-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInput}
                />
               
        <label htmlFor="id-number"> Phone: </label>
        <InputField
            id="id-number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInput}
        />
            
        <InputButton >Add people</InputButton>
        </FormTotal>
     )
}
