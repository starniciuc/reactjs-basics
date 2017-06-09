import React from "react";
import { connect } from 'react-redux';

class Home extends React.Component {
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
                <button className="btn btn-primary" onClick={this.handleChangeLink.bind(this)}>SetName</button>
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
        this.props.setName('Maria');
        //this.props.changeLink(this.state.homeLink);
    }
}

const mapStateToProps = () => {return {}};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: 'SET_NAME',
                payload: name
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);