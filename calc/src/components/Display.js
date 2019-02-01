import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({                          // Criando estilos
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgb(0,0,0,0.6)',
        alignItens: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default props =>                                    // Componente funcional
    <View style={styles.display}>                           
        <Text style={styles.displayValue}                  
            numberOfLines={1}>{props.value}</Text>         
    </View>                                                // Componente com uma linha apenas e passa valor como parametro