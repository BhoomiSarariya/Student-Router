import React from 'react';
import './App.css';
import data from './students_data.json';
import { Route } from "react-router-dom";
import { Button } from 'react-bootstrap'
import User from './User';

class App extends React.Component {
  state = {
    user_info: [],
    statusInfo: '',
    statusMarks: ''
  }
  render() {
    return (<div className="container main">
      <div className="row">
        {/* {console.log(this.props.match)} */}
        <div className="col-md-4">
          <ul>
            <h4>Student List</h4>
            {
              data.map((item, index) => (<>
                <Button key={index} className="col-md-12" variant="secondary"
                  onClick={() => this.props.history.push(`/user/${item.id}`)}>
                  {item.first_name} {item.last_name}
                </Button><br />
              </>))
            }
          </ul>
        </div>
        <div className="col-md-8">
          <Route path="/user/:id" component={User} />

        </div>
      </div>
    </div>
    )
  }
}

export default App;
