import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Departments() {
  return (
    <div className="courses-card">

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.theconversation.com/files/339504/original/file-20200603-130907-asv1yo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          alt="TAMIL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Arts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo suscipit, voluptate, necessitatibus odit esse, est id facere autem cum adipisci tempora! Beatae recusandae eligendi, deserunt aperiam totam exercitationem eius.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className='t-btn'>
          Details
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://img.freepik.com/free-vector/science-word-theme_23-2148540555.jpg?w=2000"
          alt="TAMIL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo suscipit, voluptate, necessitatibus odit esse, est id facere autem cum adipisci tempora! Beatae recusandae eligendi, deserunt aperiam totam exercitationem eius.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className='t-btn'>
          Details
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://glentreeacademy.com/wp-content/uploads/2020/12/pasted-image-0-e1608718231291.png"
          alt="TAMIL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Physical Education
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo suscipit, voluptate, necessitatibus odit esse, est id facere autem cum adipisci tempora! Beatae recusandae eligendi, deserunt aperiam totam exercitationem eius.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className='t-btn'>
          Details
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://static.businessworld.in/article/article_extra_large_image/1605951905_HycDYO_shutterstock_157577909.jpg"
          alt="TAMIL"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo suscipit, voluptate, necessitatibus odit esse, est id facere autem cum adipisci tempora! Beatae recusandae eligendi, deserunt aperiam totam exercitationem eius.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className='t-btn'>
          Details
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}