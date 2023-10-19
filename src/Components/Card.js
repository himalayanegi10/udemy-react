import './Card.css';

function Card(props) {
    const mergedClass = 'card ' + props.className;
    return (
        <div className={mergedClass}>
            {props.children}
        </div>
    );
}

export default Card;