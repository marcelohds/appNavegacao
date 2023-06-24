// In App.js in a new project

import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


export default function Administracao() {
	
  return (
    <View style={styles.container}>
        <Text style={styles.top}>Sobre o Curso</Text>
		<Text style={styles.info}>O TÉCNICO EM ADMINISTRAÇÃO é o profissional que adota postura ética na execução da rotina administrativa, na elaboração do planejamento da produção e materiais, recursos humanos, financeiros e mercadológicos. Realiza atividades de controle e auxilia nos processos de direção, utilizando ferramentas da informática. Fomenta ideias e práticas empreendedoras. Desempenha suas atividades observando as normas de segurança, saúde e higiene do trabalho, bem como as de preservação ambiental.</Text>
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

