// MapComponent.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  // Coordenadas centradas en Aguascalientes
  const region = {
    latitude: 21.8854, // Latitud de Aguascalientes
    longitude: -102.2916, // Longitud de Aguascalientes
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  // Array de marcadores (ejemplo)
  const markers = [
    { id: '1', latitude: 21.885, longitude: -102.291, title: 'Zona 1', description: 'Descripción de la zona 1' },
    { id: '2', latitude: 21.887, longitude: -102.293, title: 'Zona 2', description: 'Descripción de la zona 2' },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        showsUserLocation={false} // No mostrar ubicación del usuario
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;


