import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Button} from 'react-native'


export default class ExoItem extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            nbSer:this.props.exerciceItem.nbSerie,
            
        };
    };

    decrementNbSerie(){
        this.setState({nbSer : this.state.nbSer -1});
    }

    display(){
        this.props.showOn()

    }   
    sendTime(){
        this.props.sendTime()
        
    }

    combined(){
        this.display()
        this.decrementNbSerie()
        this.sendTime()
    }


    render(){
        const exerciceItem = this.props.exerciceItem
        
        return(
            <View style={styles.container}>
                <View style={styles.containerbutton}>
                   
                    <TouchableOpacity style={styles.item}>
                        <Text style={{fontSize:30,}} >
                            {exerciceItem.name}
                        </Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                    onPress={()=> this.props.removeExercice()}
                    style={styles.buttonRemove}
                    >
                        <Text style={styles.buttonRemoveText}>
                        X 
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.bandeauInfo}>

                    <View style={styles.serieLeft}>
                            <TouchableOpacity
                            onPress={() => this.combined() }
                            >
                                <Text 
                                style={styles.serieLeftText}>
                                {this.state.nbSer}
                                </Text>
                                
                            </TouchableOpacity>
                        </View > 

                    <View style={styles.info}>

                        < View style={styles.textContainer} >
                                <Text>
                                Nombre de série 
                                </Text>
                                <Text>
                                Nombre de rép 
                                </Text>
                                <Text>
                                    Temps de repos 
                                </Text>
                        </View>

                        < View style={styles.containerVariable} >
                                <Text style={styles.textVariable}>
                                    {exerciceItem.nbSerie}
                                </Text>
                                <Text style={styles.textVariable}>
                                    {exerciceItem.nbRepetition}
                                </Text>
                                <Text style={styles.textVariable}>
                                    {exerciceItem.time}
                                </Text>
                        </View>

                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'blue',
    },
    containerbutton:{
        flex:1,
        flexDirection:'row',
    },

    item:{
        flex:1,
    },

    buttonRemoveText:{
        //backgroundColor:'red',
        flex:0.2,
        fontSize:20,
        color:'red'
    },
    buttonRemove:{
        alignItems:'center',
        justifyContent:'center',
        
        flex:0.2
    },
    info:{
        flex:1.1,
        flexDirection:"row",
    },
    bandeauInfo:{
        flex:1,
        flexDirection:'row',
        marginBottom: 20,
        borderColor: "#2e2e2e",
        borderWidth:2,
        paddingVertical:5,
    
    },
    serieLeft:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    },
    serieLeftText:{
        fontSize: 50,
        color: '#3e99ff',
    },
    containerVariable:{
        marginLeft:10,
        alignItems:"center",
        justifyContent:"space-around",
    },
    textVariable:{
        fontSize:18,
        color:'#063872',
    },
    textContainer:{
        justifyContent:"space-around",
        paddingVertical:3,
    },

});

