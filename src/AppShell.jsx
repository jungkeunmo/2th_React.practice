import React from "react";

class Button extends React.Component {
    render() {
        return <button> 버튼 </button>
    };
};

class AppShell extends React.Component {
    render() {
        return (
            <div>
            <h1> hello word </h1>
            <Button/>    
            </div>
        );
    };
};

export default AppShell;