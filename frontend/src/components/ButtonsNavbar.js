import React, { Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";

const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn tag="a" size="lg" floating gradient="purple">
        <MDBIcon icon="bolt" />
      </MDBBtn>
      <MDBBtn tag="a" floating gradient="peach">
        <MDBIcon icon="leaf" />
      </MDBBtn>
      <MDBBtn tag="a" size="sm" floating gradient="blue">
        <MDBIcon icon="star" />
      </MDBBtn>
    </Fragment>
  );
}

export default ButtonPage;