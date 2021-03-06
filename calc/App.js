import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {                                                          // Estado inicial da calculadora
  displayValue: '0',                                                            // Estado inicial do display
  clearDisplay: false,                                                          // Corresponde se o display precisa ser limpo ou não após uma ação
  operation: null,                                                              // Armazena a operação que será utilizada
  values: [0, 0],                                                               // Armazena operandos
  current: 0                                                                    // Indice do Array da linha anterior, permite saber qual valor está sendo "setado"
}

export default class App extends Component {
  state = { ...initialState }                                                   // Operador Spread, fez um clone do objeto initialState

  addDigit = n => {                                                             // Add digito quando clicado
    //console.debug(typeof this.state.displayValue)                             // Verificar tipos dos valores digitados através do console
    
    const clearDisplay = this.state.displayValue === '0'                        // Se display só tiver "0" ou se clearDisplay for "true" o display será limpo
    || this.state.clearDisplay

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {  // Verifica se já tem um "." digitado para não permitir a digitação de dois pontos
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue            // Limpa display se clearDisplay for "true", senão insere o valor digitado pelo usuário
    const displayValue = currentValue + n                                       // Concatena os valores digitados
    this.setState({ displayValue, clearDisplay: false })                        // clearDisplay passa a ser "falso"

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]                                     // Faz um clone dos valores
      values[this.state.current] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {                                                         // Limpa tela da calculadora quando solicitado
    this.setState ({ ...initialState })
  }

  setOperation = operation => {

    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })              // Limpa o display após clicar em uma nova operação, quando já se tem uma "setada"
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)   // Concatena, analisa e executa a operação
      } catch (e) {
        values[0] = this.state.values[0] 
      }

      values[1] = 0
      this.setState({ 
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,                                                     // Limpa o display após apertar "=" e inserir outro valor
        //clearDisplay: !equals,
        values,
       })
    } 
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
    flexDirection: 'row',                                                        //Flexiona os componentes em linhas
    flexWrap: 'wrap',
  }
});
