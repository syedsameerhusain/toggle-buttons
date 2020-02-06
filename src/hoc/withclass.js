import React from 'react';

const withclass = (WrapComponent, className) => {
  return props => (
    <div className={className}>
      <WrapComponent {...props} />
    </div>
  );
};
export default withclass;
