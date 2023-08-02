import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            //Footer
        </div>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);