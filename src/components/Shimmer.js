import React, {Component} from "react";
// import Shimmer from "react-shimmer-effect";


export class Shimmer extends Component {
    render() {
        return(
            <div className="container">
                <div><h3><center>Looking for great news near you...</center></h3></div>
                <div className="container wrapper">
                    <div className="img_placeholder placeholder row box-1-load blink"></div>
                    <div className="row box-2-load blink"></div>
                    <div className="row box-3-load blink"></div>
                    <div className="row box-4-load blink"></div>
                    <div className="row box-5-load blink"></div>
                </div>
            </div>
        )
    }
}

export default Shimmer;
