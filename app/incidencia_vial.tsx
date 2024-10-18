import { View, Text } from 'react-native';
import Map from '../components/Map';

export default function IncidenciaVialScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
        Mapa de Incidencia Vial
      </Text>
      <Map type="vial" />
    </View>
  );
}
