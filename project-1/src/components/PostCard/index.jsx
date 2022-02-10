import P from 'prop-types';
import './styles.css';

export const PostCard = (props) => (
  <div className="post">
    <img src={props.cover} alt={props.title} />
    <div className="post-content">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
