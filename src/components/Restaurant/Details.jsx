
import { v4 as uuid } from 'uuid'
import './Details.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import '@fontsource/roboto';


const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 200,
  },

});

export default function Details({ data }) {
  const classes = useStyles();
  // console.log("check", data);
  return (
    data.map((item) => {
      if (!item.id) {
        item.id = uuid()
      }
      return (

        <div key={item.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.img}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>

                <div className="flexBox">



                  <div className="div1">
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.cuisines}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      Accepts {item.payment} Payment
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      Cost for one: Rs.{item.cost}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      Delivery Time: {item.time}
                    </Typography>
                  </div>



                  <div className="div2">

                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.star} <StarIcon fontSize="small" />
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.reviews} Reviews
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.votes} Votes
                    </Typography>



                  </div>
                </div>

              </CardContent>
            </CardActionArea>
            <div className="button">
              <CardActions>

                <Button className={classes.button} variant="contained" color="primary">
                  Order Online
                </Button>
              </CardActions>
            </div>

          </Card>
        </div>
      )
    })
  )
}
