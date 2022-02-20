import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  HeaderPerfial: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  FotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  NomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  FotoPublicacao: {
    height: 400,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconLike: {
    width: 25,
    height: 25,
  },
  btnSend: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: '#000',
  },
  descRodape: {
    color: '#000',
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15,
  },
});
