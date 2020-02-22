import React, { Component } from "react";

class Texto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     this.incrementar();
  //   }, 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  incrementar = () => {
    const { contador } = this.state;
    this.setState({ contador: contador + 1 });
  }

  render() {
    const { msg } = this.props;
    const { contador } = this.state;
    return (
      <>
        <h2>
          {msg} (Contador: {contador})
        </h2>
        <input type="button" value="incrementar!" onClick={this.incrementar}/>
      </>
    );
  }
}

export default Texto;
