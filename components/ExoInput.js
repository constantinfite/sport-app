import React ,{useState} from 'react'
import {
    Text,
    StyleSheet,
    TextInput,
    View,
    Button,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
 

const ExoInput = props =>{

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>     
            
                <TextInput 
                style={styles.input} 
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput} 
                placeholder="Exercice" 
                />
                <TextInput 
                style={styles.input} 
                onChangeText={(nbSer) => props.textChange1(nbSer)}
                value={props.nbSer} 
                placeholder="Nombre de série" 
                keyboardType='numeric'
                />
                <TextInput 
                style={styles.input} 
                onChangeText={(nbRepe) => props.textChange2(nbRepe)}
                value={props.nbRepe} 
                placeholder="Nombre de répétition" 
                keyboardType='numeric'
                />
                <TextInput 
                style={styles.input} 
                onChangeText={(timeRest) => props.textChange3(timeRest)}
                value={props.timeRest} 
                placeholder="Temps de récupération" 
                keyboardType='numeric'
                />
                <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
                    <Text style={styles.addButtonText}>
                    ADD
                    </Text>  
                </TouchableOpacity>
            
            </View>
        </TouchableWithoutFeedback>
        )
}
const styles = StyleSheet.create({
    
    container :{
        
        alignItems: 'center',
             
       },
    input: {
         width:'60%',
         borderBottomColor:'black',
         borderBottomWidth:1,
         marginBottom:20,
         paddingBottom:10,
         
         
       },
    buttonContainer:{
        flexDirection:"row-reverse",
        justifyContent:'space-between',
        width:'40%'
    },
    addButton:{

    },
    addButtonText:{
        color:'#555555',
        
        fontSize:20,
        padding:10,
        borderWidth:3,
        borderRadius:20,
        borderColor:'#555555'
    }
    
});

export default ExoInput