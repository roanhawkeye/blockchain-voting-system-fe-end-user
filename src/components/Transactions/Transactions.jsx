import React from 'react';
import './styles.scss';

const Transactions = () => (
  <section class="hero is-info is-medium">
    <div class="hero-head">
        <h1 className="title is-size-4">Transactions</h1>
        <div className="columns">
          <div className="column">
            Event history
          </div>
        </div>
    </div>
    <div class="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="title is-size-5">Asset tracking history</div>
          </div>
          <div className="column">
            Second column
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Transactions;