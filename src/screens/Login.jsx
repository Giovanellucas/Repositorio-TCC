import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Logo from '../../assets/logo.png'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastroPress = () => {
        navigation.navigate('Cadastro');
    };
    const handleInicioPress = () => {
        navigation.navigate('Inicio');
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </View>
                <View>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        textContentType="emailAddress"
                        style={styles.input}
                        placeholder='Email'
                    />
                </View>
                <View>
                    <TextInput
                        onChangeText={setSenha}
                        value={senha}
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={handleInicioPress} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCadastroPress} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastro</Text>
                </TouchableOpacity>
              
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffff",
    },
    logoContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 25,
        paddingBottom: 5,
    },
    logo: {
        width: 400,
        height: 200,
        alignSelf: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        height: 50,
        marginVertical: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 12,
        textAlign: "center",
        fontSize: 20,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 12,
        paddingVertical: 15,
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
export default Login;
