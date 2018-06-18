import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border-radius: 0;
  border: #888 1px solid;
`;



const Button = ({text, click}) => {
  return(
    <StyledButton onClick={click}>{text}</StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};

export default Button;
