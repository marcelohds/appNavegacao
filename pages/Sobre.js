// In App.js in a new project

import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function Sobre() {
	
  return (
    <View style={styles.container}>
		<Text style={styles.top}>Sobre a Etec de Itanhaém</Text>
		<Text style={styles.info}>A ETEC de Itanhaém iniciou suas atividades em 01/08/2006, como Classe Descentralizada da ETEC “Adolpho Berezin” de Mongaguá, através de um convênio do Governo do Estado de São Paulo com a atual administração da Prefeitura Municipal de Itanhaém.</Text>
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
