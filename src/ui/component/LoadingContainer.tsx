import {Spinner} from "react-bootstrap";

export default function LoadingContainer(){
    return(
        <div className="d-flex justify-content-center  align-items-center"
        style ={{height:"85vh"}}>
        <Spinner animation="border" role="status"/>
    </div>

    )
}