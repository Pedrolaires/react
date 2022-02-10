import './styles.css';
import { PostCard } from '../PostCard';
export const Posts = (props) => (
  <div className="posts">
    {props.posts.map(element => (
      <PostCard key={element.id} title={element.title} body={element.body}
        cover={element.cover} id={element.id} />
    ))}
  </div>
);