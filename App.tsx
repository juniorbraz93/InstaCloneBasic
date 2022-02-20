/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  useColorScheme,
  FlatList,
} from 'react-native';

import Header from './src/screens/Header';
import List from './src/components/List';

const App = () => {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Rafael',
      descricao: 'Mais um dia de muito bug',
      imgperfil:
        'https://s2.glbimg.com/C46kC4p_orz4V_gx-9Lowmg8pos=/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg',
      imgPublicacao:
        'https://blog.estacio.br/wp-content/webp-express/webp-images/uploads/2020/11/estacio_sociedadedeensinosupoeriorestaciodesaltda_image_247-780x450.jpeg.webp',
      likeada: true,
      likers: 1,
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao:
        'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1,
    },
    {
      id: '5',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32,
    },
  ]);
  return (
    <View style={styles.Container}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <List data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
