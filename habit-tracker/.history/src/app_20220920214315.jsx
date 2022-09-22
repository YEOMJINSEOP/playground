import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Running', count: 0},
      {id: 3, name: 'Coding', count: 0},
    ]
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits});
    //첫 번째 habits는 key이고, 두 번째 habits는 지역 변수로 선언한 배열 haibts
  }
  
  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0: count;
    this.setState({habits: habits});
  }
  
  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id != habit.id);
    this.setState({habits});
  }

  render() {
    return 
    (
      <><Navbar />
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete} />
      </>
      
    );
  }
}


export default App;
