import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { ListItem, Button, Row } from './PhonebookStyled'
import { getContacts, getFilter } from 'redux/selectors';

export default function PhonebookList() {
    const stateFilter = useSelector(getFilter);
    const contactsList = useSelector(getContacts);
    const dispatch = useDispatch()

    const getFilteredPeople = () => {
    if (!stateFilter) {
            return contactsList
        };
        const normalizedFilter = stateFilter.toLocaleLowerCase();
        const filteredPeople = contactsList.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
            return result;
        })
    return filteredPeople;
  };
    
    const people = getFilteredPeople();

    const list = people.map(({ id, name, number }) => {
        return <ListItem key={id}>
            <Row>Name: {name}</Row>
            <Row>Phone: {number}</Row>
            <span><Button onClick={() => dispatch(deleteContacts(id))}> Remove</Button></span>
        </ListItem>;   
    })

    return (
        <>
            {people.length === 0 && <div>No any people, who you search </div>}
             <ul>{list}</ul>
        </>
        )
}
