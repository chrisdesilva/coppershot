import React from 'react'
import { Card, Container, Grid, Image, List } from 'semantic-ui-react'
import martini from '../images/martini.jpg'

const Recipes = () => {
  return (
    <Container>
      <h2>Recipes</h2>
      <Image centered size="large" rounded src={martini} style={{marginBottom: '2rem'}} />
      <Card.Group centered>
        <Card>
          <Card.Content>
            <Card.Header>Prickly Pear Pink Lemonade</Card.Header>
              <List as ="ul">
                <List.Item as='li'>1 bottle of Finest Calls Prickly Pear Mix</List.Item>
                <List.Item as='li'>2 cans of frozen pink lemonade mix</List.Item>
                <List.Item as='li'>Add sugar to taste</List.Item>
                <List.Item as='li'>1 bottle of Copper Shot Shine</List.Item>
                <List.Item as='li'>Mix and serve</List.Item>
              </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Apple Pie</Card.Header>
              <List as ="ul">
                <List.Item as='li'>1/2 gallon of apple juice</List.Item>
                <List.Item as='li'>1/2 gallon of apple cider</List.Item>
                <List.Item as='li'>1 1/2 cups of sugar</List.Item>
                <List.Item as='li'>5 cinnamon sticks</List.Item>
                <List.Item as='li'>Bring ingredients to a boil, cool down, add 1 bottle of Copper Shot Shine</List.Item>
              </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Peach Cobbler</Card.Header>
              <List as ="ul">
                <List.Item as='li'>3 quarts of white grape peach juice</List.Item>
                <List.Item as='li'>1 2/3 cups of sugar</List.Item>
                <List.Item as='li'>1/2 cup of brown sugar</List.Item>
                <List.Item as='li'>29 oz. can of sliced peaches in heavy syrup</List.Item>
                <List.Item as='li'>5 cinnamonm sticks</List.Item>
                <List.Item as='li'>Bring ingredients to a boil, cool down, add 1 bottle of Copper Shot Shine</List.Item>
              </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Blood Orange Shine</Card.Header>
              <List as ="ul">
                <List.Item as='li'>1 bottle of Masters Blood Shine Mix</List.Item>
                <List.Item as='li'>1 bottle of Copper Shot Shine</List.Item>
              </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Wild Wild West</Card.Header>
              <List as ="ul">
                <List.Item as='li'>48 oz. bottle of cranberry juice</List.Item>
                <List.Item as='li'>1 bottle of Finest Calls Peach Mix</List.Item>
                <List.Item as='li'>1 bottle of Copper Shot Shine</List.Item>
              </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Watermelon Shine</Card.Header>
              <List as ="ul">
                <List.Item as='li'>1 bottle of Finest Calls Watermelon Mix</List.Item>
                <List.Item as='li'>1 bottle of Copper Shot Shine</List.Item>
              </List>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Sweet Heart Shine</Card.Header>
              <List as ="ul">
                <List.Item as='li'>64 oz. of pineapple juice</List.Item>
                <List.Item as='li'>1 cup of grenadine mix</List.Item>
                <List.Item as='li'>1 bottle of Copper Shot Shine</List.Item>
              </List>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  )
}

export default Recipes