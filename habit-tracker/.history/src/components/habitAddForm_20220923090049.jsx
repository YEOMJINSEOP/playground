import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  }
  render() {
    console.log('habitAddForm');
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input 
          ref={this.inputRef}
          type="text" 
          className="add-input" 
          placeholder="Type your Habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;