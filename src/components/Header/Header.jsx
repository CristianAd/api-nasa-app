import {React} from "react"
import { View, Image, Text, StyleSheet} from "react-native"


const Header = ()=> {
    return (
        <View style={styles.container}>
            
            <View style={styles.leftHeader}>
                <Text style={styles.title}>Header</Text>
            </View>
            
            <View style={styles.rigthHeader}>
                 <Image source={require("../../assets/nasa-logo.png")} style={styles.imagenLogo}></Image>
            </View>
        </View>
    )
 
}


const styles = StyleSheet.create({
        container:{
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center"
        },

        leftHeader:{
            flex: 1,
            alignItems: "flex-start"
        },
        rigthHeader:{
            flex: 1,
            alignItems: "flex-end"
        },
        title:{
            fontSize: 20,
            color: "#fff"

        },
        imagenLogo:{
            width: 60,
            height: 60
        }

})

export default Header