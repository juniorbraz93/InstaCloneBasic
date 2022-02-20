import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.Header}>
      <TouchableOpacity>
        <Image source={require('../../img/logo.png')} style={styles.Logo} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../../img/send.png')} style={styles.Send} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
