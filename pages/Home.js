// In App.js in a new project

import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Component } from 'react-native';


export default function Home({navigation}) {
	
  return (
    <View style={styles.container}>
		  
		<View style={styles.top}>
			<Text style={styles.top}>Seja Bem-Vindo!</Text>
			
			<Text style={styles.top}>Conheça a Etec de Itanhaém</Text>
		</View>
		  
		<TouchableOpacity onPress={() => navigation.navigate('Sobre')} style={styles.opcao}>
			<Text style={styles.btntxt}>Sobre</Text>
		</TouchableOpacity>
		  
		<Text style={styles.top}>Cursos Modulares</Text>
		  
		<TouchableOpacity onPress={() => navigation.navigate('Administracao')} style={styles.opcao}>
			<Text style={styles.btntxt}>Administração</Text>
		</TouchableOpacity>
		
		<TouchableOpacity onPress={() => navigation.navigate('Desenvolvimento')} style={styles.opcao}>
			<Text style={styles.btntxt}>Desenvolvimento de Sistemas</Text>
		</TouchableOpacity>
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
	
	opcao: {
		fontSize: 20,
		width: 300,
		height: 35,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 20,
		backgroundColor: '#7fb65e',
		justifyContent: 'center',
	},
	
	btntxt: {
		fontSize: 20,
	},
	
});
