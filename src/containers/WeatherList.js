/**
 * Created by Leoni on 7/28/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component{
    constructor(props){
        super(props);
    }

    renderWeatherList(array){
        return array.map(function (cityData) {
            const name = cityData.city.name;
            const temps = cityData.list.map(weather => weather.main.temp - 273.15); // create an array of temperatures
            const pressures = cityData.list.map(weather => weather.main.preassure);
            const humidities = cityData.list.map(weather => weather.main.humidity);
            const {lon, lat} = cityData.city.coord; // get lon and lat from coord as lon and lat

            return (
                <tr key={name}>
                    <td><GoogleMap lon={lon} lat={lat}/></td>
                    <td><Chart data={temps} color="red" unit="°C"/></td>
                    <td><Chart data={pressures} color="black" unit="hPa"/></td>
                    <td><Chart data={humidities} color="blue" unit="%"/></td>
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
                    <th>Temperature (°C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
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