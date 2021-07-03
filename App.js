


//importing
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Using  JSX as a variable name.

const msg = 'Hello Everyone';
const name = 'Chittra Here';
const msg1 = 'Stay Safe';

//We can create two types of component in react native i.e  Class and Functional //Component

class App extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            marginTop: 50,
            textAlign: 'center',
            fontSize: 30,
            color: 'red',
          }}>
          {msg}
        </Text>

        <Text style={myStyle.textStyle}>{name}</Text>

        <Text
          style={[
            myStyle.textStyle,
            {
              backgroundColor: 'green',
              fontSize: 36,
              padding: 40,
              color: 'black',
            },
          ]}>
          {msg1}
        </Text>
      </View>
    );
  }
}

//For Internal Styling
const myStyle = StyleSheet.create({
  textStyle: {
    marginTop: 50,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'pink',
    fontSize: 20,
    padding: 30,
  },
});

//Now,we need to make it public
export default App;
