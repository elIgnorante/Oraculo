import React from 'react';
import { View, Text } from 'react-native';

type MapProps = {
  type: 'delictiva' | 'vial' | 'vigilancia' | 'alto-riesgo';
};

const Map = ({ type }: MapProps) => {
  // Aquí puedes integrar algún servicio de mapas, como Google Maps o Mapbox
  // Y ajustar los datos según el tipo de incidencia
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
      <Text style={{ textAlign: 'center', margin: 10 }}>
        {`Mapa de ${type}`}
      </Text>
      {/* Integración de un mapa real va aquí */}
    </View>
  );
};

export default Map;
