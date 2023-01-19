import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import {card} from 'react-native-paper';
import axios from 'axios';
import TopBar from '../component/TopBar';
import {myAxiosGetRequest} from '../controller/Controller';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../redux/Action';
import BookCard from './BookCard';
const CardBox = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await myAxiosGetRequest()
      .then(res => {
        console.log(res);
        const json = res.data;
        setBook(json);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={book}
        key={item => item.id}
        numColumns={2}
        renderItem={({item}) => <BookCard {...item} />}
      />
    </View>
  );
};

export default CardBox;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 7,
    flexDirection: 'row',
    marginTop:0,
    marginLeft:25,
  },
});
