import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
class Habits extends Component {

  handleAdd = name => {
    this.props.onAdd(name);
  }


  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd}  />

        <div className="habits">
          <ul>
            {
              this.props.habits.map(habit => (
                <Habit 
                  key={habit.id} 
                  habit={habit}
                  onIncrement={this.props.onIncrement}
                  onDecrement={this.props.onDecrement}
                  onDelete={this.props.onDelete}
                  onAdd={this.props.onAdd}
                 ></Habit>
              ))
            }
          </ul>
          <button className="habits-reset" onClick={this.props.onReset}></button>
      </div>
      </>
    );
  }
}

export default Habits;