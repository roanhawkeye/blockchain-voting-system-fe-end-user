import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class EventList extends React.Component {
  constructor(props){
    super(props);
    this.state = { events: this.props.events };
  }

  render(){
    const iconTag = <div className="icon has-text-success icon-position"><i class="fa fa-lg fa-info-circle"/></div>;
    const events = this.state.events.map((event, index) => {
      return (
        <li key={index}>
          <div className="event-item box">
            <div>{event.summary}</div>
            {iconTag}
          </div>
        </li>
      )
    });
    return(
      <section className="events-container">
        <span class="title"> Events: </span>
        <ul className="event-list">
          {events}
        </ul>
      </section>
    )
  }
}

// EventList.propTypes = {
//   events: Proptypes.array.isRequired
// }

export default EventList;