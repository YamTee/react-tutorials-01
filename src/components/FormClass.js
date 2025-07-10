import React, { Component } from "react";

class FormClass extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: 0,
      gender: "",
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeAge = (event) => {
    this.setState({ age: event.target.value });
  };

  onChangeGender = (event) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <table>
            <tr className="">
              <td style={{ textAlign: "right" }}>
                <label for="name" className="form-label">
                  Name:
                </label>
              </td>

              <td>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </td>
            </tr>
            <tr className="mt-5">
              <td style={{ textAlign: "right" }}>
                <label for="age" className="form-label my-4">
                  Age:
                </label>
              </td>

              <td>
                <input
                  type="number"
                  id="age"
                  className="form-input"
                  value={this.state.age}
                  onChange={this.onChangeAge}
                />
              </td>
            </tr>
            <tr className="mt-5">
              <td style={{ textAlign: "right" }}>
                <label for="gender" className="form-label my-4">
                  Gender:
                </label>
              </td>

              <td>
                <select
                  className="form-input w-full"
                  id="gender"
                  value={this.state.gender}
                  onChange={this.onChangeGender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default FormClass;
