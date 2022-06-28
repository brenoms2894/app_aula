import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import {Icon, Input, Text, Button} from "react-native-elements";
import { LoginService } from "../../service/LoginService";

const Login = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin= async (email:string, senha:string) => {
        console.log('handleLogin Email: ${email} - Senha: ${senha}');
        

        const respostaLogin = await LoginService(email, senha);
        if(!respostaLogin){
            Alert.alert(
                "Erro",
                "",
                [
                    { text: "OK" },
                    { text: "Não foi possível realizar o login"},
                ]
            );
        }else{
            navigation.navigate('Home', {
                screen: 'TabNavigationScreen',
                params:{
                    screen: 'Home',
                    params:{
                        token: respostaLogin.token,
                    }
                },
            });
        }
        
        //navigation.navigate('Home');
    }

    return(
        <View style= {styles.container}>
            <Text style= {styles.texto_entrada}>{'Bem-vindo'}</Text>
            <Input
                placeholder='E-mail'
                onChangeText={setEmail}
                value={email}
                leftIcon={<Icon name='user' color='#000' type='font-awesome' size={24}/>}          
                placeholderTextColor={'white'}       
            />
            <Input 
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                leftIcon={<Icon name='key' color='#000' type='entypo' size={24}/>}   
                placeholderTextColor={'white'}  
            />
            <Button 
                title='Entrar'
                onPress={() => handleLogin(email, senha)}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#7054B6',
        padding:16,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    texto_entrada:{
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        textAlign:'center'
    },
    input:{
        color: '#000'
    }
});

export default Login;