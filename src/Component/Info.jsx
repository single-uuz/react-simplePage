import Single from "./Single"
import './my-css/info.css'
function Info(props){
    
    const infoMes = props.infoMes


    const infoMesList = infoMes.mermber.map(
        (item) => <Single  singleMes = {item} key = {item.id}> </Single>   
    )

    return (
        <div className="continer">

            <div className="top">{infoMes.infoName}</div>
            <div className="shopThing">
                    {
                        infoMesList
                    }                             
            </div>
        </div>
    )
}

export default Info;