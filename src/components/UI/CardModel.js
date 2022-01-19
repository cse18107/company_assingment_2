import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const CardModel = (props) =>{
    return (
        <Card sx={{ maxWidth: 285, height:600, boxShadow:"10px 10px 30px rgba(0,0,0,0.5)",marginBottom:"70px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              // height="450"
              // width="150"
              image={props.show.image.medium}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.show.name}
              </Typography>

            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/${props.show.id}`}>
              Details
            </Link>
          </CardActions>
        </Card>
      );
}

export default CardModel;