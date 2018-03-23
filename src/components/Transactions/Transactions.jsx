import React from 'react';
import './styles.scss';

const Transactions = () => (
  <section className="hero is-white is-medium sub-container">
    <div className="hero-head">
        <h1 className="title is-size-4">Transactions</h1>
        <div className="columns">
          <div className="column">
            Event history
          </div>
        </div>
    </div>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <div className="title is-size-5">Asset tracking history</div>
            <div>
              Firt image from register event.
            </div>
          </div>
          <div className="column">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">ID:</label>
              </div>
              <div className="field-body">
                <div className="field detail-content">
                  <p className="control is-expanded has-icons-left">
                    Asset ID
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Description:</label>
              </div>
              <div className="field-body">
                <div className="field detail-content">
                  <p className="control is-expanded has-icons-left">
                    Description del asset, summary of first event, register event
                  </p>
                </div>
              </div>
            </div>
          Eventos here
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Transactions;