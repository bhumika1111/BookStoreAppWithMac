import React, {useState} from 'react';
import {
 View,
 Text,
 StyleSheet,
 Image,
 TouchableOpacity,
 ScrollView,
} from 'react-native';
import CustomerDetails from '../component/CustomerDetails';
import TopBar from '../component/TopBar';




const MyCart = ({navigation, route}) => {
 const orderList = route.params?.orders|| [];
 console.log('orderList', orderList);
 const [showButton, setShowButton] = useState(true);
 const [showForm, setShowForm] = useState(false);

 const handleButton = () => {
 setShowButton(false);
 setShowForm(true);
 };
 return (
 <View style={styles.homeContainer}>
 <View style={styles.header}>
 <TopBar navigation={navigation} />
 </View>
 <ScrollView>
 <View style={styles.cartContainer}>
 <View>
 <Text style={styles.mycart}>My cart</Text>
 </View>
 <View>
 {orderList.map(item => (
 <View style={styles.rowView} key={item.id}>
 <View style={styles.rowView}>
 <Image
 source={{uri: item.imageUrl}}
 style={{width: 100, height: 150}}
 />
 </View>
 <View>
 <View style={{margin: 15}}>
 <Text style={{color: '#000'}}>{item.title}</Text>
 <Text style={{color: 'grey'}}>
 {item.author}
 </Text>
 <Text style={styles.priceTxt}>{item.price}</Text>
 </View>
 <View style={styles.rowView}>
 <TouchableOpacity>
 <View style={styles.roundBtn}>
 <Text style={styles.roundBtnText}>-</Text>
 </View>
 </TouchableOpacity>
 <View style={styles.countView}>
 <Text style={styles.roundBtnText}>1</Text>
 </View>
 <TouchableOpacity>
 <View style={styles.roundBtn}>
 <Text style={styles.roundBtnText}>+</Text>
 </View>
 </TouchableOpacity>
 </View>
 </View>
 </View>
 ))}
 </View>
 <View>
 {showButton ? (
 <TouchableOpacity
 style={styles.placeOrder}
 onPress={handleButton}>
 <Text style={styles.orderText}>Place Order</Text>
 </TouchableOpacity>
 ) : null}
 </View>
 </View>

 <View style={styles.customerContainer}>
 
 <Text style={styles.customerText}>Customer Details</Text>
 {showForm ? <CustomerDetails /> : null}

 </View>

 <View style={styles.customerContainer}>
 <Text style={styles.customerText}>Order Summary</Text>
 {showForm ? (
 <View style={styles.rowView}>
 <View style={styles.columnView}>
 <Image
 source={require('../assets/image.jpeg')}
 style={{width: 100, height: 150}}
 />
 </View>
 <View>
 <View style={{margin: 15}}>
 <Text style={{color: '#000'}}>Don't Make Me Think</Text>
 <Text style={{color: 'grey'}}>
 by Steve King
 </Text>
 <Text style={styles.priceTxt}>Rs 1500</Text>
 </View>
 </View>
 </View>
 ) : null}
 <View>
 {!showButton ? (
 <TouchableOpacity
 style={styles.placeOrder}
 onPress={() => {
 navigation.navigate('OrderPlaced');
 }}>
 <Text style={styles.orderText}>Checkout</Text>
 </TouchableOpacity>
 ) : null}
 </View>
 </View>
 </ScrollView>
 <View style={styles.bottom}>
 <Text style={styles.bookTxt}>
 Copyright @ 2023, Bookstore Private Limited. All Rights Reserved
 </Text>
 </View>
 </View>
 );
};
export default MyCart;

const styles = StyleSheet.create({
 homeContainer: {
 flex: 1,
 backgroundColor: 'white',
 },
 bookTxt: {
 color: '#fff',
 fontSize: 10,
 fontWeight: '500',
 textAlign: 'center',
 },
 cartContainer: {

 borderWidth: 0.3,
 borderColor: 'grey',
 margin: 10,
 padding: 10,
 marginTop:70,
 },
 mycart: {
 color: '#000',
 fontSize: 17,
 marginBottom: 15,
 },
 priceTxt: {
 color: '#a03037',
 fontSize: 15,
 fontWeight: 'bold',
 },
 roundBtn: {
 width: 30,
 height: 30,
 marginLeft: 15,
 borderRadius: 15,
 borderWidth: 1,
 borderColor: 'grey',
 },
 roundBtnText: {
 color: 'grey',
 fontSize: 20,
 textAlign: 'center',
 },
 countView: {
 width: 50,
 borderRadius: 5,
 borderWidth: 1,
 marginLeft: 15,
 borderColor: 'grey',
 },
 placeOrder: {
 backgroundColor: '#327ba8',
 width: '40%',
 padding: 5,
 borderRadius: 5,
 marginVertical: 10,
 alignSelf: 'flex-end',
 },
 orderText: {
 color: '#fff',
 fontSize: 17,
 textAlign: 'center',
 },
 customerContainer: {
 borderWidth: 0.3,
 borderColor: 'grey',
 margin: 10,
 padding: 10,
 },
 customerText: {
 color: 'grey',
 fontSize: 17,
 marginBottom: 5,
 },
 bottom: {
 backgroundColor: '#231709',
 justifyContent: 'center',
 width: '100%',
 height: '7%',
 },
 header: {
 //flex: 1,
 },
 rowView: {
 flexDirection: 'row',
 },
 columnView: {
 flexDirection: 'column',
 },
});