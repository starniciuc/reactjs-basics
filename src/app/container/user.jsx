import React from "react";
import { connect } from 'react-redux';
import { setUserName } from '../actions/userAction';

class User extends React.Component {

    render() {
        return (
            <div>
                <p>The user page {this.props.match.params.id}</p>
                <p>User name: {this.props.user.name}</p>
                <button onClick={() => this.props.setName('Maria')} className="btn btn-primary">Change name</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setUserName(name))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);