import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponentClass extends Component {
  constructor(props) {
    super(props);

    this.showAlert = this.showAlert.bind(this);
  }

  showAlert(greetText) {
    alert(`this is ${greetText} from child component`);
  }

  render() {
    return (
      <div>
        <ChildComponent
          showAlert={this.showAlert}
          greetText={this.props.greet}
        />
      </div>
    );
  }
}

export default ParentComponentClass;
