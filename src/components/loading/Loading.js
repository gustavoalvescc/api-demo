import React from 'react';

const Loading = () => {
  return (
    <div className="tg-full-content">
      <div className="tg-loading-center">
        <div className="tg-lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default Loading;