import React, { Component } from "react";

class RefsDemo extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();

    this.cbRef = null;

    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    //console.log(this.inputRef);

    //this.inputRef.current.focus();
    //
    this.cbRef.focus();
  }

  alertValue = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input
          ref={this.inputRef}
          className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <input
          ref={this.setCbRef}
          className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={this.alertValue}
        >
          Click Here
        </button>
      </div>
    );
  }
}

export default RefsDemo;
