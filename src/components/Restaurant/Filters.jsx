import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import '@fontsource/roboto';
import './Filter.css'


const initialState = {
    "title": "",
    "star": "",
    "cuisines": "",
    "cost": "",
    "time": "",
    "payment": "",
    "votes": "",
    "reviews": "",
    "img": ""
}




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: 'flex',
            width: '25ch',
            flexFlow: 'column wrap'
        },
    }, modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'grid',
        gridGap: '10px'
    },
}));

export default function Filter({ handleStarClick, handlePayType, handleAll, handleSort, stars, payType, sortType, handleAddRest }) {

    const [details, setDetails] = useState(initialState)

    // const { title, star, cuisines, cost, time, payment, votes, reviews, img } = details;
    const handleAddRestaurant = () => {
        handleAddRest(details)
        handleModalClose()
    }

    const handleDetails = (e) => {
        const { name, value } = e.target;

        [name] === "cuisines" ?
            setDetails({
                ...details,
                [name]: value.split(",")
            }) :
            setDetails({
                ...details,
                [name]: value
            })


        console.log(details);
    }

    const [modal, setModal] = useState(false)

    const classes = useStyles();

    const handleModalOpen = () => {
        setModal(true);
    };

    const handleModalClose = () => {
        setModal(false);
    };
    return (
        <div className={classes.root}>
            <Button variant="outlined" color="secondary" onClick={handleAll}>
                Show All
            </Button>
            <Button color="primary" variant={stars === 1 ? "contained" : "outlined"} onClick={() => handleStarClick(1)}>1 <StarIcon fontSize="small" />+</Button>
            <Button color="primary" variant={stars === 2 ? "contained" : "outlined"} onClick={() => handleStarClick(2)}>2 <StarIcon fontSize="small" />+</Button>
            <Button color="primary" variant={stars === 3 ? "contained" : "outlined"} onClick={() => handleStarClick(3)}>3 <StarIcon fontSize="small" />+</Button>
            <Button color="primary" variant={stars === 4 ? "contained" : "outlined"} onClick={() => handleStarClick(4)}>4 <StarIcon fontSize="small" />+</Button>

            <Button variant={payType === "Cash" ? "contained" : "outlined"} color="secondary" onClick={() => handlePayType("Cash")}>
                Cash Only
            </Button>
            <Button variant={payType === "Online" ? "contained" : "outlined"} color="secondary" onClick={() => handlePayType("Online")}>
                Online Payment
            </Button>

            <Button variant="outlined" color="secondary" onClick={() => handlePayType(null)}>
                Any Payment
            </Button>


            <Button variant={sortType === 1 ? "contained" : "outlined"} color="primary" onClick={() => handleSort(1)}>
                Sort Low To High
            </Button>

            <Button variant={sortType === 2 ? "contained" : "outlined"} color="primary" onClick={() => handleSort(2)}>
                Sort High To Low
            </Button>

            <Button variant="contained" color="primary" onClick={handleModalOpen}>
                Add Restaurant
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal}>
                    <div className={classes.paper}>
                        <div>
                            <TextField onChange={handleDetails} name="title" required
                                id="outlined-required" label="Restaurant Name" variant="outlined" defaultValue="Restaurant" />
                            <TextField onChange={handleDetails} name="payment" required defaultValue="Cash" id="outlined-required" label="Cash or Online" variant="outlined" />

                            <TextField
                                defaultValue={3}
                                onChange={handleDetails}
                                name="star"
                                id="outlined-number"
                                label="Star"
                                type="number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <TextField onChange={handleDetails}
                                defaultValue="Indian, Chinese"
                                name="cuisines" required id="outlined-required" label="Cuisines (Separeate Using Commas)" variant="outlined" />
                            <TextField onChange={handleDetails}
                                defaultValue="30 Mins"
                                name="time" required id="outlined-required" label="Time to Deliver" variant="outlined" />

                            <TextField
                                defaultValue={1}
                                onChange={handleDetails}
                                name="reviews"
                                id="outlined-number"
                                label="Reviews"
                                type="number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div><div>
                            <TextField onChange={handleDetails} name="img" required id="outlined-required" label="Image" variant="outlined" />
                            <TextField
                                defaultValue={200}

                                onChange={handleDetails}
                                name="cost"
                                id="outlined-number"
                                label="Cost for One"
                                type="number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                defaultValue={1}

                                onChange={handleDetails}
                                name="votes"
                                id="outlined-number"
                                label="Votes"
                                type="number"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div>
                            <Button variant="contained" color="primary" onClick={handleAddRestaurant} >
                                Add Restaurant
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}