import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Padrao from '../estilo/Padrao'

export default (props) => <Text style={Padrao.ex}>Arrow: {props.texto}</Text>

/*
export default function(props) {
    return <Text style={styles.f40}>{props.texto}</Text>
}
*/

// Função Arrow
/*
export default (props) => 
    <View>
        <Text style={styles.f40}>Arrow 1: {props.texto}</Text>
        <Text style={styles.f40}>Arrow 2: {props.texto}</Text>
    </View>
*/


// Retornando dois componentes com Array
/*
export default (props) => [
        <Text key={1} style={styles.f40}>Arrow 1: {props.texto}</Text>,
        <Text key={2} style={styles.f40}>Arrow 2: {props.texto}</Text>
]
*/
