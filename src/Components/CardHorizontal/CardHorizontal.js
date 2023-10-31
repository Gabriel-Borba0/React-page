import './CardHorizontal.css'

const CardHorizontal = ({path, text, orientation}) => {
    const cardStyle = {
        flexDirection: orientation ? "row-reverse" : "",
    };
    return (
        <div className="cardHorizontal" style={cardStyle}>
            <img src={path}/>
            
            <div className="text">
                {text}
            </div>
        </div>
    )
}

export default CardHorizontal;