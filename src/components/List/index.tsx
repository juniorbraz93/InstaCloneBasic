import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const List = (props: any) => {
  function carregaIcone(likeada: any) {
    return likeada
      ? require('../../img/likeada.png')
      : require('../../img/like.png');
  }

  function mostaLikes(Likers: any) {
    if (Likers === 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {Likers} {Likers > 1 ? 'currtidas' : 'Curtida'}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.HeaderPerfial}>
        <Image source={{uri: props.data.imgperfil}} style={styles.FotoPerfil} />
        <Text style={styles.NomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
        resizeMode="contain"
        source={{uri: props.data.imgPublicacao}}
        style={styles.FotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.iconLike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../../img/comment.png')}
            style={styles.iconLike}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../../img/send.png')}
            style={styles.iconLike}
          />
        </TouchableOpacity>
      </View>

      {mostaLikes(props.data.likers)}

      <Text style={styles.nomeRodape}>{props.data.nome}</Text>
      <Text style={styles.descRodape}>{props.data.descricao}</Text>
    </View>
  );
};

export default List;
