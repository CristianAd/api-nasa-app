import React from "react";
import { Button, View, Text, StyleSheet} from "react-native";

const PostFimg = ({title, date}) =>{
        return (
            <View style={styles.container}>
                 
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>

                <View style={styles.btnContainer}>
                    <Button title="Vista" />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
        container:{
                backgroundColor : 'rgba(18,39,113,255)',
                borderRadius: 20, 
                marginBottom: 12,
                padding: 16
        }, 
        title:{
            color: "white",
            fontWeight: "bold",
            fontSize:18, 
            marginBottom: 12
        }, 
        date:{
            color: "white"
        }, 
        btnContainer:{
            alignItems: "flex-end"
        }
})

export default PostFimg