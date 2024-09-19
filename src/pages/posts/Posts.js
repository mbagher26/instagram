import Post from "../../components/post/Post";
import {BiglowteaPost} from '../../data/PostData.js';

function Posts() {
    return (
        <div>
           <Post BiglowteaPost={BiglowteaPost}/>
        </div>
    );
}

export default Posts;