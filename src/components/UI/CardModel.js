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
                Name: {props.show.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Language:  {props.show.language}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Rating:  {props.show.rating.average}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/${props.show.id}`} style={{
              textDecoration:"none",
              fontSize:"1.1rem",
              padding:"4px",
              backgroundColor:"rgba(4, 179, 4, 0.637)",
              color:"white",
              borderRadius:"3px"
            }}>
              Details
            </Link>
          </CardActions>
        </Card>
      );
}

export default CardModel;