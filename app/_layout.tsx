import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#25292e',
          width: 240,
        },
        drawerLabelStyle: {
          color: '#fff',
        },
        drawerActiveTintColor: '#4CAF50',
      }}
    >
      {/* Mapeo de rutas directamente a los archivos */}
      <Drawer.Screen
        name="index"
        options={{ title: 'Inicio' }}
      />
      <Drawer.Screen
        name="incidencia_delictiva"
        options={{ title: 'Incidencia Delictiva' }}
      />
      <Drawer.Screen
        name="incidencia_vial"
        options={{ title: 'Incidencia Vial' }}
      />
      <Drawer.Screen
        name="vigilancia"
        options={{ title: 'Vigilancia' }}
      />
      <Drawer.Screen
        name="zonas_alto_riesgo"
        options={{ title: 'Zonas de Alto Riesgo' }}
      />
    </Drawer>
  );
}
