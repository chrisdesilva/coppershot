import React from 'react'
import { Button, Container, Divider, Form, Grid } from 'semantic-ui-react'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component {

  state = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "coppershot", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    })
  };

  handleChange = e => this.setState( { [e.target.name]: e.target.value });

  render() {
    const { name, email, phoneNumber, message } = this.state
    return (
      <Container>
        <h2>Contact</h2>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form onSubmit={this.handleSubmit} name="coppershot" method="post" data-netlify="true">
                <Form.Input placeholder="Name" name="name" value={name} onChange={this.handleChange} required/>
                <Form.Input placeholder="E-mail Address" name="email" value={email} onChange={this.handleChange} required/>
                <Form.Input placeholder="Phone Number (optional)" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                <Form.TextArea 
                  placeholder="Comments, questions, or notes"
                  name="message"
                  required
                  value={message}
                  onChange={this.handleChange}
                />
                <Button type="submit" secondary>Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={8} style={{textAlign: 'right'}}>
              <h3>Copper Shot Distillery</h3>
              <p>809 Main Street</p>
              <p>Bastrop, TX 78602</p>
              <p>512-412-6414</p>
              <Divider />
              <p>Mon-Thurs 12 - 9 PM</p>
              <p>Fri-Sat 11 AM - 10 PM</p>
              <p>Sun 12 - 5 PM</p>
              <Divider />
              <p>Call to find out if Distiller is present for a tour.</p>
              <p>Tours run from 1 - 5 PM on the hour.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

export default Contact