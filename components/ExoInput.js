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
                <Modal isVisible={this.props.visible} >
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
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={this.props.addNewTodo}>
                                <Text style={styles.addButtonText}>
                                    +
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.props.closeInput}>
                                <Text style={styles.closeButton}>
                                    x
                                </Text>
                            </TouchableOpacity>
                        </View>

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
        color: '#3e99ff',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 10


    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '60%'
    },
    closeButton: {
        borderColor: '#f51845',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        borderWidth: 6,
        width: 60,
        height: 60,
        borderRadius: 60/2
    },
    addButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        borderWidth: 6,
        borderColor: '#3e99ff',
        width: 60,
        height: 60,
        borderRadius: 60/2
    }

});
