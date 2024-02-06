import React from 'react';
import PropTypes from 'prop-types';

function EditTeaForm (props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      variety: event.target.variety.value,
      caffeination: event.target.caffeination.value,
      price: event.target.price.value,
      quantity: tea.quantity,
      id: tea.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleEditTeaFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='variety'
          placeholder='Variety' />
        <input 
          type='text'
          name='caffeination'
          placeholder='Caffeine Level' />
        <input 
          name='price'
          placeholder='Price per ounce' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
};

export default EditTeaForm;