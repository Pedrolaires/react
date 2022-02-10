import P from 'prop-types';
import './styles.css';

export const Button = (props) => {
  return (
    <button disabled={props.disabled} className="button" onClick={props.onClick}>
      {' '}
      {props.text}{' '}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
