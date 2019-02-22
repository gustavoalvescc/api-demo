import React from 'react';

const EmptyState = (props) => {
  return (
    <div className="tg-empty-state">
    <h1><i className="fas fa-ghost"></i></h1>
    <h1 className="tg-empty-state-text">Nothing to present</h1>
    {props.reload && <button className="tg-empty-state-reload" onClick={() => props.reload()}>Try Reloading</button>}
  </div>
  );
}

export default EmptyState;