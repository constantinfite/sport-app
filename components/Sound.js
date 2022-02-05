import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Sound from 'react-native-sound';

export default class Sound extends Component {

    sound = new Sound('/assets/count-5to1.mp3');

    playSound = () => {
        this.sound.play()
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.playSound}>
                    <View>
                        <Text>Start</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}