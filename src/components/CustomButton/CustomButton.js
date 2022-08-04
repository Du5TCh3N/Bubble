import { View, Text, StyleSheet, Pressable, ImageBackgroundComponent } from 'react-native'
import React from 'react'


const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}>
      <Text 
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color : fgColor} : {}
      ]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3'
  },
  container_SECONDARY:{
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_TERTIARY: {

  },
  container_MINOR: {
    padding: 0,
    marginVertical: 0,
    width: "25%",
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: 'blue',
  },
  text_TERTIARY: {
    color: 'grey'
  },
  text_MINOR: {
    color: 'grey'
  }
  

});


export default CustomButton