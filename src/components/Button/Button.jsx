import css from './Button.moule.css';

const { button } = css;

function Button({ title, onClick }) {
    return (
        <button className={button} type="button" onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;