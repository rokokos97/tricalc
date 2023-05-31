import React from 'react';
import {Button} from 'antd-mobile';
import PropTypes from 'prop-types';

const ResetConfirmButtonBlock = ({onReset, onSubmit, isCalculateDisabled}) => {
  const buttonStyle = {width: '17.2rem', margin: '0.8rem', fontSize: '1.8rem'};
  return (
    <div style={{
      'display': 'flex',
      'justifyContent': 'center',
      'position': 'fixed',
      'bottom': '0',
      'left': '0'}}>
      <Button
        style={buttonStyle}
        fill='outline'
        size='large'
        color="primary"
        type="button"
        onClick={onReset}
      >
          Reset
      </Button>
      <Button
        color="primary"
        type="button"
        style={buttonStyle}
        size={'large'}
        disabled={isCalculateDisabled}
        onClick={onSubmit}>
          Calculate
      </Button>
    </div>
  );
};
ResetConfirmButtonBlock.propTypes = {
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
  isCalculateDisabled: PropTypes.bool,
};
export default ResetConfirmButtonBlock;
