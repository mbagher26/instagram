import Post from "../../components/post/Post";
import {BiglowteaPost} from '../../data/PostData.js';

function Posts() {
    return (
        
           <Post BiglowteaPost={BiglowteaPost} width={300} height={300} />
        
    );
}

export default Posts;