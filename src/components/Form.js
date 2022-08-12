import React from 'react';

class Form extends React.Component {

    inputRef = React.createRef();

    submitForm = e => {
        e.preventDefault();
        const item = {
            title: this.inputRef.current.value,
            completed: false
        }
        this.props.addListItem(item)
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="todoListForm" onSubmit={ this.submitForm }>
                <input ref={ this.inputRef } type="text" placeholder="Type anything here..." required/>
                <input type="submit" value="Add"/>
            </form>
        )
    }
}

export default Form;
