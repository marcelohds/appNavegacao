// In App.js in a new project
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Component } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home.js';
import Sobre from './pages/Sobre.js';
import Administracao from './pages/Administracao.js';
import Desenvolvimento from './pages/Desenvolvimento.js';


const Stack = createNativeStackNavigator();

function App() {
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: '#7fb65e'},}}>
				<Stack.Screen name="Home" component={Home}/>
				<Stack.Screen name="Sobre" component={Sobre}/>
				<Stack.Screen name="Administracao" component={Administracao}/>
				<Stack.Screen name="Desenvolvimento" component={Desenvolvimento}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
