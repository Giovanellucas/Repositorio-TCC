// Inicio.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
    const [busca, setBusca] = useState('');
    const [maquinas, setMaquinas] = useState([
        { id: '1', nome: 'Trator', valor: 'R$ 100/hora' },
        { id: '2', nome: 'Colheitadeira', valor: 'R$ 200/hora' },
        { id: '3', nome: 'Plantadeira', valor: 'R$ 150/hora' },
    ]);

    const handleCadastroMaquinaPress = () => {
        navigation.navigate('CadastroMaquina');
    };

    const handleSuportePress = () => {
        console.log('Abrir tela de suporte ao cliente');
    };

    const handleAgendarPress = (id) => {
        console.log('Agendar máquina com ID:', id);
    };

    const renderMaquina = ({ item }) => (
        <TouchableOpacity onPress={() => handleAgendarPress(item.id)} style={styles.maquinaContainer}>
            <Text style={styles.maquinaNome}>{item.nome}</Text>
            <Text style={styles.maquinaValor}>{item.valor}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setBusca}
                value={busca}
                style={styles.input}
                placeholder='Buscar máquinas'
            />
            <FlatList
                data={maquinas}
                renderItem={renderMaquina}
                keyExtractor={item => item.id}
                style={styles.maquinasList}
            />
            <TouchableOpacity onPress={handleCadastroMaquinaPress} style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar Máquina</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSuportePress} style={styles.button}>
                <Text style={styles.buttonText}>Suporte ao Cliente</Text>
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
    input: {
        height: 50,
        marginVertical: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 12,
        textAlign: "center",
        fontSize: 20,
    },
    maquinasList: {
        marginTop: 20,
    },
    maquinaContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 10,
        marginVertical: 5,
    },
    maquinaNome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    maquinaValor: {
        fontSize: 16,
        color: 'green',
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

export default Inicio;
