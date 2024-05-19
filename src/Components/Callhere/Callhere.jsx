// import {  Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";


function Callhere({ info, title }) {
  return (
    <>
      <OverlayTrigger
        trigger="hover"
        key={"right"}
        placement={"right"}
        overlay={
          <Popover id={`popover-positioned-right`}>
            <Popover.Header as="h3">{title}</Popover.Header>
            <Popover.Body>
              <strong>{info}</strong>
            </Popover.Body>
          </Popover>
        }
      >
        <Button>Popover on</Button>
      </OverlayTrigger>
    </>
  );
}

export { Callhere };
