import React from 'react'
import PropTypes from 'prop-types';

class EventDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = { event: this.props.event }
  }

  close = () => {
    this.props.handleClose();
  }

  render(){
    return(
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <section class="modal-card-body">
            Hello Event Details: {this.state.event.summary}
          </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.close}></button>
      </div>
    )
  }
}

EventDetail.propTypes = {
  event: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default EventDetail;