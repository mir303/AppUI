import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, Button, Tabs } from './Common';
import { createUser, saveUserDetails } from '../Actions/CreateUser';

class Screen4 extends Component {

 onButtonPress() {
  const { firstname, username, password, middlename, lastname } = this.props;
  this.props.saveUserDetails({ firstname, username, password, middlename, lastname });
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
                     value={this.props.username}
                     onChangeText={text => this.props.createUser({ prop: 'username', value: text })}
                    />
          </CardSection>
          <CardSection>
                  <Input
                    secureTextEntry
                    label="password"
                    placeholder="password"
                    value={this.props.password}
                    onChangeText={text => this.props.createUser({ prop: 'password', value: text })}
                  />

          </CardSection>

          <CardSection>
                   <Input
                     label="Name"
                      placeholder="firstname"
                      value={this.props.firstname}
                    onChangeText={text => this.props.createUser({ prop: 'firstname', value: text })}
                   />
        </CardSection>

 <CardSection>
   <Input
     label="middlename"
     placeholder="middlename"
     value={this.props.middlename}
     onChangeText={text => this.props.createUser({ prop: 'middlename', value: text })}
   />
 </CardSection>


  <CardSection>
   <Input
     label="lastname"
     placeholder="lastname"
     value={this.props.lastname}
     onChangeText={text => this.props.createUser({ prop: 'lastname', value: text })}
   />
 </CardSection>

 <CardSection>
      <Button onPress={this.onButtonPress.bind(this)} >
        Create
      </Button>
    </CardSection>


                </Card>
           );
        }


}

const mapStateToProps = state => {
   return {
     username: state.create.username,
     password: state.create.password,
     firstname: state.create.firstname,
     lastname: state.create.lastname,
      middlename: state.create.middlename
   };
 };


export default connect(mapStateToProps, { createUser, saveUserDetails })(Screen4);
