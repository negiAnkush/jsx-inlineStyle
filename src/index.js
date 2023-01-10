import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "Blue",
  fontSize: "16px",
  br: "2px",
  border: "4px dotted blue",
  blockSize: "200px"
};

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p style={customStyle}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Urna porttitor rhoncus
      dolor purus non. Morbi tristique senectus et netus et malesuada fames.
      Eleifend donec pretium vulputate sapien nec. Amet consectetur adipiscing
      elit pellentesque habitant morbi tristique senectus. In est ante in nibh.
      Eget aliquet nibh praesent tristique magna sit. Interdum velit laoreet id
      donec ultrices tincidunt arcu non. Ac orci phasellus egestas tellus rutrum
      tellus pellentesque. Amet est placerat in egestas.
    </p>
  </div>,
  document.getElementById("root")
);
