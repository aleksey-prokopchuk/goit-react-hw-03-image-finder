import PropTypes from 'prop-types';
import css from './Button.module.css';

const { button } = css;

function Button({ title, onClick }) {
    return (
        <button className={button} type="button" onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};