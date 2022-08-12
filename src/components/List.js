import React from 'react';

class List extends React.Component {

    render() {
        const listItems = this.props.listItems;
        return (
            <ul className="todoList">
                {
                    Object.keys(listItems).map( item => (
                        <li key={ item }
                            draggable="true"
                            className={ listItems[item].completed ? 'completed' : '' }
                            onClick={ () => this.props.toggleItem(item) }>{ listItems[item].title }</li>
                    ))
                }
            </ul>
        )
    }
}

export default List;
