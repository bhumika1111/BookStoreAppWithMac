import React,{ useState,useEffect } from 'react';
import {View, TextInput,StyleSheet,Text,Button} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

var db = openDatabase({ name: 'UserDatabase.db' });
const Login = ({navigation}) => {
  const [value, setValue] = useState([]);
  const [email, setEmail] = useState([]);
  
//1-query 2-values inside array 3-callback method for response
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
         (tx, res) =>{
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(10))',
              []
            );
          }
        }
      );
    });
  }, []);
  return (
    <SafeAreaView>

        <Text style={styles.loginText}>Login</Text>
       <View style={styles.textinputContainer}>
        <TextInput
          style={{marginLeft: 20, marginTop: 15}}
          placeholder="Name"
          value={value}
          onChangeText={text => setValue(text)}
        />
      </View>
      <View style={styles.textinputContainer}>
        <TextInput
          style={{marginLeft: 20, marginTop: 15}}
          placeholder="emailId"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <Button title="submit" onPress={()=>{navigation.navigate('Home')}}/>
    </SafeAreaView>
  );
};
export default Login;
const styles = StyleSheet.create({
    textinputContainer: {
        borderWidth: 1,
        marginTop: 25,
        height: 45,
        marginLeft: 15,
    borderRadius:10,
        borderColor: '#a9a9a9',
        marginRight: 10,
        borderColor:'#a52a2a',
        borderWidth:6,
    
      },
      loginText:{
fontSize:35,

marginLeft:150,

      },
    
})