/**
 * Created by Leoni on 7/27/2017.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index"

class SearchBar extends Component{
    constructor(props){
        super(props);

        //setting the component state
        this.state = {
            term: ""
        };

        // binding context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term); // pass the component state (not the app state)
        this.setState({term: ""})
    }

    render(){
        return (
            <form className="input-group"
                  onSubmit={this.onFormSubmit}
            >
                <input placeholder="Type your city"
                       className="form-control"
                       value={this.state.term}
                       onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}


// will make available fetchWeather actionCreator in props of this container
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

// don't need any state. Just care about firing actions
export default connect(null, mapDispatchToProps)(SearchBar)