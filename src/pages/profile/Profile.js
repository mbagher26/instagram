import Biography from '../../components/bio/Biography';
import Header from '../../components/header/Header';
import './Profile.css';
import { BigelowStory } from './../../data/Story.js';


function Profile() {
    return (
        <div className='profile-container'>
            <Biography />
            <div className='story-biglowtea'>
                <Header  data={BigelowStory} width={90} height={90}/>
            </div>
            <div className='post-container'>
                <h1>post-container</h1>
            </div>
        </div>
    );
}

export default Profile;