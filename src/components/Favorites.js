import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { detailMovie } from '../api/themoviedb';

import MovieItemList from './MovieItemList';

import { useNavigation } from '@react-navigation/native';

const Favorites = ({navigation, moviesList, dispatch}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFav();
    }, []);

    const getDetailMovie = (id) => {
        //console.log(id);
        navigation.navigate('Movie', {
            idMovie: id
          });
    }

    const fetchFav = async function oui() {
        setData([]);
        const res = await detailMovie(moviesList[0].id);

        
    }

    return (
        <View>
            <FlatList
              data={data}
              renderItem={ ({item}) => <MovieItemList press={() => getDetailMovie(item.id)} movieData={item}/>}
              keyExtractor={item => item.id}
              onEndReachedThreshold={ 0.5 }
              refreshing={ false }
              />
        </View>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
      moviesList: state.myValues
    }
  }

export default connect(mapStateToProps)(Favorites);