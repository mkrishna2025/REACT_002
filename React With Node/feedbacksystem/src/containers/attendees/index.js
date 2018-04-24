import React, { Component } from 'react';

import ReactTable from "react-table";
import 'react-table/react-table.css';

import { RingLoader } from 'react-spinners';


export default class Attendees extends Component {
    constructor(props){
      super(props);
      alert('constructor');
      this.state = {
        attendees: [],
        loading: false,
        tableDisplay: 'none',
        columns: [
            { Header: 'Name', accessor: 'Name' }, 
            { Header: 'Age', accessor: 'Age', style: { textAlign: 'center' } }, 
            { Header: 'Department', accessor: 'Department' },
            { Header: 'Gender', accessor: 'Gender' }
        ]
      }
    }
    componentWillMount(){
        alert('componentWillMount');
    }

    componentDidMount(){
        alert('componentDidMount');
        this.setState({ loading: true });
        fetch('http://trainingkit.azurewebsites.net/api/Users/GetAttendees')
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.success){
                //this.setState( { attendees: responseJson.data }) ;
                setTimeout(function() { this.setState( { attendees: responseJson.data, loading: false, tableDisplay: '' }); }.bind(this), 3000);
            }
        })
        .catch( exception => {
            debugger;
        });
    }

    componentWillUnmount(){
        alert('componentWillUnmount');
    }

    render() {
        alert('render');
        return (
            <div>
                Welcome to Attendees
                <br/>
                <br/>
                <RingLoader
                    color={'#123abc'} 
                    loading={this.state.loading} 
                />
                <div style={{ display: this.state.tableDisplay}}> 
                    <ReactTable
                    data={this.state.attendees}
                    columns={this.state.columns}
                    minRows={2}
                    />
                </div> 
            </div>    
        );
    }
}