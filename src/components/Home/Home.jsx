import React from 'react';
import './styles.scss';
import { Redirect } from 'react-router-dom';

import API from './../../utils/API';

class Home extends React.Component {
  state = {
    redirectToReferrer: false
  };

  search() {
    API.findAsset();
  }

  render() {
      const { redirectToReferrer } = this.state;
    
      if (redirectToReferrer) {
        return <Redirect to={{ pathname: '/summary' }} />;
      }

      return (
        <section className="column aside hero is-fullheight movement-section">
          <div className="container has-text-centered">
            <h1 className="title is-size-4">Asset Tracking</h1>
            <div className="movement-form">
              <div className="field has-addons">
                <div className="control has-50-vw">
                  <input className="input" type="text" placeholder="Find Assets by ID" />
                </div>
                <div className="control">
                  <button className="button is-primary" onClick={this.search()}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default Home;
