import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.text}>Bla bla bla</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container:
  {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
  },
  title:
  {
    color:'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text:
  {
    color:'gray',
    fontSize: 18,
  },

})