import React,{Component} from 'react';
import {
    CameraKitCamera,
	CameraKitCameraScreen
	} from 'react-native-camera-kit';

import {
    StyleSheet,
    Alert,
	Dimensions,
	TouchableOpacity,
	Text,
	View,
	Image
} from 'react-native';
export default class SamCamera extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    showPicture: false
	};
    }
    onBottomButtonPressed(event) {
	this.setState({
		imageSource: event.captureImages[0].uri,
		    showPicture: true
		    });
	/*
	const captureImages = JSON.stringify(event.captureImages);
	const capturedImages = event.captureImages;
	const data = new FormData();
	data.append('name','testName');
	data.append('photo', {
		uri: capturedImages[0].uri,
		    type: 'image/jpeg',
		    name: 'testPhoneName'
	    });
	fetch('http://52.186.27.227/upload2', {
		method: 'post',
		    body: data
		    }).then(res => {
			    console.log(res)
			});
	Alert.alert(
		    `${event.type} button pressed`,
		    `${captureImages}`,
		    [
		     {text: 'OK', onPress: () => console.log('OK Pressed')},
		     ],
		    {cancelable: false}
		    )
	*/
    }

    render() {
	if (this.state.showPicture) {
	    return <ApprovePictureScreen imageSource={this.state.imageSource} />;
	}
      return (

	    <CameraKitCameraScreen
	    actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
	    onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
	    flashImages={{
		    on: require('./images/flashOn.png'),
		    off: require('./images/flashOff.png'),
		    auto: require('./images/flashAuto.png')
		}}

	    cameraOptions ={{
		    flashMode: 'auto',
		    focusMode: 'on',
		    zoomMode: 'on',
		    ratioOverlay: '1:1',
		    ratioOverlayColor: '#00000077'
		}}
	    cameraFlipImage={require('./images/cameraFlipIcon.png')}
	    captureButtonImage={require('./images/cameraButton.png')}
	    />
	    
    );
  }
}

class ApprovePictureScreen extends Component {
    _onPressAccept() {
	Alert.alert('accept');
    }
    _onPressNope() {
	Alert.alert('Nope');
    }
    render() {
	let pic = {
	    uri: this.props.imageSource
	};

	return (
		<View style={styles.container}>
		<Image source={pic} style={{height:400,width:400}} />
		<View style={styles.buttonGroup}>
		<TouchableOpacity onPress={()=> this._onPressAccept()}>
		<View style={styles.button}>
		<Text style={styles.buttonText}>Accept</Text>
		</View>
		</TouchableOpacity>
		<TouchableOpacity onPress={()=> this._onPressNope()}>
		<View style={styles.button}>
		<Text style={styles.buttonText}>Nope</Text>
		</View>
		</TouchableOpacity>
		</View>
		</View>
		);
    }
}

const styles = StyleSheet.create({
	container: {
	    backgroundColor: 'black',
	    height: Dimensions.get('window').height,
	},
	buttonGroup: {
	    justifyContent: 'center',
	    alignItems: 'center',
	    flex: 1,
	    flexDirection: 'row'
	},
	button: {
	    backgroundColor: 'black',
	    borderColor: 'white',
	    borderRadius: 5,
	    borderWidth: 3,
	    marginLeft: 5,
	    height: 60,
	    width: Dimensions.get('window').width/2 - 10,
	    justifyContent: 'center',
	    alignItems: 'center',
	},
	buttonText: {
	    color: 'white',
	    fontSize: 30
	}
    });