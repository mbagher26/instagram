import React, { useCallback, useState } from "react";
import ReelsIcons from "../../Icons/ReelsIcon";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Comment from "../../Icons/Comment";
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Messages from "../../Icons/Messages";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, Tooltip } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './Post.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function Post({ BiglowteaPost, width, height }) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [open, setOpen] = React.useState(false);
    const [isOneHover, setIsOneHover] = useState(false);
    const [isTwoHover, setIsTwoHover] = useState(false);
    const isBothLeave = !isOneHover && !isTwoHover;
    const [display, setDisplay] = useState(false);
    const [hoveredPostId, setHoveredPostId] = useState(null);



    const handelMouseEnter = (postId) => {
        setHoveredPostId(postId);
    }

    const handelMouseLeave = () => {
        setHoveredPostId(null);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {BiglowteaPost && BiglowteaPost.map(item => (
                <div onClick={handleClickOpen} className="post">
                    <div
                        onMouseEnter={() => handelMouseEnter(item.id)}
                        onMouseLeave={handelMouseLeave}
                    >
                        <div className="post-circle"

                        ></div>
                        {hoveredPostId === item.id &&
                            <img onClick={handleClickOpen} className="img-hover" src="/Images/Limone tea.jpg" />
                        }
                    </div>
                    <img style={{ width: width, height: height }} key={item.id} src={item.img} alt={item.title} />
                    <div className="post-icon">
                        {item.icon === 'shop' && <LocalMallIcon />}
                        {item.icon === '' && null}
                        {item.icon === 'reels' && <ReelsIcons width={18} height={18} />}
                    </div>
                </div>
            ))}

            <Dialog onClose={handleClose} open={open}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'fixed',
                        top: '10px',
                        right: '10px',
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <Slider {...settings}>
                    <DialogContent>
                        <div className="dialog-content">
                            <div className="content">
                                <Tooltip title="Limone tea" className="content-tooltip">
                                </Tooltip>
                                <img src="/Images/cup.jpg" alt="cup" />
                                <Link to="/shop" className="shop-link">Veiw shop <KeyboardArrowRightIcon /></Link>
                            </div>
                            <div className="description">
                                <div className="header">
                                    <div className="header-bio">
                                        <img alt="bigelow" src="/Images/bigelow.jpg" />
                                        <div className="header-content">
                                            <div className="header-title">
                                                <a>bigelowtea</a>
                                                <svg aria-label="Verified" className="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <IconButton aria-label="more-header" >
                                        <MoreHorizIcon className="icon-more-header" />
                                    </IconButton>
                                </div>
                                <div className="detail-desc">
                                    <div className="caption">
                                        <div>
                                            <img src="/Images/bigelow.jpg" alt="bigelowtea" />
                                        </div>
                                        <div className="caption-detail">
                                            <p className="caption-text"><span className="span">biglowtea
                                                <svg aria-label="Verified" className="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>

                                            </span>
                                                When life gives you lemons... drink more tea ☕ Take 20% off all Bigelow teas featuring lemon sourced from a family farm in California. Stock up on your favorites and discover new blends. Link in bio to shop the lemony goodness🍋
                                            </p>
                                        </div>
                                    </div>
                                    <div className="caption-link">
                                        <a href="#">#biglowtea</a>
                                        <a href="#">#limon</a>
                                        <a href="#">#tealove</a>
                                        <a href="#">#teatime</a>
                                    </div>
                                    <div className="caption-date">
                                        <span>2d</span>
                                    </div>

                                    <div className="comment-container">
                                        <div className="comment">
                                            <img src="/Images/noel.jpg" alt="noel" />
                                            <div className="comment-detail">
                                                <div className="comment-text">
                                                    <h3>pet_noel_</h3>
                                                    <div>💛💛💛🍋</div>
                                                </div>
                                                <div className="comment-button">
                                                    <a>5d</a>
                                                    <div>1 like</div>
                                                    <div>Reply</div>
                                                    <div><MoreHorizIcon /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <FavoriteBorderOutlinedIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-container">
                                    <div className="footer">
                                        <div className="foooter-icon">
                                            <FavoriteBorderOutlinedIcon />
                                            <Comment />
                                            <Messages />
                                        </div>
                                        <BookmarkBorderIcon />

                                    </div>
                                    <h5>36 likes</h5>
                                    <p>5 days ago</p>
                                </div>
                                <div className="add-comment-container">
                                    <SentimentSatisfiedOutlinedIcon />
                                    <input className="comment-input" placeholder="Add a comment..." />
                                </div>

                            </div>
                        </div>
                    </DialogContent>
                    <DialogContent>
                        <div className="dialog-content">
                            <div className="content">
                                <div
                                    onMouseEnter={() => setIsOneHover(true)}
                                    onMouseLeave={() => setIsOneHover(false)}
                                    className="one">1</div>

                                <div
                                    onMouseEnter={() => setIsTwoHover(true)}
                                    onMouseLeave={() => setIsTwoHover(false)}

                                    className="two">2</div>
                                <img src="/Images/cup.jpg" alt="cup" />
                            </div>
                            <div className="description">
                                <div className="header">
                                    <div className="header-bio">
                                        <img alt="bigelow" src="/Images/bigelow.jpg" />
                                        <div className="header-content">
                                            <div className="header-title">
                                                <a>bigelowtea</a>
                                                <svg aria-label="Verified" className="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <IconButton aria-label="more-header" >
                                        <MoreHorizIcon className="icon-more-header" />
                                    </IconButton>
                                </div>

                                <div className="body">
                                    <div className="body-img">
                                        <img className={`img-default ${isOneHover && 'img-on'} ${isTwoHover && 'img-off'}`} src="/Images/cup.jpg" alt="cup" />
                                        <img className={`img-default ${isTwoHover && 'img-on'} ${isOneHover && 'img-off'}`} src="/Images/cup.jpg" alt="cup" />
                                    </div>
                                    <div className="body-desc">
                                        <p className="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogContent>
                        <div className="dialog-content">
                            <div className="content">
                                <img src="/Images/cup.jpg" alt="cup" />
                            </div>
                            <div className="description">
                                <div className="header">
                                    <div className="header-bio">
                                        <img alt="bigelow" src="/Images/bigelow.jpg" />
                                        <div className="header-content">
                                            <div className="header-title">
                                                <a>bigelowtea</a>
                                                <svg aria-label="Verified" className="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <IconButton aria-label="more-header" >
                                        <MoreHorizIcon className="icon-more-header" />
                                    </IconButton>
                                </div>

                                <div className="post-show">
                                    {BiglowteaPost && BiglowteaPost.map(item =>
                                        <div key={item.id} className="">
                                            <img style={{ width: '208px', height: '200px', margin: '4px 0' }}  src={item.img} alt={item.title} />
                                            <div>
                                                <p>{item.title}</p>
                                                <button>buy</button>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Slider>
            </Dialog>
        </>
    );
}

export default Post;