import { useState } from 'react';
import style from './Contact_Form.module.css';

const CONTACT_DEFAULT = { name: '', number: '' };
const ContactForm = ({ onSubmit }) => {
  const [dataForm, setDataForm] = useState({ ...CONTACT_DEFAULT });

  const onChangeHandler = ({ target: { name, value } }) => {
    setDataForm(prevData => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ ...dataForm });
    setDataForm({ ...CONTACT_DEFAULT });
  };

  return (
    <>
      <form className={style.contact_form} onSubmit={handleSubmit}>
        <div className={style.form_field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeHandler}
            value={dataForm.name}
          />
        </div>
        <div className={style.form_field}>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{(1, 4)}?[ .\-\s]?\(?\d{(1, 3)}?\)?[ .\-\s]?\d{(1, 4)}[
          .\-\s]?\d{(1, 4)}[ .\-\s]?\d{(1, 9)}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeHandler}
            value={dataForm.number}
          />
        </div>
        <button className={style.form_button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
