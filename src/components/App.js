import React from 'react';
import Header from './Header';
import List from './List';
import Form from './Form';
import items from '../sample-items.js'

class App extends React.Component {

    state = {
        listItems: items
    }

    addListItem = item => {
        const listItems = { ...this.state.listItems };
        listItems[`item${Date.now()}`] = item;
        this.setState({
            listItems: listItems
        });
    }

    toggleItem = item => {
        const listItems = { ...this.state.listItems }
        listItems[item].completed = !(listItems[item].completed);
        this.setState({
            listItems: listItems
        });
    }

    render() {
        return (
            <div className="todoListApp">
                <Header headline="To-Do List" listItems={ this.state.listItems } />
                <List listItems={ this.state.listItems } toggleItem={ this.toggleItem } />
                <Form addListItem={ this.addListItem } />
            </div>
        )
    }
}

export default App;
