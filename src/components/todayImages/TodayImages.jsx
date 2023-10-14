import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const TodayImages = (props) => { 
  return (
    <View style={styles.container}>
 
        {/*  <Image source={{uri: url}} style={styles.imageApp}></Image> */}
     
        <Image source={{ uri: props.imageUrl }} style={styles.imageApp} />
 
        <Text style={styles.textTitle}>{props.title}</Text>
        <Text style={styles.dateCont}>{props.date}</Text>
        <View style={styles.btnContainer}>
          <Button title="View"></Button>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2c449d',
    color: "white",
    marginVertical: 16, 
    borderRadius: 32, 
    padding: 16,
    marginHorizontal: 24
  }, 
  imageApp:{
    width: '100%',
    height : 190,
    borderWidth: 2, 
    borderColor: '#fff', 
    borderRadius: 32
  },
  textTitle:{
    color: "white", 
    fontSize: 20,
    marginVertical: 12, 
    fontWeight: 'bold'
  },
  dateCont:{
    color: "white", 
    fontSize: 16
  }, 
  btnContainer:{
    color: "white", 
    alignItems: "flex-end"
  }
 

})
export default TodayImages;
