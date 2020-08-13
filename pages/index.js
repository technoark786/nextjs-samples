import React from 'react';
import useIndexStyles from '../src/index-styles';
import { Card, Container } from '@material-ui/core';

function Index() {
    const classes = useIndexStyles({ bgColor: 'red' });

    return (
        <Container>
            <Card className={classes.card}>
            </Card>
        </Container>
    );
}

export default Index;