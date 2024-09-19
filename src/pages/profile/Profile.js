import Biography from '../../components/bio/Biography';
import Header from '../../components/header/Header';
import './Profile.css';
import { BigelowStory } from './../../data/Story.js';
import { Link, Outlet } from 'react-router-dom';
import PostIcon from '../../Icons/PostIcon.js';
import ReelsIcons from '../../Icons/ReelsIcon.js';
import TaggedIcon from '../../Icons/TaggedIcon.js';


function Profile() {
    return (
        <div className='profile-container'>
            <Biography />
            <div className='story-biglowtea'>
                <Header  data={BigelowStory} width={90} height={90}/>
            </div>
            <div className='post-container'>
                <div className='post-header'>
                    <Link className='link' to='posts'>
                    <PostIcon />
                    POSTS</Link>
                    <Link className='link' to='reels'>
                    <ReelsIcons width={12} height={12} />
                    REELS</Link>
                    <Link className='link' to='tagged'>
                    <TaggedIcon />
                    TAGGED</Link>
                </div>
                <div className='posts'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Profile;