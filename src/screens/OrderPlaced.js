import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const OrderPlaced = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/image3.jpg')}
          style={{height: 350, width: 390}}
        />
      </View>
      <View>
        <Text style={{paddingLeft: 70, fontSize: 20, fontWeight: 'bold'}}>
          Order Placed Successfully
        </Text>
        <Text style={{padding: 10}}>
          hurry!!! your order is confirmed the order id is #123456 save the
          order id for further communication
        </Text>
      </View>
      <View style={styles.column}>
        <View style={styles.rowStyle}>
          <View style={styles.row}>
            <Text style={styles.text}>Email us</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Contact us</Text>
          </View>
          <View style={styles.address}>
            <Text style={styles.text}>Address</Text>
          </View>
        </View>
        <View style={styles.rowStyle}>
          <View style={styles.row}>
            <Text style={styles.text}>email</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>123</Text>
          </View>
          <View style={styles.address}>
            <Text style={styles.text}>Address</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.orderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bookTxt}>
          Copyright @ 2023, Bookstore Private Limited. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 30,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row: {
    width: '30%',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
  },
  address: {
    width: '40%',
    borderWidth: 1,
  },
  contShoptext: {
    width: '50%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 30,
    alignSelf: 'center',
  },
  bottom: {
    marginTop: 163,
    backgroundColor: '#231709',
    justifyContent: 'center',
    width: '100%',
    height: '7%',
  },
  bookTxt: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  placeOrder: {
    backgroundColor: '#327ba8',
    width: '40%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 30,
    alignSelf: 'center',
  },
  orderText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});
export default OrderPlaced;
