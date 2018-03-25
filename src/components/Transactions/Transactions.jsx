import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import EventBreadcrumb from './../EventBreadcrumb';

class Transactions extends React.Component {

  render() {
    const eventSummaries = this.props.data.events.map((event) => event.summary );

    return (
      <section className="hero is-white sub-container">
        <div className="hero-head">
            <h1 className="title is-size-4">Transactions</h1>
            <div className="columns">
              <div className="column">
                <EventBreadcrumb events={eventSummaries} />
              </div>
            </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <div className="title is-size-5">Asset tracking history</div>
                <div>
                  <figure className="image is-square">
                    <img src={`data:image/jpeg;charset=utf-8;base64, ${ this.props.data.events[0].encodedImage }`} />
                  </figure>
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
                        {this.props.data.uuid}
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
                        {this.props.data.description}
                      </p>
                    </div>
                  </div>
                </div>
                Events Here
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Transactions.propTypes = {
  data: PropTypes.object.isRequired
};

export default Transactions;