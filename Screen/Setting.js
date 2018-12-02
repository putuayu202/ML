import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Setting extends React.Component{
  render(){
    return(
      <View style={styles.container}>
                <Text style={salon.iya}>Muhammad Rizky Ramadhan</Text>
                <Text style={salon.iya}>XI RPL 4/24</Text>
                <Text style={salon.iya}>SMK Telkom Purwokerto</Text>
        <Text style={{ marginBottom : 100}}></Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e2a78',
  }
});
const gambar = {
  edit : {
    borderRadius : 110,
    marginTop : 20,
    marginBottom : 10,
    width : 180,
    height : 175,
  }
}
const warna = {
  yoi : {
    color : "#fff",
    fontSize : 20,
    fontWeight : 'bold',
  }
}
const salon = {
  iya : {
    color : "#ffd615",
    fontSize : 14,
  }
}