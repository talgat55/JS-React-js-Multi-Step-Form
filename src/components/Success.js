import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Success extends React.Component {

    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Thanks</h1>
            </>
        );
    }  ;
};

export default Success;