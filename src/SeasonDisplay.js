import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text:"LET'S HIT THE BEACH",
        iconName: "sun"
    },
    winter:{
        text:"BURR ..IT IS COLD..!!!",
        iconName:'snowflake'
    }
}

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? "winter" : 'summer'
    }

}
const SeasonDisplay = (props) => {
    
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'Winter' ? 'Burr.. It is Chilly' : 'Lets hit the Beach';
    // const icon = season === 'Winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season];
    return(
        <div className=
        {`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon massive icon-right`}></i>
        </div>
        
    );
}

export default SeasonDisplay;