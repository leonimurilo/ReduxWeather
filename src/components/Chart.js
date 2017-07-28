/**
 * Created by Leoni on 7/28/2017.
 */
import React, {Component} from "react";
import _ from "lodash";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default function (props) {
    if(props.data.indexOf() != -1){
        return (<p>Unavailable</p>)
    }

    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.unit}</div>
        </div>
    );
}