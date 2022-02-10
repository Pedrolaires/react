import P from 'prop-types';
import './styles.css';
import { PostCard } from '../PostCard';

export const Posts = (props) => (
  <div className="posts">
    {props.posts.map((element) => (
      <PostCard key={element.id} title={element.title} body={element.body} cover={element.cover} id={element.id} />
    ))}
  </div>
);

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      body: P.string.isRequired,
      cover: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
