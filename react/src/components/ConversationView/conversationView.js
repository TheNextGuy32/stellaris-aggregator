import React, {Component} from 'react';

import DemandList from "./DemandList/demandList"

const conversations = [{name: "Conversation name", id: 1}]
const conversationSources = [{filename:"file", eventId: "event.id", optionId:"option.Id"}]

function ConversationView (props) {
    return (
        <div className="row">
        <div className="col-xs-4">
            <ConversationList />
        </div>
        <div className="col-xs-8">
            <ConversationViewer />
        </div>
        </div>
    );
}

function ConversationList (props) {
    return (
        <div>
            <p>Conversations</p>
            <ul className="list-group">
                {conversations.map(conversation => 
                    <button key={conversation.Id} type="button" className="list-group-item">{conversation.Name}</button>
                )}            
            </ul>
        </div>
    );
}

class ConversationSourceList extends Component {
render() {
    return (
    <div>
        <p>Conversation Sources</p>
        <ul className="list-group">
        {conversationSources.map(conversationSource => 
            <button key={conversationSource.filename + conversationSource.eventId + conversationSource.optionId}type="button" className="list-group-item">
                <span>{conversationSource.filename}</span> /
                <span>{conversationSource.eventId}</span> /
                <span>{conversationSource.optionId}</span>
            </button>
        )}
        </ul>
    </div>
    );
}
}



class ConversationEditor extends Component {
    render() {
        return (
        <div className="ConversationEditor">
            <p>Varname</p>
            <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Name</span>
            <input type="text" className="form-control" placeholder="Conversation" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group">
            <textarea type="text" className="form-control"  placeholder="Description" aria-describedby="basic-addon1" rows="10"></textarea>
            </div>
            <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">Ethic</span>
                <input type="text" className="form-control" placeholder="xenophile" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">Duration in Years</span>
                <input type="text" className="form-control" placeholder="25" aria-describedby="basic-addon1"></input>
            </div>
        </div>
        );
    }
}

function ConversationViewer(props) 
{
return (
    <div>
    <ConversationSourceList />
    <ConversationEditor />
    <DemandList/>
    </div>
);
}

export default ConversationView;