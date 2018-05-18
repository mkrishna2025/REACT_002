import React, { Component } from 'react';

import FormCheckbox from './index.js';

export let FIELDS = {
    financialData : {
        id: "financialData",
        label: " Financail Data",
        values: [
            {label:"Total Sales",check:"",value:"totalSales"},
            {label:"Sales Trading",check:"",value:"salesTrading"}
        ],
        type: "checkbox",
        selectedValue: []
    }
}

export class Search extends React.Component {
    constructor(props) {
        super(props);
    }
   
    componentWillMount = () => {
        console.log(FIELDS, "fields")
        this.setState({ fieldMap: {} });
    }
    getData = () => {
        return this.state.fieldMap;
    }
    updateData = (key, value) => {
        console.log(key, value, "value")
        if (key && value) {
            this.state.fieldMap[key] = value;
        }
        debugger;
    }
    onSubmit = (event) => {
        console.log(this.state.fieldMap, "data");
    }

    render() {
        let financialData = FIELDS.financialData;
        return (
            <div>
                <div className="col-md-12" style={{ paddingTop: 10 }}>
                    <FormCheckbox {...financialData} updateData={this.updateData.bind(this)} />
                </div>                
                <div className="col-md-12">
                    <input type="button" class="btn btn-default submit-btn" value="Submit" onClick={this.onSubmit.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Search