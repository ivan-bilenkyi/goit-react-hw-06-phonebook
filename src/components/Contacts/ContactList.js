import { AiOutlineUserDelete } from 'react-icons/ai';
import { Button, Item, List, Wrap } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { removeContact } from 'redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  return (
    <Wrap>
      <List>
        {contacts.map(item => {
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
