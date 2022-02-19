import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button, FlatList, Modal, TouchableOpacity, ToolbarAndroidBase } from 'react-native';
import { Audio } from 'expo-av';
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
      isVisibleInput: false,
      listExercices: [
        { id: 0, name: 'Planche', nbRepetition: '10', nbSerie: '4', time: '60' }
      ]
    }

  }

  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentMode: true,
      //staysActiveInBackground: true

    })
    this.sound = new Audio.Sound();

    this.sound.loadAsync(require('./assets/count-5to1.mp3'), { shouldPlay: false }, false)
  }

  async playSound() {

    await this.sound.playAsync()
    //await this.sound.unloadAsync()
  }
  showExoInput = () => {
    this.setState({
      isVisibleInput: true
    })
  };
  closeExoInput = () => {
    this.setState({
      isVisibleInput: false
    })
  };

  showTimer() {
    this.setState({
      isVisible: true
    })
  };

  startTimer = () => {
    this.interval = setInterval(this.tick, 1000);
    this.setState({ pausedTimer: false });
  }

  tick = () => {
    if (this.state.timeSend < 7 && this.state.timeSend > 5) {
      this.playSound()
    }
    if (this.state.timeSend < 1) {
      this.hideTimer()

    }
    else {
      this.setState({ timeSend: this.state.timeSend - 1 });
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.setState({ pausedTimer: true });
  }

  hideTimer() {
    this.sound.unloadAsync()
    this.sound.loadAsync(require('./assets/count-5to1.mp3'), { shouldPlay: false }, false)
    this.setState({
      isVisible: false,
    })
    this.pauseTimer()
  }

  addNewTodo() {

    if (this.state.todoInput && this.state.nbRepe && this.state.nbSer && this.state.timeRest) {
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
      this.setState({
        isVisibleInput: false
      })
    }
    else {
      console.log("empty")
    }

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
        <TouchableOpacity onPress={this.showExoInput}>
          <Text style={styles.addButtonText}>
            Add exercice
          </Text>
        </TouchableOpacity>
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
            visible={this.state.isVisibleInput}
            closeInput={() => this.closeExoInput()}
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
                  showTimer={() => this.showTimer()}
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
    backgroundColor: '#eeeded',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40


  },
  listContainer: {
    flex: 1,
    //backgroundColor:'green',
    width: '80%'
  },
  input: {

  },
  exo: {

  },
  timer: {
    flex: 1,

  },
  text: {
    fontSize: 50,
  },
  addButtonText: {
    color: '#2d2a2c',
    fontSize: 25,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#3e99ff',
    marginVertical: 40
  }


});
