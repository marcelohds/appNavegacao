// In App.js in a new project

import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function Desenvolvimento() {
	
  return (
    <View style={styles.container}>
      	<Text style={styles.top}>Sobre o Curso</Text>
		<Text style={styles.info}>O TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS é o profissional que analisa e projeta sistemas. Constrói, documenta, realiza testes e mantém sistemas de informação. Utiliza ambientes de desenvolvimento e linguagens de programação específica. Modela, implementa e mantém bancos de dados.</Text>
    </View>
  );
	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8dc969',
	},
	
	top: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		marginTop: 10,
	},
	
	info: {
		fontSize: 20,
		marginTop: 10,
		marginLeft: 15,
		marginRight: 15,
		textAlign:'justify'
	},
});
