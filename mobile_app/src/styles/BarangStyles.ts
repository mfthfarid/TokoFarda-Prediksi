// mobile/styles/ScreenStyles/BarangStyles.ts
import { StyleSheet } from 'react-native';

export const BarangStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
    paddingBottom: 70, // Memberi ruang untuk TabNavigator
    paddingHorizontal: 16, // Padding umum dari MainLayout
  },
  addButton: {
    flexDirection: 'row',
    marginVertical: 16,
    padding: 12,
    backgroundColor: '#FF6B35',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  barangItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginVertical: 6,
    borderRadius: 8,
  },
  itemLeft: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  itemPrice: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  itemRight: {
    marginLeft: 12,
  },
  stokBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  stokNormal: {
    backgroundColor: '#E8F5E9',
  },
  stokLow: {
    backgroundColor: '#FFEBEE',
  },
  stokText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
});
