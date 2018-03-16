import React from 'react';
import './styles.scss';

const Transactions = () => (
  <div className="container">
    <h1 className="title is-size-4">Transactions</h1>
    <div className="columns">
      <div className="column">
        Event history
      </div>
    </div>
    <div className="columns">
      <div className="column is-one-third">
        <div className="title is-size-5">Asset tracking history</div>
      </div>
      <div className="column">
        Second column
      </div>
    </div>
  </div>
);

export default Transactions;