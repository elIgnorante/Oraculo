import { View, Text } from 'react-native';
import Map from '../components/Map';

export default function IncidenciaDelictivaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>
        Mapa de Incidencia Delictiva
      </Text>
      <Map type="delictiva" />
    </View>
  );
}
