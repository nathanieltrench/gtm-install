import React from "react";
import { BrowserRouter} from "react-router-dom";
import AppcuesRouter from "./Appcues";

/*
The AppcuesRouter contains the Appcues.page call, as well as all the app's page
changes. It needs to be additionally wrapped in BrowserRouter to function properly.

This is also where the Appcues.identify call is made, as well as any event listeners
like Appcues.on so that they will be called every time the page loads.
*/

var userId = "test123";
console.log(userId);

const App = () => {
  if (!window.localStorage.currentUser) { // persists the current user across page refresh
    window.localStorage.setItem("currentUser", "testUser"); // if no current user, set userID to "testUser"
  }

  if (!window.localStorage.timestamp) { // persists the timestamp across refresh
    window.localStorage.setItem("timestamp", Date.now()); // if no timestamp, sets it to now
  }
  
  //const userId = window.localStorage.currentUser;
 // const currentTime = parseInt(window.localStorage.timestamp);

  //window.Appcues.on("all", function(name, payload) {
    // console.log(name);     // uncomment these two lines if you'd like to
    // console.log(payload);  // log all events into the dev tools console

    //logEvents(name, payload); // adds events into the event log on the page
  //})

  //window.Appcues.loadLaunchpad("#launchpad", { // loads Launchpad on this element
    //position: "right",
    //icon: <img src={binoculars} alt="blurple binocular icon"></img>
 // })
  
  return ( 
    <BrowserRouter> 
      <AppcuesRouter /> 
    </BrowserRouter>
  )
}

export default App;
