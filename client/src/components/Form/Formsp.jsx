import React, { Component } from 'react'
//import { Form, FloatingLabel } from 'react-bootstrap'
import { Form, Button, ButtonToolbar, Input } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import { Container } from 'react-bootstrap';
import './forms.css'


class Formsp extends Component {
  render() {
    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
    return (
      <div class="container mt-4 p-5 text-white rounded thisForm">
        <Container>
          <Form>
            <Form.Group controlId="name">
              <Form.ControlLabel>Nimi</Form.ControlLabel>
              <Form.Control name="name" />
              <Form.HelpText tooltip>Nimi on pakollinen</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Sähköposti</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText tooltip>Sähköposti on pakollinen</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="phone_number">
              <Form.ControlLabel>Puhelinnumero</Form.ControlLabel>
              <Form.Control name="phone_number" type="text" />
            </Form.Group>
            <Form.Group controlId="industry">
              <Form.ControlLabel>Toimiala</Form.ControlLabel>
              <Form.Control name="industry" type="text" />
            </Form.Group>
            <Form.Group controlId="textarea">
              <Form.ControlLabel>Lisätietoja</Form.ControlLabel>
              <Form.Control rows={5} name="textarea" accepter={Textarea} />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="ghost" color="green">Lisää uusi yhteystieto</Button>
                <Button appearance="ghost" color="red">Peruuta</Button>
              </ButtonToolbar>
            </Form.Group>  
          </Form>
        </Container>
      </div>
    )
  }
}

export default Formsp