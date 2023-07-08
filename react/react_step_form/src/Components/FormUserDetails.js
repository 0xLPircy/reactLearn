import React, { Component } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar'; //for navbar looks
import TextField from '@mui/material/TextField';
import RaisedButton from '@mui/material/Button';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values } = this.props;
        return (
            <ThemeProvider>
                <React.Fragment>

                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default FormUserDetails