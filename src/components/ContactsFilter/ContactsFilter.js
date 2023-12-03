import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../Contacts/ContactList.styled';
import { getFilter, setFilter } from 'redux/filterSlice';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(getFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    const query = value.trim();
    dispatch(setFilter(query));
  };
  return (
    <div>
      <Input
        type="text"
        value={filterPhoneBook}
        onChange={onChangeFilter}
        placeholder="find contact"
      ></Input>
    </div>
  );
};
