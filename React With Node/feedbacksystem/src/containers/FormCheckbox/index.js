import React, { Component } from 'react';

export class FormCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            values: this.props.values || []
          };
    }
    componentWillMount = () => {
        this.setState({ value: this.props.selectedValue });
    }

    handleChange = (event) => {
        var newStatus = event.target.checked;
        var selectedCheckBoxValue = event.target.value;
        var items = this.state.values;
        items.forEach(item => {
            if(item.value == selectedCheckBoxValue){
                item.check = newStatus;
            }
        });
        this.setState({ values: items });
        this.props.updateData(this.props.id, items);
    }


    selectAll=( )=> {
        
        var newStatus = !this.state.isChecked;
        
        var items = this.state.values;

        items.forEach(item => item.check = newStatus);
        
        this.props.updateData(this.props.id, items);

        this.setState({ isChecked: newStatus, values: items });
    }

    render() {
        var handleChange = this.handleChange;
        var style = { paddingLeft: "0px" };
        return (<div className="form-group">
            <input type="checkbox" onChange={this.selectAll.bind(this)} checked={this.state.isChecked} value={this.state.isChecked}/><label>Select All</label>
            <label className="col-sm-2">{this.props.label}</label>
            <div className="col-sm-4">
                {this.state.values.map((item, index) => <div className="checkbox checkbox-inline" key={index} style={style}>
                    <label>
                        <input type="checkbox" checked= {item.check} value={item.value} onChange={handleChange.bind(this)}
                        />{item.label}
                    </label>
                </div>)}
            </div>
        </div>);
    }
}

export default FormCheckbox;