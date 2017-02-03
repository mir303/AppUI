import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './Common';


class Screen2 extends Component {

  render() {
     return (
             <Card>
            <CardSection>
                        <Text>please sign in </Text>
            </CardSection>
            <CardSection>
                        <Button>
                               signup
                        </Button>
           </CardSection>
            <CardSection>
                        <Button>
                               signin
                         </Button>
             </CardSection >


             </Card>


       );
  }

}
 export default Screen2;
