import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const TodayImages = (props) => { 
  return (
    <View style={styles.container}>
        <View style = {styles.imageContainer}>
        {/*  <Image source={{uri: url}} style={styles.image}></Image> */}
        
        </View>
        <Text>Titulo</Text>
        <Text>DATE</Text>
        <Button title="View"></Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(7,26,93,255)',
  },
  imageContainer:{
    backgroundColor: 'rgba(7,26,93,255)',
  }

})
export default TodayImages;
