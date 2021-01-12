import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";

import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";

const App = () => {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <SidePanel />

      <Grid.Column style={{ marginLeft: 350 }}>
      <Messages />
      </Grid.Column>
    </Grid>
  );
}

export default App;
