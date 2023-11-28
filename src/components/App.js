import { ContactList } from './Contacts/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  return (
    <Layout>
      <PhonebookForm />
      <div>
        <h2>Contacts</h2>
        <ContactList />
      </div>
      <GlobalStyle />
    </Layout>
  );
};
