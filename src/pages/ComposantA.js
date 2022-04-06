import { Table } from "@material-ui/core";
import { Component } from "react";

class ComposantA extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

export default ComposantA;
