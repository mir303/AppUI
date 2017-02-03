import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Tabs } from './Common';
import { emailChanged, passwordChanged, loginUser } from '../Actions';

class Screen3 extends Component {

  onEmaiChange(text) {
   this.props.emailChanged(text);
    }
     onPasswordChange(text) {
    this.props.passwordChanged(text);
     }
    onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
    }

 render() {
    return (

    <Card>
    <CardSection>
    <Tabs>
    signin
    </Tabs>
    <Tabs>
    signup
    </Tabs>
    </CardSection>
    <CardSection>
     <Input
      label="email"
      placeholder="email@gmail.com"
      onChangeText={this.onEmaiChange.bind(this)}
      value={this.props.email}
     />
     </CardSection>
      <CardSection>
      <Input
        secureTextEntry
       label="password"
       placeholder="password"
       onChangeText={this.onPasswordChange.bind(this)}
       value={this.props.password}
      />
      </CardSection>
      <Text style={styles.errorTextStyle} />


      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
      Login
      </Button>

      </CardSection>
    </Card>

          );
   }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = state => {
   return {
     email: state.auth.email,
     password: state.auth.password,
     error: state.auth.error
   };
 };

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Screen3);
