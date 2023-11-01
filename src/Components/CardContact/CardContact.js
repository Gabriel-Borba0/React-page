import './CardContats.css'

const CardContato = ({path, text, orientation}) => {
    const cardStyle = {
        flexDirection: orientation ? "row-reverse" : "",
    };
    return (
        <div className="cardContato" style={cardStyle}>
            <img src={path} alt='img-card'/>
            
            <div className="text">
                {text}
            </div>
        </div>
    )
}
export default CardContato;