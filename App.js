import React from 'react';
import {TabNavigator, CreateBottomNavigator,CreateAppContainer} from 'react-navigation';

import {Home} from './Screen/Home';
import {Heroes} from './Screen/Heroes';
import {Setting} from './Screen/Setting';


const CreateBottomNavigator  = CreateAppContainer({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Setting,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}