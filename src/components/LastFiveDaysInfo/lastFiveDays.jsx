import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import PostFimg from '../PostFimg'

const LastFiveInfo = ({ postObject }) => {
    console.log("este es el obj", postObject)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.content}>

            {postObject.map((postFimg, index) => (
                    <PostFimg
                        key={`post-image-${index}`}
                        title={postFimg.title}
                        date={postFimg.date}
                    />
                ))}
                 {/* ESTO TAMBIÉN FUNCIONA IGUAL QUE MAP
                <PostFimg title={postObject[0].title} date={postObject[0].date} />
                <PostFimg title={postObject[1].title} date={postObject[1].date} />
                <PostFimg title={postObject[2].title} date={postObject[2].date} />
                <PostFimg title={postObject[3].title} date={postObject[3].date} />
                <PostFimg title={postObject[4].title} date={postObject[4].date} />
                     */}
                  
                
                 
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        color: "white",
        fontSize: 16,
        marginBottom: 18,
    },
    content: {
        paddingHorizontal: 24,
    }
})

export default LastFiveInfo;
