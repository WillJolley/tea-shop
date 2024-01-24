import React from 'react';
import PropTypes from 'prop-types';

function TeaDetail(props) {
  const { tea, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Tea Details</h1>
      <h3>Name: {tea.name}</h3>
      <h3>Variety: {tea.variety}</h3>
      <h3>Caffeine Level: {tea.caffeination}</h3>
      <h3>Price Per Ounce: {tea.price}</h3>
      <h3>Quantity: {tea.quantity}oz.</h3>
      <button onClick={onClickingEdit}>Edit Tea</button>
      <hr/>
    </React.Fragment>
  );
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default TeaDetail;