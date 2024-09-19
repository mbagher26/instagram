import ReelsIcons from "../../Icons/ReelsIcon";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './Post.css';

function Post({ BiglowteaPost, width, height }) {
    return (
        <>

                {BiglowteaPost && BiglowteaPost.map(item => (
                    <div className="post">
                        <img style={{ width: width, height: height }} key={item.id} src={item.img} alt={item.title} />
                        <div className="post-icon">
                            {item.icon === 'shop' && <LocalMallIcon  />}
                            {item.icon === '' && null}
                            {item.icon === 'reels' && <ReelsIcons  width={18} height={18} />}
                        </div>
                    </div>
                ))}
            
        </>
    );
}

export default Post;