import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

// TouchableOpacityProps (Que é uma interface). 
// TouchableOpacityProps -> são todas as propriedades que um TouchableOpacity possui. 
interface ButtonProps extends TouchableOpacityProps{
    title: string;
}


// ...rest -> pega e traz todas as propriedade de um ButtonProps.
export function Button({title,...rest} : ButtonProps){
    return (
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7}
        {...rest}
    >
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({    
    
    button: {
        backgroundColor:'#A370F7',
        padding:15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop:20
    },
    buttonText:{
        color: '#fff',
        fontSize: 17,
        fontWeight:'bold'
    }

});