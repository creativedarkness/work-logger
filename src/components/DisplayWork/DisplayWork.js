import React from 'react';
import './DisplayWork.css';

const DisplayWork = (props) => {

    // calc total time
    // let totalTime = 0;
    // totalTime += time;
    // console.log(totalTime);

    const showPersonal = props.logs.map((logs, idx) => {
        let time = props.convertMinutes(logs.minutesWorked);
        // console.log(logs.project);
        if (logs.project === "personal") {
            return (
                <div key={idx}>
                    {/* <h3 className="projectTitle"> Peronsal</h3>
                    <h4 className="time">total</h4> */}
                    <h3 className="time">{time}</h3>
                    <p className="descript">{logs.description}</p>
                </div>
            )
        }
        return null;
    })

    const showWork = props.logs.map((logs, idx) => {
        let time = props.convertMinutes(logs.minutesWorked);
        // console.log(logs.project);
        if (logs.project === "work") {
            return (
                <div key={idx}>
                    <h3 className="time">{time}</h3>
                    <p className="descript">{logs.description}</p>
                </div>
            )
        }
        return null;
    })

    return (
        <div id="display">
            <div className="worktype">
                <h3 className="projectTitle"> Peronsal</h3>
                <h4 className="time">total</h4>
                {showPersonal}
            </div>
            <div className="worktype">
                <h3 className="projectTitle"> Work</h3>
                <h4 className="time">total</h4>
                {showWork}
            </div>
        </div>
    )
}
export default DisplayWork