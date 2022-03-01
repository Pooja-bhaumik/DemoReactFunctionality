import React,{Component} from "react";
import ShoppageView from "./ShoppageView";
class ShoppageContainer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <ShoppageView/>
            </>
        )
    }
}
export default ShoppageContainer