import { InputField } from './PhonebookStyled';
import {setFilter} from '../redux/filterSlice'
import { useDispatch } from 'react-redux';

export default function PhonebookFilter() {
    const dispatch = useDispatch()
    const handleInput = (e) => {
        e.preventDefault();
        dispatch(setFilter(e.target.value))
        console.log(e.target.value)
    }
    return (
        <InputField
          type='text'
          name='filter'
          onChange={handleInput}
        placeholder={"filter"} />
    )
}