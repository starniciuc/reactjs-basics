import React from "react";

export default class User extends React.Component {

    render() {
        return (
            <div>
                <p>The user page {this.props.match.params.id}</p>
            </div>
        );
    }
}