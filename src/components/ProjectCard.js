import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectCard(props) {
    console.log(props.projectData)

    return (
        <Card key={props.projectData.id} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.projectData.image}
                alt={props.projectData}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.projectData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.projectData.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.projectData.repo}>Repo</Button>
                <Button size="small" href={props.projectData.livePage}>Live Project</Button>
            </CardActions>
            </Card>
    )
}

export default ProjectCard;