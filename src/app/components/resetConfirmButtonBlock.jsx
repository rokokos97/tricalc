import React from 'react';
import {Button} from 'antd-mobile';
import PropTypes from 'prop-types';

const ResetConfirmButtonBlock = ({onReset, onSubmit, isCalculateDisabled}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Button
        style={{width: '100%', margin: '10px'}}
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
        style={{width: '100%', margin: '10px'}}
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
