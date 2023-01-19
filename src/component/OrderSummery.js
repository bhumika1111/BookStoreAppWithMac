import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from 'react-native';
const OrderSummary = ({navigation}) => {
  return (
    <View>
      
      <View style={styles.Container}>
        <Text style={{marginTop: 10, marginLeft: 20}}>Order Summary</Text>
      <View style={{paddingLeft: 230, paddingRight: 10, marginTop: 65}}>
        <TouchableOpacity onPress={() => {navigation.navigate('OrderPlaced')}}>
          <Text
            style={{
              color: 'white',
              paddingLeft: 20,
              paddingTop: 2,
              borderWidth: 1,
              backgroundColor: '#456cb5',
              paddingBottom: 3,
              borderColor: '#6c8bc4',
              fontSize: 11,
            }}>
          CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
   </View>
    
    </View>
  );
};
export default OrderSummary;
const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    marginTop: 35,
    height: 220,
    marginRight: 10,
    borderColor: '#a9a9a9',
    alignContent: 'flex-start',
    width: 348,
  },
});
