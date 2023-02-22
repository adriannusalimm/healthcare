
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet,ImageBackground, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { Button,Text,Card} from '@ui-kitten/components';
import { head } from 'lodash';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home");
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          }) 
          .catch(error => alert(error.message))
      }
    
      const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }



    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
        >

          <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('./background.jpg')} >
            
            <Card style={styles.headerContainer}> 
              <Text category='h6' status='info'>CMG Health Application</Text>
            </Card>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button style={styles.singleButton} onPress={handleLogin}>
                  {evaProps => <Text {...evaProps}>Login</Text>}
                </Button>
          
                <Button style={styles.singleButton} onPress={handleSignUp}>
                  {evaProps => <Text {...evaProps}>Register</Text>}
                </Button>
                
            </View>
          </ImageBackground>

    </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%',
      
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
    singleButton: {
      margin:5,
    },
    headerContainer: {
      width:'100%',
      //position:'absolute',
      top:0,
      right:0,
      backgroundColor:'#c2cad0',
    },
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1 
    },
  })