import React from 'react';

class Header extends React.Component {

    render() {
        const listItems = this.props.listItems;
        const totalCount = Object.keys(listItems).length;
        const activeCount = Object.keys(listItems).filter( item => listItems[item].completed === false ).length;
        const itemsRemainingText = activeCount > 0 ? `${activeCount} of ${totalCount} To-Dos Remaining` : 'All To-Dos Complete!';
        return (
            <div className="todoListHeader">
                <h1>{ this.props.headline }</h1>
                <h2>{ itemsRemainingText }</h2>
            </div>
        )
    }
}

export default Header;
