import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import Screen4 from './Components/Screen4';

const RouterComponent = () => {

    return (
     <Router sceneStyle={{ paddingTop: 150 }}>
         <Scene key='choose' component={Screen4} title='Welcome' />
         <Scene key='signIn' component={Screen3} title='signin' />
      </Router>
    );
};
  export default RouterComponent;
