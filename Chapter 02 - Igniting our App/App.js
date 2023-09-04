/**
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashin algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
// React element
// const jsxHeading = <h1 className="head">Namaste javascript with JSX</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // react element rendering
// root.render(jsxHeading);

// React Fuctional Component
const Title = () => {
  return (
    <h1 className="head" tabIndex={"5"}>
      Namaste React using JSX
    </h1>
  );
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste react functional component.</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
