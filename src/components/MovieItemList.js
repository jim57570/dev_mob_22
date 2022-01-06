import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const MovieItemList = ({movieData, press}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={press}> 
            <Image style={styles.miniature} />

            <View style={styles.content}>
                <Text style={styles.title}>{movieData.original_title}</Text>
                <Text style={styles.rate}>{movieData.vote_average}</Text>
                <Text>{movieData.release_date}</Text>
                <Text numberOfLines={2}>{movieData.overview}</Text>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      marginTop: 24,
      flexDirection: "row",
    },
    inputRestaurantName: {
      marginBottom: 16,
    },
    miniature: {
        backgroundColor: 'gray',
        width: 128,
        height: 128,
        borderRadius: 12,
        margin: 5
    },
    content: {
      flexDirection: "column",
      justifyContent: "center"
    },
    title: {
      fontWeight: "bold"
    },
    subText: {

    },
    info: {
      flexDirection: "row"
    },
    icon: {

    },
    rate: {
        fontWeight: "bold"
    }
  });

export default MovieItemList;