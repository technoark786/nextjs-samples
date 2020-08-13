import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        height: 150,
        margin: 25,
        // prefer using props like this instead of calling inside components.
        backgroundColor: (props) => props.bgColor
    }
});

export default useStyles;