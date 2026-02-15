// mobile/types/types.ts

// ================================
// Data Types (untuk API, state, dll)
// ================================
export type Stat = {
  label: string;
  value: string;
  color: string;
};

export type Transaction = {
  item: string;
  qty: number;
  total: string;
};

export type InventoryItem = {
  id: number;
  nama: string;
  stok: number;
  harga: string;
  status: 'normal' | 'low';
};

export type Prediction = {
  barang: string;
  prediksi: string;
  urgency: 'normal' | 'high' | 'critical';
};

export type Transaksi = {
  tanggal: string;
  total: string;
  status: string;
};

export type SettingItem = {
  icon: string;
  label: string;
  rightIcon?: string;
  version?: string; // for version item
};

// ================================
// Layout & Component Types
// ================================
export interface MainLayoutProps {
  // title?: string;
  // subtitle?: string;
  activeTab: string;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  onNotificationPress?: () => void;
}

export interface TabNavigatorProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

// ================================
// Navigation Types
// ================================
export type RootStackParamList = {
  Dashboard: undefined;
  Inventory: undefined;
  Transaksi: undefined;
  Prediksi: undefined;
  Pengaturan: undefined;
  Notifikasi: undefined;
  // Tambahkan layar lain di sini
};
