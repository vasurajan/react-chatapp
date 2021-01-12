import React, { Component } from 'react'
import { Menu } from "semantic-ui-react";
import UserPanel from './UserPanel'

class SidePanel extends Component {
    render() {
        return (
            <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#1f0208", fontSize: "1.2rem" }}
      >
      <UserPanel />
      </Menu>
        )
    }
}

export default SidePanel
