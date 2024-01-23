import React from 'react';
import PropTypes from 'prop-types';

function Tea(props) {
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h3>Variety: {props.variety}</h3>
        <h3>Caffeine Level: {props.caffeination}</h3>
        <h3>Price: {props.price}</h3>
      </div>
    </React.Fragment>
  );
}

Tea.propTypes = {
  name: PropTypes.string,
  variety: PropTypes.string,
  caffeination: PropTypes.string,
  price: PropTypes.string,
  whenTeaClicked: PropTypes.func
}

export default Tea;