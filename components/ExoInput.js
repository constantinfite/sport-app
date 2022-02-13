import React, { useState } from 'react'
import Modal from "react-native-modal";
import {
    Text,
    StyleSheet,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

export default class ExoInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
    render() {

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Modal isVisible={this.props.visible}>
                    <View style={styles.container}>

                        <TextInput
                            style={styles.input}
                            onChangeText={(todoInput) => this.props.textChange(todoInput)}
                            value={this.props.todoInput}
                            placeholder="Exercice"
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(nbSer) => this.props.textChange1(nbSer)}
                            value={this.props.nbSer}
                            placeholder="Nombre de série"
                            keyboardType='numeric'
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(nbRepe) => this.props.textChange2(nbRepe)}
                            value={this.props.nbRepe}
                            placeholder="Nombre de répétition"
                            keyboardType='numeric'
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(timeRest) => this.props.textChange3(timeRest)}
                            value={this.props.timeRest}
                            placeholder="Temps de récupération"
                            keyboardType='numeric'
                            placeholderTextColor={'white'}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={this.props.addNewTodo}>
                            <Text style={styles.addButtonText}>
                                ADD
                            </Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        width: '60%',
        borderBottomColor: 'white',
        color: 'white',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 10


    },
    buttonContainer: {
        flexDirection: "row-reverse",
        justifyContent: 'space-between',
        width: '40%'
    },
    addButton: {

    },
    addButtonText: {
        color: 'white',

        fontSize: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'white'
    }

});
