import P from 'prop-types';

export const Button = ({ text, onButtonClicked, disabled = false }) => {
  return (
    <button
      onClick={onButtonClicked}
      disabled={disabled}
      style={{
        width: '120px',
        height: '60px',
        padding: '12px',
        display: 'block',
        margin: '15px 0 0 10px',
        fontSize: '1em',
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClicked: P.func.isRequired,
  disabled: P.bool,
};
