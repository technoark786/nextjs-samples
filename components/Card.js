import { Card as MuiCard, makeStyles, CardHeader, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    card: {
        height: 150,
        margin: 25,
        // prefer using props like this instead of calling inside components.
        backgroundColor: (props) => props.bgColor
    }
});

function Card(props) {
    const { title, bgColor, children } = props;

    const classes = useStyles({ bgColor });

    return (
        <MuiCard className={classes.card}>
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
    children: PropTypes.element
};

export default Card;