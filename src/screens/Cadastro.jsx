
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastroPress = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);

        navigation.navigate('Inicio');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                onChangeText={setNome}
                value={nome}
                style={styles.input}
                placeholder='Nome'
            />
            <TextInput
                onChangeText={setEmail}
                value={email}
                textContentType="emailAddress"
                style={styles.input}
                placeholder='Email'
            />
            <TextInput
                onChangeText={setSenha}
                value={senha}
                style={styles.input}
                placeholder='Senha'
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={handleCadastroPress} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffff",
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

export default Cadastro;
