import React, { Component } from 'react';
import Form from '../Form/Form'
import DisplayWork from '../DisplayWork/DisplayWork'

class WorkLogger extends Component {
        constructor(props){
            super(props);
            this.state = {
                logs: [],
            }
        }

        // set the state with the values received from the form
        addLog = (newLog) => {
            this.setState({
                logs: [...this.state.logs, newLog]
            })
        }

        // convert the minutes to hours and minutes
        convertMinutes = (num) => {
            var hours = Math.floor(num/60);
            var minutes = num%60;
            return (hours + ":" + minutes);
        }

        render(){
            console.log(this.state);
            return (
                <div>
                    <h1>Work Logger</h1>

                    <Form 
                        logs={this.state.logs}
                        addLog={this.addLog}
                    />

                    <hr />

                    <DisplayWork 
                        logs={this.state.logs}
                        convertMinutes={this.convertMinutes}
                    />
                </div>
            )
        }
    }
    export default WorkLogger