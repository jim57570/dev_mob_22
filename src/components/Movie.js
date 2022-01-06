import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { castMovie, detailMovie } from '../api/themoviedb';

import { connect } from 'react-redux';

const Movie = ({route, moviesList, dispatch}) => {

    const idMovie = route.params.idMovie;

    const [Movie, setMovie] = useState([]);
    const [cast, setCast] = useState([]);

    const [watched, setWatched] = useState(false);
    
    useEffect(() => {
        fetchMovie();
        fetchCast();
        IsWatched();
    }, []);

    const renderItem = ({ item }) => (
        <Text>{item.name}</Text>
    );

    const fetchMovie = async function oui() {
        const res = await detailMovie(idMovie);
        setMovie(res);
    }
    const fetchCast = async function oui() {
        const res = await castMovie(idMovie);
        setCast(res);
        //console.log(res);
    }

    const IsWatched = () => {
        //console.log(injecteDansLeComposant);
        if (moviesList.indexOf(idMovie) != -1) {
            setWatched(true);
        }
        else
            setWatched(false);
    }

    const addWatched = () => {
        //console.log(restaurant);
        const action = {type: 'ADD', value: idMovie};
        dispatch(action); // dispatch est injectée par Redux dans les props du composant
        setWatched(true);
    }

    const removeWatched = () => {
        const action = {type: 'DELETE', value: idMovie};
        dispatch(action); // dispatch est injectée par Redux dans les props du 
        setWatched(false);
    }

    return(
        <View style={styles.container}>
            {!watched ?
                    <Button
                    title='Not watched'
                    onPress={addWatched}
                    />
                    :
                    <Button
                    title='Watched'
                    onPress={removeWatched}
                    />
                }

            <Text style={styles.mainTitle}>{Movie.title}</Text>
            <View style={styles.content}>
                <Text style={styles.title}>Release:</Text>
                <Text>{Movie.release_date}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Genre:</Text>
                <FlatList
                    data={Movie.genres}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Runtime:</Text>
                <Text>{Movie.runtime}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Cast:</Text>
                <FlatList
                    data={cast.cast}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Overview:</Text>
                <Text>{Movie.overview}</Text>
            </View>
        </View>
    );

};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      moviesList: state.myValues
    }
  }

export default connect(mapStateToProps)(Movie);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        marginTop: 24,
      },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    title: {
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row'
    }
})