import React from 'react'
import { 
    Text,
    StyleSheet, 
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native'

type props = {
    title: string
} & TouchableOpacityProps

export const Button = ({ title, ...rest }: props) => {

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            {...rest}  //todas as propriedades do meu button, estou despejando aqui, ou seja, 
                       //na chamada desse button eu posso acessar qualquer propriedade
        >
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#A370F7',
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
    },    
})

