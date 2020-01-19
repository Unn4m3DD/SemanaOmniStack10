import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from './screens/Main'
import GitHubProfile from './screens/GitHubProfile'

const header = (title) => <View style={{ width: 300 }}>
  <Text style={{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    flex: 1,
    color:"#fff"
  }}>
    {title}
  </Text>
</View>

export default createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        headerTitle: (header("Dev Radar")),
      }
    },
    GitHubProfile: {
      screen: GitHubProfile,
      navigationOptions: {
        headerTitle: (header("GitHub Profile")),
      }
    },
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#47d"
      }
    }
  })
)