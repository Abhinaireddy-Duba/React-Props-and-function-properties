
import PropsExample from "./PropsExample";

function FunPropExample(Props){
    
    console.log(Props)
    return(
        <div>
            <p>{Props.framework}</p>
            <p>{Props.year}</p>
        </div>
    )
    
} 

export default FunPropExample
