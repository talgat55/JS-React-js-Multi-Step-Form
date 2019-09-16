import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {List, ListItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class FormPersonalDetails extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem primaryText="First Name">
                        {firstName}
                    </ListItem>
                    <ListItem  primaryText="Last Name" >
                        {lastName}
                    </ListItem>
                    <ListItem primaryText="Email" >
                        {email}
                    </ListItem>
                    <ListItem  primaryText="Occupation" >
                        {occupation}
                    </ListItem>
                    <ListItem  primaryText="BIO"  >
                        {bio}
                    </ListItem>
                    <ListItem primaryText="City" >
                        {city}
                    </ListItem>
                </List>

                <Button variant="contained" color="primary" className="button" onClick={this.continue}>
                    Continue
                </Button>
                <Button variant="contained" color="primary" className="button" onClick={this.back}>
                    Back
                </Button>


            </>
        );
    }  ;
};

export default FormPersonalDetails;