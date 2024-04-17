import './my-css/single.css'
function Single(props){
    const singleMes = props.singleMes
    const imgsrc = singleMes.imgsrc
    const name = singleMes.name
    return (
        <div className="imgContiner">
            <img src={imgsrc} alt="" />
            <div className = "thingName "> {name} </div>
        </div>
    )

}

export default Single;