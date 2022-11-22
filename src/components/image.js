
import React from "react";

class Images extends React.Component {
    render() {
        if(this.props.image === "NoImage"){
            throw new Error("Image Not Found")
        }
        return (
            <>
         <img src= {this.props.image} alt="My image" width="300px"/>
         </>
        )
    }
}
export default Images