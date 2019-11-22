import React, { Component } from 'react';
import { Users } from '../../utils/mock-data'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container, FormGroup} from 'reactstrap';
import './Table.css'

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users,
    }
  }

  /* ALIVE */

  getAliveColor = alive => alive ? 'light' : 'secondary';
  getAlive = alive => alive ? 'Si' : 'No';
  getAliveButtonType= alive => alive ? 'danger' : 'success';
  getAction = alive => alive ? 'Matar' : 'Revivir';
  handlerToggleAlive = (user) => {
    const a = this.state.Users.findIndex(e => e.id === user.id);
    return (event) => {
      const uA = this.state.Users;
      uA[a].alive = !uA[a].alive;
      this.setState({
        user: uA,
      })
    }
  }
  
  /* RING */

  getActionRing = ring => ring ? 'Sacar Anillo' : 'Colocar Anillo';
  getRingButtonType= ring => ring ? 'info' : 'warning';
  handlerToggleRing = (user) => {
    const r = this.state.Users.findIndex(e => e.id === user.id);
    return (event) => {
      const uR = this.state.Users;
      uR[r].ring = !uR[r].ring;
      this.setState({
        user: uR,
      })
    }
    
  }

  render() {
    return (
      <Container>
        <Row>
          { /* COMENTARIO */ }
          {this.state.Users.map(elm => (
            <Col sm="3">
              <FormGroup>
                <Card color={this.getAliveColor(elm.alive)} body key="{elm.id}">
                  <CardImg className="card-img-custom" src="https://via.placeholder.com/150"/>
                  <CardBody>            
                    <CardTitle>ID: {elm.id}</CardTitle>
                    <CardSubtitle>Nombre: {elm.name}</CardSubtitle>
                    <CardText>
                      <p>¿Vivo?: {this.getAlive(elm.alive)}</p>
                    </CardText>
                    <div className="text-center">
                      <Button className="btn-bs-custom" color={this.getAliveButtonType(elm.alive)} onClick={this.handlerToggleAlive(elm)}>{this.getAction(elm.alive)}</Button>
                      <Button className="btn-bs-custom" color={this.getRingButtonType(elm.ring)} onClick={this.handlerToggleRing(elm)}>{this.getActionRing(elm.ring)}</Button>
                    </div>
                  </CardBody>
                </Card>
              </FormGroup>
            </Col>   
          ))}
        </Row>
      </Container>
    );
  }
}

export default Table;