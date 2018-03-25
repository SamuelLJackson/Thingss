import React,{Component} from 'react';

import {
    Image,
	View,
	Text
	} from 'react-native';

import Swiper from 'react-native-swiper';

export default class PictureSwiper extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    playerList: [{'id':'1521920062456','name':'first'}, {'id':'1521933440367','name':'second'},{'id':'1521933500916','name':'third'}]
	};
    }
    renderPlayer(player,index) {
	return (
		<View key={index}>
	       <Image source={{uri: 'http://52.186.27.227/static/'+player.id+'.jpg'}}
	       style={{width:400,height:400}} />
		<Text style={{marginTop:50}}>{player.name}</Text>
	       </View>
		);
    }
    renderPlayerSwiper() {
	let mutablePlayers = [];
	for (let player of this.state.playerList) {
	    mutablePlayers.push({...player})
	}
	return (
		<Swiper showsPagination = {false}>
		    {mutablePlayers.map((player,index) => {
				return this.renderPlayer(player,index)
			    })}
		</Swiper>
		);
    }
    render() {
	return(
	       <View style={{flex: 1}}>
		   {this.renderPlayerSwiper()}
	       </View>
	       );
    }
    
    componentDidMount() {
	//return fetch('http://52.186.27.227/static/
    }
}