
// This hook is used to manage the state of the screen, such as "Idle", "Loading", "Error", etc.

import { useState } from "react";

export function useScreenState() {

    // current state of the screen
  const [state, setState] = useState("Idle");

  const changeState = () => {

    // if the current state is "Idle", change it to "Active"
    // if the current state is "Active", change it to "Error"
    // if the current state is "Error", change it to "Idle"
    if (state === "Idle") {
      setState("Active");
      return;
    }

    if (state === "Active") {
      setState("Error");
      return;
    }

    setState("Idle");
  };

  return { state, setState, changeState };
}
