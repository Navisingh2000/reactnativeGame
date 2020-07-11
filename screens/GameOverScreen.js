import React from 'react';
import { View, StyleSheet, Text, Button, Image} from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return(
        <View style={styles.screen} >
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer} >
                <Image 
                    fadeDuration={300} //by default
                    style={styles.image} 
                    source={{uri:'https://abrahamswallet.com/wp-content/uploads/2017/12/samuel-ferrara-117219-1180x770.jpg'}}
                    // source={require('../assets/success.png')} 
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed &nbsp;
                    <Text style={styles.highlight}>
                        {props.guessRounds} 
                    </Text>
                    &nbsp;tries to guess &nbsp;
                    <Text style={styles.highlight}>
                        {props.userNumber}
                    </Text>
                    <Text> Fancy Another Game ?</Text>
                </BodyText>
            </View>
            <View style={styles.button} >
                {/* <Button color="violet" title="NEW GAME" onPress={props.onRestart}/> */}
                <MainButton buttonStyle={styles.buttonNewGame} onPress={props.onRestart}>
                    NEW GAME
                </MainButton>

            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    button:{
        marginVertical: 10
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        height: 300,
        width: 300,
        overflow:'hidden',
        marginVertical: 30
    },  
    image: {
        width:'100%',
        height:'100%',
    },
    highlight: {
        color: Colors.accent,
        fontFamily:'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal:30,
        marginVertical:10
    },
    resultText: {
        textAlign:'center',
        fontSize:15
    },
    buttonNewGame:{
        backgroundColor:'darkslateblue'
    }
});

export default GameOverScreen;