import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopBar from '../component/TopBar';
import CardBox from '../component/CardBox';

const Home = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <TopBar navigation={navigation} />
      <View>
        <Text style={styles.bookTxt}>Books(128 items)</Text>
      </View>
    <View style={styles.cards}>
        <CardBox />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bookTxt: {
    color: 'grey',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 20,
  },

  cards: {
    flex: 11,
  },
  bottom: {
    flex: 0.7,
  },
});
