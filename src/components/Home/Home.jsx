import React from 'react';
import './styles.scss';

import Transactions from './../Transactions';
import Notification from './../Notification';

import API from './../../utils/API';

import dummyData from './dummyData';

class Home extends React.Component {
  state = {
    showTransactions: true,
    showEvenDetail: false,
    showErrorMessage: false,
    assetId: '',
    assetData: dummyData,
    errorMessage: {}
  };


  search = () => {
    API.findAsset(this.state.assetId)
      .then(data => {
        console.log(data);
        if(data.uuid){
          this.setState({
            assetData : data, 
            showTransactions: true,
            showErrorMessage: false
          });
        }

        if(data.status){
          this.setState({
            showErrorMessage: true,
            showTransactions: false,
            errorMessage: data
          })
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ showTransactions: false });
      });
  }
  handleInputChange = (event) => {
    this.setState({assetId: event.target.value});
  }

  handleHideMessageError = (event) => {
    this.setState({showErrorMessage: false});
  }

  render() {
      const  showTransactions  = this.state.showTransactions;
      const  showErrorMessage = this.state.showErrorMessage;

      return (
        <section className="column aside hero is-fullheight movement-section">
          <div className="container has-text-centered">
            { showErrorMessage ? <Notification 
              isActive={ showErrorMessage }
              message={this.state.errorMessage.message}
              isSuccess={false}
              handleHideMessageError={this.handleHideMessageError}
              /> : ''} 
            <h1 className="title is-size-4">Asset Tracking</h1>
            <div className="movement-form">
              <div className="field has-addons">
                <div className="control has-50-vw">
                  <input className="input" type="text" placeholder="Find Assets by ID" onChange={this.handleInputChange} />
                </div>
                <div className="control">
                  <button className="button is-primary" onClick={this.search}>
                    Search
                  </button>
                </div>
              </div>
            </div>
            { showTransactions ? <Transactions data={this.state.assetData} /> : ''}
          </div>
        </section>
      );
    }
  }

export default Home;
