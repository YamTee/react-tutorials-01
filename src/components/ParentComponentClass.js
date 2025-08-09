import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

import RegularComponent from "./RegularComponent";
import PureComp from "./PureComponent";

class ParentComponentClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "yamtee",
      count: 0,
    };

    // this.showAlert = this.showAlert.bind(this);
  }

  //   showAlert(greetText) {
  //     alert(`this is ${greetText} from child component`);
  //   }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "yamtee",
      });
    }, 2000);
  }

  render() {
    console.log(
      "************************ Parent COmponnet rendered ************************",
    );
    return (
      <div>
        {/* <ChildComponent
          showAlert={this.showAlert}
          greetText={this.props.greet}
        /> */}

        <RegularComponent value={this.state} />
        <PureComp value={this.state} />
      </div>
    );
  }
}

export default ParentComponentClass;
