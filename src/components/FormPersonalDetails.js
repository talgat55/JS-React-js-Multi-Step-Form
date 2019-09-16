import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
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
                    label="Occupation"
                    onChange={handleChange('occupation')}
                    defaultValue={values.occupation}
                />
                <br/>
                <TextField
                    label="City"
                    className="dense"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                />
                <br/>
                <TextField
                    label="BIO"
                    className="dense"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                />
                <br/>

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