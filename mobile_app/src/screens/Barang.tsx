// mobile/screens/Barang.tsx
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BarangStyles } from '../styles/BarangStyles';

// Mock data barang
const mockBarang = [
  { id: 1, nama: 'Mie Instan', stok: 150, harga: 'Rp 8.000', status: 'normal' },
  {
    id: 2,
    nama: 'Gula Pasir 1kg',
    stok: 12,
    harga: 'Rp 22.500',
    status: 'low',
  },
  { id: 3, nama: 'Telur Ayam', stok: 45, harga: 'Rp 32.000', status: 'normal' },
  {
    id: 4,
    nama: 'Minyak Goreng 2L',
    stok: 3,
    harga: 'Rp 48.000',
    status: 'low',
  },
  {
    id: 5,
    nama: 'Beras Premium',
    stok: 200,
    harga: 'Rp 15.000',
    status: 'normal',
  },
];

const Barang = () => {
  return (
    <ScrollView style={BarangStyles.container}>
      {/* Tombol Tambah Barang */}
      <TouchableOpacity style={BarangStyles.addButton}>
        <Icon name="plus" size={24} color="#fff" />
        <Text style={BarangStyles.addButtonText}>Tambah Barang</Text>
      </TouchableOpacity>

      {/* Daftar Barang */}
      {mockBarang.map(item => (
        <View key={item.id} style={BarangStyles.barangItem}>
          <View style={BarangStyles.itemLeft}>
            <Text style={BarangStyles.itemName}>{item.nama}</Text>
            <Text style={BarangStyles.itemPrice}>{item.harga}</Text>
          </View>
          <View style={BarangStyles.itemRight}>
            <View
              style={[
                BarangStyles.stokBadge,
                item.status === 'low'
                  ? BarangStyles.stokLow
                  : BarangStyles.stokNormal,
              ]}
            >
              <Text style={BarangStyles.stokText}>Stok: {item.stok}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Barang;
