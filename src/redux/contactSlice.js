import { nanoid } from 'nanoid';

const initialState = [
  {
    id: nanoid(),
    name: 'Rosie Simpson',
    number: '459-12-56',
  },
];
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/newContact': {
      const isDuplicate = state.some(contact => {
        return (
          contact.name.toLowerCase().trim() ===
          action.payload.name.toLowerCase().trim()
        );
      });

      if (isDuplicate) {
        alert(`${action.payload.name} is already in contacts`);
        return state;
      }

      return [...state, action.payload];
    }
    case 'contact/removeContact': {
      const contactIdToRemove = action.payload;
      return state.filter(item => item.id !== contactIdToRemove);
    }
    default:
      return state;
  }
};

export const addContact = newContact => {
  const contact = {
    ...newContact,
    id: nanoid(),
  };

  return {
    type: 'contact/newContact',
    payload: contact,
  };
};

export const removeContact = value => {
  return {
    type: 'contact/removeContact',
    payload: value,
  };
};
