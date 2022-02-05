import React from 'react';

import { Platform, StyleSheet, Text, TextInput, View, Button, FlatList, Modal, ToolbarAndroidBase } from 'react-native';

import ExoInput from './components/ExoInput'
import ExoItem from './components/ExoItem'
import TimerExercice from './components/TimerExercice'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      nbRepe: '',
      nbSer: '',
      timeRest: '',
      isVisible: false,
      visible: false,
      timeSend: 0,
      timeResetTimer: 0,
      pausedTimer: true,
      listExercices: [
        { id: 0, name: 'Planche', nbRepetition: '10', nbSerie: '4', time: '5' }
      ]
    }
  }

  showOn() {
    this.setState({
      isVisible: true
    })
  };


  startTimer = () =>{
		this.interval = setInterval(this.tick,1000);
    this.setState({ pausedTimer : false });
	}

  tick = () => {
    if(this.state.timeSend < 1){
      this.hideTimer()
    }
    else {
      this.setState({ timeSend : this.state.timeSend - 1 });
    }
  }

  pauseTimer(){
    clearInterval( this.interval );
    this.setState({ pausedTimer : true });
  }

  hideTimer() {
    this.setState({
      isVisible: false,
    })
    clearInterval(this.state.timeResetTimer)
  }

  addNewTodo() {
    let listExercices = this.state.listExercices

    listExercices.push({
      id: listExercices.length + 1,
      name: this.state.todoInput,
      nbRepetition: this.state.nbRepe,
      nbSerie: this.state.nbSer,
      time: this.state.timeRest,
      done: false
    });

    this.setState({
      listExercices,
      todoInput: '',
      nbRepe: '',
      nbSer: '',
      timeRest: ''
    });
  }

  removeExercice(item) {
    let listExercices = this.state.listExercices
    listExercices = listExercices.filter((listExercices) => listExercices.id !== item.id)
    this.setState({ listExercices })
  }

  sendTime(item) {
    this.setState({ timeSend: item.time })
  }


  render() {
    return (
      <View style={styles.screen}>

        <TimerExercice
          text={this.state.test}
          style={styles.timer}
          pausedTimer={this.state.pausedTimer}
          visible={this.state.isVisible}
          cancel={() => this.hideTimer()}
          time={this.state.timeSend}
          startTimer={() => this.startTimer()}
          pauseTimer={() => this.pauseTimer()}
        />

        <View style={styles.input}>
          <ExoInput
            textChange={todoInput => this.setState({ todoInput })}
            textChange1={nbSer => this.setState({ nbSer })}
            textChange2={nbRepe => this.setState({ nbRepe })}
            textChange3={timeRest => this.setState({ timeRest })}
            addNewTodo={() => this.addNewTodo()}
            todoInput={this.state.todoInput}
            nbRepe={this.state.nbRepe}
            nbSer={this.state.nbSer}
            timeRest={this.state.timeRest}
          />
        </View>

        <View style={styles.listContainer}>
          <FlatList

            style={styles.list}
            data={this.state.listExercices}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <ExoItem
                  style={styles.exo}
                  exerciceItem={item}
                  removeExercice={() => this.removeExercice(item)}
                  showOn={() => this.showOn()}
                  sendTime={() => this.sendTime(item)}

                />
              )
            }}
          />
        </View>

      </View>

    );
  };
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
  listContainer: {
    flex: 1,
    //backgroundColor:'green',
    width: '80%'
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
    marginVertical: 20
  },
  exo: {

  },
  timer: {
    flex: 1,

  },
  text: {
    fontSize: 50,
  },


});
