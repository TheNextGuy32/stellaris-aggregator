import React, {Component} from 'react';
import EventList from "./EventList/eventList"
import EventInfo from "./EventInfo/eventInfo"

class EventBrowser extends Component {    
    constructor() {
        super();
        this.state = {
            selectedEvent: null
        }    
    }
    selectAnEvent = (event) => {
        this.setState({selectedEvent: event});
    }
    render() {
        if (this.state === null || this.state.selectedEvent === null)
        {
            return (
                <div className="event-handler">  
                    <EventList events={this.props.events} selectedEvent={this.state.selectedEvent} openEventFn={this.selectAnEvent}/>              
                </div>
            );
        }
        return (
            <div className="event-handler">  
                <EventList events={this.props.events} selectedEvent={this.state.selectedEvent} openEventFn={this.selectAnEvent}/>
                <EventInfo event={this.state.selectedEvent} />                
            </div>
        );
    }    
}

export default EventBrowser;