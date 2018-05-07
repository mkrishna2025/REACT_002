import React, { Component } from 'react';
import MasterPage from '../../components/masterpage';

import ReactTable from "react-table";
import 'react-table/react-table.css'

export default class Students extends Component {
    constructor(props){
      super(props);
      var records = [
        { name: 'Ram Kumar', city: 'Hyderabad', batch: 'React-002'},
        { name: 'Rajeev', city: 'Patna', batch: 'React-002'},
        { name: 'Ujwala', city: 'Hyderabad', batch: 'React-002'},
        { name: 'Ravi Kumar', city: 'Hyderabad', batch: 'React-002'}
      ];
      this.state = {
        students: records,
        filteredStudents: records,
        columns: [
            { Header: 'Name', accessor: 'name' }, 
            { Header: 'City', accessor: 'city', style: { textAlign: 'center' } }, 
            { Header: 'Batch', accessor: 'batch' }
        ]
      }
    }

    onSearch(event){
        var str = event.target.value;
        var filteredItems = [];
        for(var student of this.state.students){
            if(student.name.toLowerCase().indexOf(str) >= 0){
                filteredItems.push(student);
            }
        }
        this.setState({
            filteredStudents: filteredItems
        });
    }
    render() {
      const userName = sessionStorage.getItem('userName');
      return (
        <div>
            Welcome {userName}
            <br/>
            <br/>
            <input type="text" onChange={this.onSearch.bind(this)}/> Search
            <ReactTable
              data={this.state.filteredStudents}
              columns={this.state.columns}
              minRows={2}
            />
            For More information, please refer <a href="https://github.com/react-tools/react-table"> React Table</a>
        </div>    
      );
    }
}