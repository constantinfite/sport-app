//import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import React  from 'react';
import {Platform, StyleSheet, Text,TextInput, View, Button,FlatList,ToolbarAndroidBase,Component,TouchableHighlight,TouchableOpacity} from 'react-native';
import  Modal from "react-native-modal";

export default class TimerExercice extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          //visible:this.props.visible,
          timerDuration: props.time,
          touchable:false,
        };
      }

      static getDerivedStateFromProps(nextProps, prevState){
        
        if(nextProps.time!==prevState.time){
          return { timerDuration: nextProps.time};

       }
      };

      showOff(){
        this.setState({visible:false})        
      }

      /*componentDidMount() {
        console.log("DidMount")
        this.myInterval= setInterval(() =>{
          this.setState({
            timerDuration : this.state.timerDuration - 1
          })
        },1000);
        
      };*/
      combined(){
        this.state.touchable=true,
        this.props.onStart()
      }
      combinedCancel(){
        this.state.touchable=false,
        this.props.cancel()
      }

      render() {
       //const handleTimerComplete = () => alert('Custom Completion Function');
       //const {timerDuration}=this.state
          return(
              
                <Modal isVisible={this.props.visible} >
                    <View style={styles.timer}>

                        <View style={styles.timerContainer}>
                          <TouchableOpacity onPress={() => this.combined()} disabled={this.state.touchable}>
                            <Text style={styles.timerText} >
                              {this.state.timerDuration}
                            </Text>
                          </TouchableOpacity>
                        </View>


                        <View style={styles.boutonBack}>
                            <TouchableOpacity onPress={()=> this.combinedCancel()}>
                                  <Text style={styles.boutonBackText} >
                                    Back
                                  </Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Modal>
          );
      };
};


const styles = StyleSheet.create({

  timer:{
    flex: 1,
     alignItems:'center',
     justifyContent:'center',
  },

  timerContainer:{
    flex:1,
    justifyContent:'center',
  },
  timerText:{
    color:'white',
    fontSize:180,
  },
  boutonBack:{
    
    justifyContent:'center',
    flex:0.2,
    
  },
  boutonBackText:{
    padding:20,
    fontSize:40,
    fontWeight:"600",
    color:'white',
    borderRadius:20,
    borderWidth:5,
    borderColor:'#3e99ff',
  },
  
});