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

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/Action';


const BookCard = (props) =>{

   
    const [addedToBag,setAddedToBag]=useState(true)
    const dispatch = useDispatch()
    
    const addToBag = item =>{
        dispatch(addItemToCart(item))
        setAddedToBag(false)
      }
      return (
        <View style={{margin: 5,marginTop:30}}>
         
         <View style={styles.bookcontain}>
                <Image source={{uri: props.imageUrl}} style={styles.image} />
                <View style={{backgroundColor: 'white'}}>
                  <Text style={{fontSize: 13, marginTop: 5, marginLeft: 17}}>
                    {props.bookName}
                  </Text>
                  <Text style={styles.authortext}>{props.author}</Text>
                  <Text style={styles.price}>{props.price}</Text>
                  {addedToBag ? (
                    <View
                      style={{
                        alignItems: 'center',
                        alignContent: 'center',
                        marginLeft: 20,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          addToBag(props)
                        }}>
                        <Text style={styles.buttonadd}> ADD TO BAG</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={styles.buttonwish}> WISHLIST</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View
                      style={{
                        alignItems: 'center',
                        alignContent: 'center',
                        marginLeft: 20,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                        
                        }}>
                        <Text style={styles.buttonAdded}>ADDED TO BAG</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
          
        
        
      </View>
 
  );
};
export default BookCard
const styles = StyleSheet.create({
  container: {
    //  flex:1,
    marginTop: 20,
    marginLeft: 6,
    marginRight: 3,
  },
  text: {
    marginTop: 60,
    fontSize: 25,
    color: 'black',
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 20,
  },
  buttonadd: {
    color: 'white',
    backgroundColor: '#a52a2a',
    width: 100,
    height: 24,
    margin: 5,
    marginRight: 25,
    alignContent: 'center',
    padding: 5,
    
  },
  buttonwish: {
    color: 'black',
    borderWidth: 1,
    width: 80,
    height: 22,
    marginRight: 20,
    marginTop: 3,
    padding: 2,
  },
  bookcontain: {
    margin: 0,
    borderWidth: 1,
    width: 160,
    height: 275,
    borderColor: 'grey',
    backgroundColor: '#f7f5f5',
    marginRight:0,
  },
  price: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 47,
    fontWeight: 'bold',
  },
  authortext: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 32,
  },
  buttonAdded: {
    color: 'white',
    backgroundColor: '#327ba8',
    width: 120,
    height: 30,
    margin: 5,
    marginRight: 25,
    alignContent: 'center',
    padding: 5,
    marginTop: 20,
   
  },
});
