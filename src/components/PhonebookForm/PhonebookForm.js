import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { AiOutlineUserAdd } from 'react-icons/ai';

import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  Button,
} from './PhonebookForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          dispatch(addContact(values));
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <Button type="submit">
            <AiOutlineUserAdd />
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
