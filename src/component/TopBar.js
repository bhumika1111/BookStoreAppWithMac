import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {BORDERWIDTH, COLOR, HEIGHT, MARGIN, PADDING} from '../utility/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux'

const TopBar = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons style={styles.icon} name="book" size={20} />
        <Text style={styles.text}>BookStore</Text>

        {/* <Ionicons style={styles.iconSearch} name='ios-search-outline' size={20}/> */}
        <TextInput style={styles.input} placeholder={'search'} />

        <View style={{flexDirection: 'row', alignContent: 'center'}}>
          <Text style={styles.text}>Cart</Text>
          <TouchableOpacity onPress={() => {navigation.navigate('MyCart')}}>
            <Ionicons
              style={{paddingTop: 13, color: 'white'}}
              name="cart-outline"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    paddingLeft: 20,
    backgroundColor: 'white',
    height: 30,
    margin: 10,
    width: 170,
  },
  text: {
    color: 'white',
    marginTop: 16,
    margin: 5,
  },
  icon: {
    margin: 10,
    color: 'white',
    marginTop: 15,
  },
  header: {
    // paddingLeft:10,
    backgroundColor: COLOR.PRIMARY_COLOR,
    height: 50,
    // margin:10,
    width: '100%',
    flexDirection: 'row',
  },
  iconSearch: {
    color: 'white',
    marginTop: 15,
    //paddingLeft:10,
  },
});
export default TopBar;
