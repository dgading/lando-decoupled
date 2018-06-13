import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFlash = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  border: 2px solid #000;
`;

const FlashError = StyledFlash.extend`
  background: red;
  color: #fff;
  border: 2px solid red;
`;

const Flash = ({message, type}) => {
  let FlashContainer;
  switch (type) {
    case 'Error':
      FlashContainer = FlashError;
      break;
    default:
      FlashContainer = StyledFlash;
      break;
  }

  return(
    <FlashContainer>
      <p>{type}</p>
      <p>{message}</p>
    </FlashContainer>
  );
};

Flash.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Error', 'Status', 'Notice']).isRequired,
};

export default Flash;
