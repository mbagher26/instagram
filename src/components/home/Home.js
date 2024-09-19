import React from "react";
import Header from "../header/Header";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './Home.css';
import { Stack } from "@mui/material";
import Comment from "../../Icons/Comment";
import {Post} from '../../data/PostData.js';
import Button from '@mui/material/Button';
import data from '../../data/Suggested';
import { Storys } from '../../data/Story.js';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;

    return <IconButton {...other} />;

})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                fontSize: '15px',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                display: 'none'
            },
        },
    ],
}));

function Home() {


    const [expanded, setExpanded] = React.useState({});


    const handleExpandClick = (id) => {
        setExpanded(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };


    return (
        <div className="home-container">
            <div className="home">
                <div className='story-home'>
                    <Header  data={Storys} width={75} height={75}/>
                </div>
                <div className="home">

                    {Post && Post.map(post =>

                        <Card key={post.id} sx={{ maxWidth: 450, margin: '30px' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={post.img}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreHorizOutlinedIcon />
                                    </IconButton>
                                }
                                subheader={post.city}
                                title={post.title}
                            />
                            <CardMedia
                                component="img"
                                height="380"
                                image={post.postImg}
                                alt="Paella dish"
                            />

                            <CardActions className="action" >
                                <Stack direction="row" >
                                    <IconButton>
                                        <FavoriteBorderOutlinedIcon sx={{ color: "black" }} />
                                    </IconButton>
                                    <IconButton>
                                        <Comment />
                                    </IconButton>
                                    <IconButton>
                                        <ShareIcon sx={{ color: "black" }} />
                                    </IconButton>
                                </Stack>

                                <Stack>
                                    <IconButton>
                                        <BookmarkBorderIcon sx={{ color: "black" }} />
                                    </IconButton>
                                </Stack>
                            </CardActions>

                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {post.caption1}
                                    <ExpandMore
                                        expand={expanded[post.id]}
                                        onClick={() => handleExpandClick(post.id)}
                                        aria-expanded={expanded[post.id]}
                                        aria-label="show more"
                                    >
                                        ...more
                                    </ExpandMore>
                                </Typography>
                            </CardContent>

                            <Collapse in={expanded[post.id]} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {post.caption2}
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {post.caption3}
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {post.caption3}
                                    </Typography>
                                    <Typography>
                                        {post.caption4}
                                    </Typography>
                                </CardContent>
                            </Collapse>

                        </Card>

                    )}



                </div>
            </div>

            <div className="sidebar-right">
                <div className="flex-row-space-between hover">
                    <div className="flex-row" style={{ width: '270px' }}>
                        <Avatar sx={{ marginRight: '12px' }} alt="mohammad_bagher" src="/Images/mohammad_bagher.jpg" />
                        <Typography variant="h6">mohammadbagher</Typography>
                    </div>
                    <Button size="small">Switch</Button>
                </div>
                <div className="flex-row-space-between ">
                    <Typography variant="h6">Suggested for you</Typography>
                    <Button size="small">See all</Button>
                </div>
                <div>
                    {data && data.map(item =>
                        <div key={item.id} className="flex-row-space-between hover" style={{ marginTop: '5px' }} >
                            <div className="flex-row" style={{ width: '270px' }}>
                                <Avatar sx={{ marginRight: '12px' }} alt={item.title} src={item.img} />
                                <Typography>{item.title}</Typography>
                            </div>
                            <Button size="small" color='secondary'>Follow</Button>
                        </div>

                    )}

                </div>
            </div>

        </div>
    );
}

export default Home;