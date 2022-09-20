import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits});
    //첫 번째 habits는 key이고, 두 번째 habits는 지역 변수로 선언한 배열 haibts
  }

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`)
  }

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`)
  }

  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => (
            <Habit 
              key={habit.id} 
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
             ></Habit>
          ))
        }
      </ul>
    );
  }
}

export default Habits;