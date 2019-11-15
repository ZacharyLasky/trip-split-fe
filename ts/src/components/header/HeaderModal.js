import React from "react";
//STYLE IMPORTS
import { Button, Header, Image, Modal } from "semantic-ui-react";
import pig from "../../assets/landing/pig.png";

const HeaderModal = () => (
  <Modal trigger={<Button>About TRIP SPLIT</Button>}>
    <Modal.Header>TRIP SPLIT</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={pig} />
      <Modal.Description>
        <Header>TRIP SPLIT makes trips easy!</Header>
        <p>
          Gone are the days of scrambling to try and make sure everyone has paid
          up.
        </p>
        <p>Simply type in where you’re going and who’s going on your trip.</p>
        <p>
          During your trip, as you pay for stuff, enter the item cost and who
          paid what amount towards that item!
        </p>

        <p>
          At the end of the trip, we’ll tell you exactly who owes who what
          amount…
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default HeaderModal;
