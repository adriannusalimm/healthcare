import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Button,Divider, Icon, List, ListItem } from '@ui-kitten/components';
import filter from "lodash.filter";
import { SearchBar } from "react-native-elements";
import {db} from '../firebase';

class PatientScreen extends Component {


  constructor() {
    super();
    this.usersCollectionRef = db.collection('users');
    this.data = [],
    this.size = 0
    this.state = {
      isLoading: true,
      userArr: []
    };
    this.arrayholder;
  }

  componentDidMount() {
    this.unsubscribe = this.usersCollectionRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, age, email, mobile } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        age,
        email,
        mobile,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
   this.arrayholder = userArr;
  }

  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.name.toUpperCase()}`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ userArr: updatedData, searchValue: text });
  };


  ////////////////

  renderItemIcon = (props) => (
    <Icon {...props} name='person'/>
  );
  

  renderItem = ({ item }) => (
    <ListItem onPress={() => {this.props.navigation.navigate('PatientDetailScreen', {userkey: item.key});}}
      title={`${item.name}`}
      description={`${item.description}`}
      accessoryLeft={this.renderItemIcon}
    />
  );

  ///////////////////

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      );
    }    
    return (  
        <View >
          <SearchBar
            placeholder="Search Here..."
            lightTheme
            round
            value={this.state.searchValue}
            onChangeText={(text) => this.searchFunction(text)}
            autoCorrect={false}
          />

          <Button onPress={() => {this.props.navigation.navigate('PatientRegistrationScreen');}}>
            Add more patients
          </Button>

          <List 
            style={styles.container}
            data={this.state.userArr}
            ItemSeparatorComponent={Divider}
            renderItem={this.renderItem}
          />
        )
        </View>
    );
  }
}
export default PatientScreen

const styles = StyleSheet.create({
  // container: {
  //   maxHeight: 1000,
  // },
});