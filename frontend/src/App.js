import React, {Component} from "react";

const todoItems = [
  {
    id: 2,
    title: "walking",
    description: "go to walking at 6 am",
    completed: true
  },
  {
    id: 3,
    title: "going to market",
    description: "buy apple 1kg",
    completed: false
  },
  {
    id: 4,
    title: "Gym",
    description: "Go to Gym evening by 6pm",
    completed: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted : false,
      todoList : todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted:true });
    }
    return this.setState({ viewCompleted:false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Complete
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link-active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };



}

export default App;