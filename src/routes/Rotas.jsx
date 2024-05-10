import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Maquina from '../screens/Maquina';
import Inicio from '../screens/Inicio';

const Rotas = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />
                <Stack.Screen
                    name="Maquina"
                    component={Maquina}
                />
                 <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Rotas;
