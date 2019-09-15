import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class FormUserDetails extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    className="dense"
                    label="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField
                    label="Last Name"
                    className="dense"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    label="Email"
                    className="dense"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>

                <Button variant="contained" color="primary" className="button" onClick={this.continue}>
                    Continue
                </Button>


            </>
        );
    }  ;
};

export default FormUserDetails;