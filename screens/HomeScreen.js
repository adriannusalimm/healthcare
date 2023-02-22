import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import {Ionicons} from '@expo/vector-icons'
import { Calendar,Button , Icon} from '@ui-kitten/components';


const HomeScreen = () => {
  const navigation = useNavigation()
  const [date, setDate] = React.useState(new Date());
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  const viewPatient = () => {
    navigation.navigate("ViewPatient")
  }


  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
 
      <View style={{flexDirection: 'row'}}>
        <View style={{padding:15 , alignItems:'center'}}>
          <Ionicons onPress={viewPatient} name="people-circle-outline" size={60} color="#0A5DD8"/>
          <Button onPress={viewPatient}>
            {evaProps => <Text {...evaProps}>Patients</Text>}
          </Button>
        </View>

        <View style={{padding:15, alignItems:'center'}}>
          <Ionicons onPress={() => navigation.navigate('emf')} name="newspaper-outline" size={60} color="#0A5DD8"/>
          <Button onPress={() => navigation.navigate('emf')}>
            {evaProps => <Text {...evaProps}>EMR</Text>}
          </Button>

        </View>

        <View style={{padding:15, alignItems:'center'}}>
            <Ionicons onPress={() => navigation.navigate('emf')} name="call-outline" size={60} color="#0A5DD8"/>
            <Button onPress={() => navigation.navigate('emf')}>
              {evaProps => <Text {...evaProps}>Contact</Text>}
            </Button>
        </View>        
        
        <View style={{padding:15, alignItems:'center'}}>
          <Ionicons onPress={handleSignOut} name="arrow-back" size={60} color="#0A5DD8"/>
          <Button onPress={handleSignOut}>
              {evaProps => <Text {...evaProps}>Sign out</Text>}
          </Button>

        </View>    

        

      </View>

      <React.Fragment>
          <Calendar style={styles.calendar}
            date={date}
            onSelect={nextDate => setDate(nextDate)}
          />
        </React.Fragment>

    </View>


  // <View style={{flexDirection:'row' , justifyContent: 'center', alignItems: 'center' }}>
  // </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
  calendar: {
    backgroundColor: '#93B7BE',
  },
})