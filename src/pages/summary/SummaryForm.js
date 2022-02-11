import React, { useState } from "react";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      {" "}
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(!tcChecked)}
          label={checkboxLabel}
        />
        <Button variant="primary" type="submit" disabled={!tcChecked}>
          Confirm order
        </Button>
      </Form.Group>
    </Form>
  );
}
