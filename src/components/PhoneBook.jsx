import  PhonebookForm  from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";
import {Block} from './PhonebookStyled'

export default function Phonebook() {
   return (
      <Block>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
        <PhonebookFilter />
        <PhonebookList
        />
      </Block>
    )
}

