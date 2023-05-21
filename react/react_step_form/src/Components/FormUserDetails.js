import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'; //for navbar looks
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/raisedButton';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep
    }
    render() {
        const { values } = this.props;
        this.props
        return (
            <MuiThemeProvider>
                <h1>Hello from user details</h1>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails