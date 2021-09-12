import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto';
import './Filter.css'



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: 'flex',
            flexFlow: 'column wrap'
        },
    },
}));

export default function Filter({ handleStarClick, handlePayType, handleAll, handleSort, star, payType, sortType }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="secondary" onClick={handleAll}>
                Show All
            </Button>
            <Button color="primary" variant={star === 1 ? "contained" : "outlined"} onClick={() => handleStarClick(1)}>1 Star</Button>
            <Button color="primary" variant={star === 2 ? "contained" : "outlined"} onClick={() => handleStarClick(2)}>2 Star</Button>
            <Button color="primary" variant={star === 3 ? "contained" : "outlined"} onClick={() => handleStarClick(3)}>3 Star</Button>
            <Button color="primary" variant={star === 4 ? "contained" : "outlined"} onClick={() => handleStarClick(4)}>4 Star</Button>

            <Button variant={payType === "Cash" ? "contained" : "outlined"} color="secondary" onClick={() => handlePayType("Cash")}>
                Cash Only
            </Button>
            <Button variant={payType === "Online" ? "contained" : "outlined"} color="secondary" onClick={() => handlePayType("Online")}>
                Online Payment
            </Button>


            <Button variant={sortType === 1 ? "contained" : "outlined"} color="primary" onClick={() => handleSort(1)}>
                Sort Low To High
            </Button>
            <Button variant={sortType === 2 ? "contained" : "outlined"} color="primary" onClick={() => handleSort(2)}>
                Sort High To Low
            </Button>
        </div>
    )
}