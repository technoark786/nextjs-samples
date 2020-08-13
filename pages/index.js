import React from 'react';
import { Container } from '@material-ui/core';
import Card from '../components/Card';

function Index() {
    return (
        <Container>
            <Card title='Custom Card' bgColor='red'>
                Custom card body
            </Card>
        </Container>
    );
}

export default Index;