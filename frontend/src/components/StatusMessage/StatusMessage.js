import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledStatusMessage = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  border: 2px solid #000;
`;

const StatusMessageError = StyledStatusMessage.extend`
  background: red;
  color: #fff;
  border: 2px solid red;
`;

const StatusMessage = ({message, type}) => {
  let StatusMessageContainer;
  switch (type) {
    case 'Error':
      StatusMessageContainer = StatusMessageError;
      break;
    default:
      StatusMessageContainer = StyledStatusMessage;
      break;
  }

  return(
    <StatusMessageContainer>
      <p>{type}</p>
      <p>{message}</p>
    </StatusMessageContainer>
  );
};

StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Error', 'Status', 'Notice']).isRequired,
};

export default StatusMessage;
