import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


const CustomerForm = () => {
  const [ContinueButton, setContinueButton] = useState(true);
 const [show, setShow] = useState(false);
  const handleContinueButton = () => {
    setContinueButton(false);
    setShow(true);
  };
  return (
   
    <View style={styles.column}>
      <View style={styles.row}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={'grey'}
          style={styles.nameInput}
        />

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={'grey'}
          style={styles.nameInput}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="Pincode"
          placeholderTextColor={'grey'}
          style={styles.nameInput}
        />

        <TextInput
          placeholder="Locality"
          placeholderTextColor={'grey'}
          style={styles.nameInput}
        />
      </View>
      <View>
        <TextInput
          placeholder="Address"
          multiline={true}
          placeholderTextColor={'grey'}
          style={styles.addressInput}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="City/Town"
          placeholderTextColor={'grey'}
          style={styles.nameInput}
        />

        <TextInput
          placeholder="Landmark"
          placeholderTextColor={'grey'}
          style={styles.nameInput}
        />
      </View>

      <View>
        <Text style={{color:'grey', fontSize: 15}}>Type</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.roundView}>{''}</View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Home</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.roundView}>{''}</View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Work</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.roundView}>{''}</View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Other</Text>
        </View>
      </View>

      <View>
        {ContinueButton ? (
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={handleContinueButton}>
            <Text style={styles.orderText}>Continue</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  
  );
};

export default CustomerForm;

const styles = StyleSheet.create({


  nameInput: {
    padding: 5,
    fontSize: 15,
    color: 'grey',
    width: '40%',
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    
  },
  addressInput: {
    padding: 5,
    fontSize: 15,
    color: 'grey',
    width: '83%',
    height: 70,
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  roundView: {
    width: 15,
    height: 15,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: 'grey',
    margin: 10,
  },
  typeTxt: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    marginTop: 7,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  placeOrder: {
    backgroundColor:'#327ba8',
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
});