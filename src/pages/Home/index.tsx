import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';


type CategoriaType = {
    idCategoria: number;
    nomeCategoria: string;
    nomeImagem: string;
}

const Home=({route, navigation}) => {
    //const {token} = route.params;
    //console.log('token: ' + token);
    const { token } = route.params;
    const[categoria, setCategoria] = useState<CategoriaType[]>([]);

    useEffect(() => {

    }, []);

    const getDadosCategoria = async () => {
        AxiosInstance.get(
            `/categoria`,
            {headers: {"Authorization" : `Bearer ${token}`}}
        ).then(result=>{
            console.log('Dados da categoria: ' + JSON.stringify(result.data));
            setCategoria(result.data);
        });
    }

//export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll_categorias}>
                {
                    categoria.map((k, i)=> (
                <TouchableOpacity
                    onPress={ () => console.log(`Categoria ${k.nomeCategoria} foi clicada`)}
                >
                    <View style={styles.view_itens_categoria}>
                        <Text style={styles.texto_nome_categoria}>{k.nomeCategoria}</Text>
                    </View>
                </TouchableOpacity>
                ))
                }
                
            </ScrollView>
            <Text>{'Recentes'}</Text>
            
        </ScrollView>
        
        /*<View >
            <Text style={styles.text}> pagina Home</Text>
        </View>*/
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight:'bold'
    },
    scroll_categorias:{
        flexGrow:0,
    },
    view_itens_categoria:{
        width: 120,
        height: 120,
        backgroundColor: '#ff0000',
        alignContent: 'center',
        justifyContent: 'center',
    },
    botao_categoria:{
        alignItems: 'center',
        padding: 10,
    },
    texto_nome_categoria:{
        color: '#fdfafa',
        textAlign: 'center',
    },
    scroll_container_recente:{

    },
    card_container:{
        
    }
});