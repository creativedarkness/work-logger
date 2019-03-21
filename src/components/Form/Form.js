import React, { Component } from 'react';


class WorkLogger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            description: "",
            minutesWorked: 0,
            vaildDescript: false,
            vaildMinutes: false,
            minutesBlank: false,
            // canSubmit: false,
        }
    }

    // validation conditons
    validate = (props) => {
        var descript;
        var minutes;

        // check to if the description is more than 5 chars long
        descript = this.state.description.length < 5 ? false : true;

        // check to see if the minutes enter is a number between 0 and 240
        minutes = this.state.minutesWorked.value < 240 && this.state.minutesWorked.value > 0 ? false : true;

        this.setState({
            vaildDescript: descript,
            vaildMinutes: minutes,
        });
    }

    // update the state and validate the input
    handleChange = (e) => {
        // console.log('Name: ', e.target.name);
        // console.log("Value: ", e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.validate())
    }

    // send the vlaues to the addLog function
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLog({
            project: this.state.project,
            description: this.state.description,
            minutesWorked: this.state.minutesWorked
        })
        console.log("logs submitted")
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="project">Project</label>
                    <select name="project" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </select>
                    <br />
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    {!this.state.vaildDescript ? <span>Description must be atleast 5 characters</span> : null}
                    <br />

                    <label htmlFor="minutesWorked">Minutes</label>
                    <input type="text" name="minutesWorked" onChange={this.handleChange} />
                    {!this.state.vaildMinutes ? <span>Please enter a number between 0 and 240</span> : null}
                    <br />

                    <input type="submit" value="Add" />
                </form>

            </div>
        )
    }
}
export default WorkLogger