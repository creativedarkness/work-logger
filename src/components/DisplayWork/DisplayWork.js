import React from 'react';
import './DisplayWork.css';

const DisplayWork = (props) => {

    const showLogs = props.logs.map((logs, idx) => {
        let time = props.convertMinutes(logs.minutesWorked);
        // let totalTime = 0;
        // totalTime += time;
        // console.log(totalTime);

        return (
            <div key={idx} id={logs.project} className="worktype">
                <h3 className="projectTitle">{logs.project}</h3>
                <h3 className="time">total</h3>
                <h3 className="time">{time}</h3><p className="descript">{logs.description}</p>
            </div>
        )
    })

    return (
        <div id="display">
            {showLogs}
        </div>
    )
}
export default DisplayWork