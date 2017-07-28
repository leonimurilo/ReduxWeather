/**
 * Created by Leoni on 7/28/2017.
 */
import React, {Component} from "react";

class GoogleMap extends Component {

    // happens after render()
    componentDidMount(){

        //first argument is the html element that google maps will use to render
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render(){
        return (
            <div ref="map"></div>
        );
    }
}

export default GoogleMap;