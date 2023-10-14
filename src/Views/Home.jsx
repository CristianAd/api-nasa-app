import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import fetchNASAData from "../apis/fetch";
import TodayImages from "../components/todayImages/TodayImages";
import { PostImage } from "../types";
import { format, sub } from "date-fns";
import LastFiveDaysInfo from "../components/LastFiveDaysInfo";
 
 


const Home = ()=>{
    const [infoNasa, setTodayImage] = useState();
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState([])

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

        const loadlast5Daysinfo = async ()=>{
          try {
              const date = new Date()
              const todaysDate = format(date, 'yyyy-MM-dd');
              const fiveDaysAgoDate = format(sub(date, {days:5}) ,'yyyy-MM-dd')
              const lastFiveDaysImagesResponse = await fetchNASAData(
                `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)

    {/*              console.log(todaysDate, fiveDaysAgoDate)
              console.log(lastFiveDaysImagesResponse) */}

              setLastFiveDaysImages( lastFiveDaysImagesResponse)
          } catch (error) {
            console.log(error)
          }
        }
      
        loadTodayImage(); // Llama a la función sin .catch
        loadlast5Daysinfo()
      }, []);
      

       
    return(
        <View style={styles.container}>
            <Header> </Header>
         
       {infoNasa && (
        <TodayImages
          title={infoNasa.title}
          date={infoNasa.date}
          imageUrl={infoNasa.hdurl}
        />
      )}

        
        <LastFiveDaysInfo postObject = {lastFiveDaysImages}></LastFiveDaysInfo>
    
      
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