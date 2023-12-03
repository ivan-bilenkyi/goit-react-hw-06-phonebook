import { AiOutlineUserDelete } from 'react-icons/ai';
import { Button, Item, List, Wrap } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { removeContact } from 'redux/contactSlice';
import { ContactFilter } from 'components/ContactsFilter/ContactsFilter';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const query = useSelector(getFilter);
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(query)
  );
  return (
    <Wrap>
      <ContactFilter />
      <List>
        {visibleContacts.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: <span>{item.number}</span>
              <Button onClick={() => dispatch(removeContact(item.id))}>
                <AiOutlineUserDelete />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
};

// onClick={() => dispatch(removeContact(item.id))}
