// mobile/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard'; // Layar utama dengan MainLayout
import Notifikasi from '../screens/Notifikasi';
import { RootStackParamList } from '../types/types';
// import DetailProduk from '../screens/DetailProduk';
// import TambahProduk from '../screens/TambahProduk';

// export type RootStackParamList = {
//   Dashboard: undefined;
//   DetailProduk: { id: number };
//   TambahProduk: undefined;
//   Notifikasi: undefined;
// };

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        {/* Layar utama dengan MainLayout */}
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }} // Sembunyikan header default karena sudah ada di MainLayout
        />

        {/* Layar-layar tambahan dengan header bawaan Stack */}
        {/* <Stack.Screen name="DetailProduk" component={DetailProduk} options={{ title: 'Detail Produk' }} />
        <Stack.Screen name="TambahProduk" component={TambahProduk} options={{ title: 'Tambah Produk Baru' }} /> */}
        <Stack.Screen
          name="Notifikasi"
          component={Notifikasi}
          options={{ title: 'Notifikasi' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
