import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default class App extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Simples style={styles.f20} texto='Flexível!!'></Simples>
				<ParImpar numero={32}></ParImpar>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	f20: {
		fontSize: 20
	},
	f40: {
		fontSize: 40
	}
})
