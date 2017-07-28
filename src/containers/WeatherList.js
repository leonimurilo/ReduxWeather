/**
 * Created by Leoni on 7/28/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";

class WeatherList extends Component{
    constructor(props){
        super(props);
    }

    renderWeatherList(array){
        return array.map(function (cityData) {
            return (
                <tr {cityData.city.name}>
                    <td>{cityData.city.name}</td>
                    <td>{cityData.city.name}</td>
                </tr>
            )
        })
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.renderWeatherList(this.props.weather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);