
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<App />, app);

app.style.display = "none";

chrome.runtime.onMessage.addListener(
   function(request) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);
function toggle(){
   if (app.style.display === "none") {
     app.style.display = "block";
   } else{
     app.style.display = "none";
   }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
