import React from "react";
import bear from  "./bear.jpg"
import flower from './flower.jpg'
import Images from "./image";
import Error from './error'
class Data extends React.Component {
    render() {
        return (
            <>
             <div>
              <Error>
              <Images image={bear} /> <br />
              <Images image={flower} /> <br />  
              <Images image= "NoImage" /> <br /> 
              </Error>
              </div>
            </>
        )
    }
}
export default Data