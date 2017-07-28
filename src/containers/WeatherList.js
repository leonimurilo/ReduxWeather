/**
 * Created by Leoni on 7/28/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component{
    constructor(props){
        super(props);
    }

    renderWeatherList(array){
        return array.map(function (cityData) {
            const name = cityData.city.name;
            const temps = cityData.list.map(weather => weather.main.temp); // create an array of temperatures
            console.log(temps);
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>
                        <Sparklines height={120} width={180} data={temps}>
                            <SparklinesLine color="red"/>
                        </Sparklines>
                    </td>
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