import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTeaForm(props) {

  function handleNewTeaFormSubmission(event) {
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      variety: event.target.location.value,
      caffeination: event.target.caffeination.value,
      price: event.target.price.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTeaFormSubmission}>
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

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
};

export default NewTeaForm;