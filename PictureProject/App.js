/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
      View,
      Image,
      Alert,
      TouchableOpacity
} from 'react-native';

import {
    CameraKitCamera,
	CameraKitCameraScreen
} from 'react-native-camera-kit';

import SamCamera from './SamCamera';
import PictureSwiper from './PictureSwiper';

export default class App extends Component{
    constructor(props) {
	super(props);
	this.state = {
	    page: undefined
	};
    }

    render() {
	if (this.state.page) {
	    const Page = this.state.page;
	    return <Page />;
	}
	
	return (
		<View style={styles.container}>
		  <Text>Welcome!</Text>
		  <TouchableOpacity onPress={()=> this.setState({page:SamCamera})}>
		    <View style={styles.buttonBody}>
		      <Text style={{color:'white'}}>Camera</Text>
		    </View>
		  </TouchableOpacity>
		  <TouchableOpacity onPress={()=> this.setState({page:PictureSwiper})}>
		    <View style={styles.buttonBody}>
		      <Text style={{color:'white'}}>Saved Pictures</Text>
		    </View>
		  </TouchableOpacity>
		  
		</View>
		);
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonBody: {
	    marginTop: 40,
	    height: 80,
	    width: 200,
	    backgroundColor: 'black',
	    justifyContent: 'center',
	    alignItems: 'center'
  },
});
