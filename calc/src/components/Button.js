import React from 'react'                                   //Usa-se sempre que houver JSX
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,         //Divide a tela em 4 colunas
        width: Dimensions.get('window').width / 4,          //Divide a largura em 4 linhas
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },

    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }

})

export default props => {
    const stylesButton = [styles.button]                                 // Array com varios estilos
    if (props.double) styles.button.push(styles.buttonDouble)            // Condicional para verificar se o botao é duplo
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>              {/* stylesButton -> variavel que participa das condicionais acima */}
        </TouchableHighlight>
    )
}