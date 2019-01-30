// Test away
import React from "react";
import ReactDOM from "react-dom";
import {} from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

/* 
### Dashboard

- shows the controls and display

### Display Component

- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if othewise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class

### Controls Component

- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is closed
- the locked toggle button is disabled if the gate is open
*/

describe("<Dashboard/>", () => {
  it("should render display and controls", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
