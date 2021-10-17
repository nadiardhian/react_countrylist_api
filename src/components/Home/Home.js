import "./styles.css";

import React, { Component } from "react";
import axios from "axios";

const $ = require("jquery");
// require("datatables.net")(window, $);

class Tbl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  //option 2
  async getUsersData1() {
    const res = await axios.get("https://countriesnow.space/api/v0.1/countries/capital");
    return res.data;
  }

  componentDidMount() {
    this.getUsersData().then(() => this.sync());
  }

  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.users, //option 1
      // data: this.getUsersData1(), //option 2
      columns: [
        { title: "Name", data: "name" },
        { title: "Capital", data: "capital" },
        
      ]
    });
  }

  render() {
    return (
      <table
        className="display"
        width="100%"
        ref={(el) => (this.el = el)}
      ></table>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Tbl />
    </div>
  );
}
