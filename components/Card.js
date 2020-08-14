import { Card as MuiCard, makeStyles, CardHeader, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useRedColorStyles, marginStyles } from '../src/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    card: {
        ...marginStyles,
        height: 150,
        margin: 25,
        // prefer using props like this instead of calling inside components.
        color: (props) => props.color
    }
});

function Card(props) {
    const { title, color, children } = props;

    const classes = useStyles({ color });
    const redColorClasses = useRedColorStyles();

    return (
        <MuiCard className={clsx(classes.card, redColorClasses.root)}>
            <CardHeader title={title} />
            <CardContent>
                {children}
            </CardContent>
        </MuiCard >
    );
}

Card.propTypes = {
    title: PropTypes.string,
    bgColor: PropTypes.string,
    children: PropTypes.node
};

export default Card;