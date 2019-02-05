import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  addDigit = n => {                                                             // Add digito quando clicado
    this.setState({ displayValue: n })
  }

  clearMemory = () => {                                                         // Limpa tela da calculadora quando solicitado
    this.setState ({ displayValue: '0' })
  }

  setOperation = operation => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}/>                              {/* Recebe o estado inicial do App, '0' */}
        <View style={styles.buttons}>
        <Button label='AC' triple onClick={this.clearMemory} />
        <Button label='/' operation onClick={this.setOperation} />              {/* lable é capturado pelo componente Button para mostrar em tela quando clicado*/}
        <Button label='7' onClick={this.addDigit} />                            {/* lable é capturado pelo componente Button para mostrar em tela quando clicado*/}
        <Button label='8' onClick={this.addDigit} />                            {/* lable é capturado pelo componente Button para mostrar em tela quando clicado*/}
        <Button label='9' onClick={this.addDigit} />
        <Button label='*' operation onClick={this.setOperation} />              
        <Button label='4' onClick={this.addDigit} />
        <Button label='5' onClick={this.addDigit} />
        <Button label='6' onClick={this.addDigi} />
        <Button label='-' operation onClick={this.setOperation} />
        <Button label='1' onClick={this.addDigit} />
        <Button label='2' onClick={this.addDigit} />
        <Button label='3' onClick={this.addDigit} />
        <Button label='+' operation onClick={this.setOperation} />
        <Button label='0' double onClick={this.addDigit} />
        <Button label='.' onClick={this.addDigit} />
        <Button lable='=' operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',                               //Flexiona os componentes em linhas
    flexWrap: 'wrap',
  }
});
