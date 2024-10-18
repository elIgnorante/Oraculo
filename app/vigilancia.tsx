import { View, Text } from 'react-native';
import Map from '../components/Map';

export default function VigilanciaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
        Vigilancia - Cámaras de Seguridad
      </Text>
      <Map/>
    </View>
  );
}
