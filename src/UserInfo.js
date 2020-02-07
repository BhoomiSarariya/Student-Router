import React from 'react';
import './App.css';
import data from './students_data.json';
import { Card, Table } from 'react-bootstrap'
import { Redirect } from 'react-router';
class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props
    }
  }
  render() {
    const { params } = this.props.match;
    const { url } = this.props.match;
    const id=params.id;    
    let d = data.find(data => id === JSON.stringify(data.id));
    const { first_name, last_name, email, mother, father, DOB, standard, gender} =d;
    const { maths, science, history, english } =d;
    if (url === `/user/${id}/info`) {return(<>
        <div className="container">
          <Card className="text-center">
            <Card.Header>{first_name} {last_name}</Card.Header>
            <Card.Body>
              <Card.Text>Date Of Birth:{DOB}</Card.Text>
              <Card.Text>Email:{email}</Card.Text>
              <Card.Text>Father:{father}</Card.Text>
              <Card.Text>Mother:{mother}</Card.Text>
              <Card.Text>Standard:{standard}</Card.Text>
              <Card.Text>Gender:{gender}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </div>
      </>
      )
    }
    else if (url === `/user/${id}/marks`) 
    {return(<>
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="3">Name: {first_name} {father} {last_name}</th>
                <th>Standard: {standard}</th>
              </tr>
              <tr>
                <th>Maths</th>
                <th>History</th>
                <th>Science</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{maths}</td>
                <td>{history}</td>
                <td>{science}</td>
                <td>{english}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>)
    }
    else{
      return(<>
          <Redirect to="/page" />
      </>)
    }
  }  
}
export default UserInfo;