import { Component } from "react";
import Form from "../components/Form";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="l-page">
        <Form />
      </div>
    );
  }
}

export default Home;
