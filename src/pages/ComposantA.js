import Table from "../components/Table";
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
