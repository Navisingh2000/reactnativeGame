import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    // Send buttonStyle and textStyle as props of styling objects
    // onButtonPress is compulsory
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={{...styles.button,...props.buttonStyle}}>
                <Text style={{...styles.buttonText,...props.textStyle}} >
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:Colors.primary,
        paddingVertical:6,
        paddingHorizontal:15,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
})

export default MainButton;