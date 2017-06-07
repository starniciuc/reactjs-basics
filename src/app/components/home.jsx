import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            homeLink: props.initialLinkName
        };
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button className="btn btn-primary" onClick={this.handleOnClick}>Click me</button>
                <input type="text" value={this.state.homeLink}
                       onChange={(event) => this.onHandleChange(event)} />
                <button className="btn btn-primary" onClick={this.handleChangeLink.bind(this)}>ChangeLink</button>
            </div>
        );
    }

    handleOnClick() {
        console.log("Clicked");
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    handleChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
}