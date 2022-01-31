import React  from 'react';
import {Platform, StyleSheet, Text,TextInput, View, Button,FlatList, ToolbarAndroidBase,Modal,Component} from 'react-native';

export default class ModalTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  
            visible:this.props.show,
        }
    }

      render() {
          return(
              
                <Modal visible={this.state.visible} animationType="slide">
                    <View >
                        <Text>timer</Text>
                    </View>
                </Modal>
                
          )
      }
}
