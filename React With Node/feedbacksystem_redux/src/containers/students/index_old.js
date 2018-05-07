import React, { Component } from 'react';
import MasterPage from '../../components/masterpage';

import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class Students extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: [],
        columns: [{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
        }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
        }]
      }
    }
    
    loadData(){
      var records = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      },
      {
        name: 'Karthik Kumar',
        age: 25,
        friend: {
          name: 'Tanner Linsley',
          age: 25,
        }
      }
    ];

      this.setState({
        data: records
      });
    }

    render() {
      return (
        <MasterPage>
            Welcome to Students
            <ReactTable
              data={this.state.data}
              columns={this.state.columns}
              minRows={2}
            />
            <input type="button" onClick={this.loadData.bind(this)} value="Refresh"/>
        </MasterPage>    
      );
    }
}