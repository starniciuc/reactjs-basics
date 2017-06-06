import React from "react";

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button className="btn btn-primary" onClick={this.handleOnClick}>Click me</button>
            </div>
        );
    }

    handleOnClick() {
        console.log("Clicked");
    }
}