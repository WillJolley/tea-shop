import React from 'react';
import PropTypes from 'prop-types';

function Tea(props) {
  
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h3>{props.name} - {props.variety}</h3>
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