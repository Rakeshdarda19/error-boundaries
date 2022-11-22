import React from "react";

class Error extends React.Component {
    state = {
        hasError: false
    }
    
    static getDerivedStateFromError(error){
        return {hasError: true }
    }

    render() {
        if(this.state.hasError){
            return <h3>Error: Image Not Found</h3> 
        }
        return this.props.children
    }
}

export default Error