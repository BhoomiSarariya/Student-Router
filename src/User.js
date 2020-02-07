import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import data from './students_data.json';
import { Link, Switch, Route } from "react-router-dom";
import UserInfo from './UserInfo';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    }

  }
  handleClickInfo = (p1) => {
    this.setState({
      statusEdit: true,
      user_info: p1
    })
  }
  handleClick = (p1) => {
    this.setState({
      statusMarks: true,
      user_info: p1
    })
  }
  render() {
    const { params } = this.props.match;
    const id = params.id;
    let d = data.find(data => id === JSON.stringify(data.id));
    const { first_name, last_name } = d;
    return (<>
      <div className="container col-md-12 user">
        <h4>Student Detail</h4>
        <h3>{first_name} {last_name} {id}</h3>
        <Link to={`/user/${id}/info`}><Button onClick={() => this.handleClickInfo(d)}>Student Info</Button></Link>
        <Link to={`/user/${id}/marks`}><Button onClick={() => this.handleClick(d)}>Student Marks</Button></Link>
        <br /><br /><br />
      </div>
      <Switch>
        <Route path={`/user/:id/info`} component={UserInfo} />
        <Route exact path={`/user/:id/marks`} component={UserInfo} />}/>
        </Switch>
      {/* render={(props) => <UserInfo status={this.state.status}
         render={(props) => <UserInfo status={this.state.status} user_info={this.props.user_info} {...props}  */}
    </>
    )
  }
}
export default User;