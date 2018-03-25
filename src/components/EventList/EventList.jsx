import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import EventDetail from './../EventDetail';

class EventList extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      events: this.props.events,
      showDetails: false,
      event: {} 
    };
  }

  handleDetails = (event) => {
    this.setState({
      showDetails: true,
      event: event
    });
  }

  handleCloseDetails = () => {
    this.setState({ showDetails: false });
  }

  render(){
    const showDetails = this.state.showDetails;
    
    const events = this.state.events.map((event, index) => {
      return (
        <li key={index}>
          <div className="event-item box">
            <div>{event.summary}</div>
            <div className="icon has-text-success icon-position" onClick={this.handleDetails.bind(this, event)}>
              <i class="fa fa-lg fa-info-circle"/>
            </div>
          </div>
        </li>
      )
    });

    return(
      <React.Fragment>
        <section className="events-container">
          <span class="title"> Events: </span>
          <ul className="event-list">
            {events}
          </ul>
        </section>
        { showDetails ? <EventDetail event={this.state.event} handleClose={this.handleCloseDetails }/> : '' }
      </React.Fragment>
    )
  }
}

export default EventList;