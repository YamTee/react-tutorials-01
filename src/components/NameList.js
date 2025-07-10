import React, { Component } from "react";

import Person from "./Person";

class NameList extends Component {
  constructor() {
    super();

    this.state = {
      names: [
        {
          id: 1,
          name: "Mohammed",
          age: 26,
        },
        {
          id: 2,
          name: "kavya",
          age: 100,
        },
        {
          id: 3,
          name: "Satya",
          age: 24,
        },
      ],
    };

    this.addMember = this.addMember.bind(this);

    console.log(this.state.names);
  }

  addMember() {
    console.log("button clicked\n");

    this.setState((prevState) => {
      console.log(prevState.names);

      console.log("button clicked 11 \n");

      return {
        names: [
          ...prevState.names,
          {
            id: prevState.names.length + 1,
            name: "satheesh",
            age: 25,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.names.map((x) => (
            <Person key={x.id} person={x} />
          ))}
        </div>

        <button onClick={this.addMember}>Add Member</button>
      </div>
    );
  }
}

export default NameList;
