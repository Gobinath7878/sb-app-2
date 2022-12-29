import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Notice() {
  return (
    <div className='notice-card'>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2148989256.jpg?w=2000"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports Day
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo fugit veritatis sunt suscipit, fuga exercitationem quia aliquid numquam aperiam perferendis neque, magnam sint quo quas? Fugit consequuntur alias quasi error?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='t-btn'>Share</Button>
        <Button size="small" className='t-btn'>Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://dpirs.org/avatoagn/2021/02/event1.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Quiz Events
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo fugit veritatis sunt suscipit, fuga exercitationem quia aliquid numquam aperiam perferendis neque, magnam sint quo quas? Fugit consequuntur alias quasi error?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='t-btn'>Share</Button>
        <Button size="small" className='t-btn'>Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://cdn.cdnparenting.com/articles/2021/02/23135728/1913572111.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Science day
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo fugit veritatis sunt suscipit, fuga exercitationem quia aliquid numquam aperiam perferendis neque, magnam sint quo quas? Fugit consequuntur alias quasi error?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='t-btn'>Share</Button>
        <Button size="small" className='t-btn'>Learn More</Button>
      </CardActions>
    </Card>

    
    </div>
  );
}