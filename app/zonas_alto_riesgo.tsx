import { View, Text } from 'react-native';
import Map from '../components/Map';

export default function ZonasAltoRiesgoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
        Mapa de Zonas de Alto Riesgo
      </Text>
      <Map type="alto-riesgo" />
    </View>
  );
}
