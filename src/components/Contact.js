import React from 'react'
import { Button, Container, Divider, Form, Grid } from 'semantic-ui-react'

const Contact = () => {
  return (
    <Container>
      <h2>Contact</h2>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Form name="coppershot" method="post" data-netlify="true">
              <Form.Input placeholder="Name" required/>
              <Form.Input placeholder="E-mail Address" required/>
              <Form.Input placeholder="Phone Number (optional)"/>
              <Form.TextArea 
                placeholder="Comments, questions, or notes"
                required
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

export default Contact