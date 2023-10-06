import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import fetchNASAData from "../apis/fetch";
import TodayImages from "../components/todayImages";
import { PostImage } from "../types";
 


const Home = ()=>{
    const [todatImage, setTodayImage]= useState()

    useEffect(() => {
        const loadTodayImage = async () => {
          try {
            const todayImageResponse = await fetchNASAData();
         
            setTodayImage(todayImageResponse)
          } catch (error) {
            console.error(error);
            setTodayImage(undefined)
          }
        };
      
        loadTodayImage(); // Llama a la función sin .catch
      }, []);
      
      console.log(todatImage)

    return(
        <View style={styles.container}>
            <Header> </Header>
            <TodayImages ></TodayImages>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingHorizontal: 16
    }
})

export default Home