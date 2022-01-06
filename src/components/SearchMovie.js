import React, {useState, useEffect} from 'react';
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { findMovie, discover } from '../api/themoviedb';
import MovieItemList from './MovieItemList';

import { useNavigation } from '@react-navigation/native';

import { connect } from 'react-redux';

let currentPage = 0;
let totalPages = 0;




const SearchMovie = ( {navigation}) => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        loadData();
    }, []);
    
    const getDetailMovie = (id) => {
        //console.log(id);
        navigation.navigate('Movie', {
            idMovie: id
          });
    }
    

    const loadData = async () => {
    
        setData([])

        const res = await discover(currentPage);
        setData(res.results);
        currentPage = res.page;
        totalPages = res.total_pages;

    }


    const loadMoreMovies = async () => {

        if(currentPage < totalPages) {
            //verification si on est dans une recherche ou affichage de tout les films
            let res = ([]);

            if(query == "") {
                res = await discover(currentPage);
            }
            else {
                res = await findMovie(query, currentPage);
            }
            setData(data.concat(res.results));
            currentPage = res.page;
        }
    }

    const IsWatched = (idMovie) => {
    }

    const cancel = async () => {
        setQuery("");
        currentPage = 0;
        totalPages = 0;
        loadData();
    }

    const search = async () => {

        setData([]);

        const res = await findMovie(query, currentPage);
        setData(res.results);
        currentPage = res.page;
        totalPages = res.total_pages;

    }


    return (
        <View>
          <TextInput placeholder='Movie...' style={styles.container} value={query} onChangeText={setQuery}/>
            <Button style={styles.cancel} title='Annuler' onPress={cancel} />
          <Button
            title='Rechercher'
            onPress={search}
          />
            <FlatList
              data={data}
              renderItem={ ({item}) => <MovieItemList press={() => getDetailMovie(item.id)} movieData={item}/>}
              keyExtractor={item => item.id}
              onEndReached={ loadMoreMovies }
              onEndReachedThreshold={ 0.5 }
              refreshing={ false }
              onRefresh={loadData }
              />
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      marginTop: 16,
    },
    inputRestaurantName: {
      marginBottom: 16,
    },
    cancel: {
        width: 10,
        height: 10
    }
  });


export default SearchMovie;