import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("547a62b3-013e-4caf-bead-4b79849a7635");
  }

  render () {
    return null;
  }
}
export default CrispChat