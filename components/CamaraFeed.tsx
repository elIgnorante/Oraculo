import React from 'react';
import { View, Text, Image } from 'react-native';

type CameraFeedProps = {
  cameraId: string;
};

const CameraFeed = ({ cameraId }: CameraFeedProps) => {
  return (
    <View>
      <Text>Mostrando feed de cámara: {cameraId}</Text>
      {/* Aquí puedes agregar un componente para reproducir el feed en tiempo real */}
      <Image source={{ uri: `http://example.com/camera/${cameraId}/stream` }} style={{ width: '100%', height: 300 }} />
    </View>
  );
};

export default CameraFeed;
