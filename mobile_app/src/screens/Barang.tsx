// mobile/screens/Barang.tsx
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BarangStyles } from '../styles/BarangStyles';
import { useProducts } from '../hooks/useProducts';

const Barang = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <View style={BarangStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B35" />
        <Text>Memuat data barang...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={BarangStyles.errorContainer}>
        <Text style={BarangStyles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={BarangStyles.container}>
      {/* Tombol Tambah Barang */}
      <TouchableOpacity style={BarangStyles.addButton}>
        <Icon name="plus" size={24} color="#fff" />
        <Text style={BarangStyles.addButtonText}>Tambah Barang</Text>
      </TouchableOpacity>

      {/* Daftar Barang */}
      {products.map(item => (
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
