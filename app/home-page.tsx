import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomePage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        {/* help */}
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={22} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.appName}>RBC Mobile</Text>
        <Text style={styles.greeting}>Good Afternoon</Text>

        {/* Search */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#fff" />
          <TextInput
            placeholder="Search RBC Mobile"
            placeholderTextColor="rgba(255,255,255,0.75)"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <View style={styles.actionRow}>
          <View style={styles.actionCard}>
            <MaterialCommunityIcons name="send" size={24} color="#0B63AE" />
            <Text style={styles.actionText}>Send</Text>
          </View>
          <View style={styles.actionCard}>
            <MaterialCommunityIcons name="swap-horizontal" size={24} color="#0B63AE" />
            <Text style={styles.actionText}>Transfer</Text>
          </View>
          <View style={styles.actionCard}>
            <MaterialCommunityIcons name="file-document-outline" size={24} color="#0B63AE" />
            <Text style={styles.actionText}>Pay bills</Text>
          </View>
        </View>

        {/* Accounts Overview */}
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Accounts Overview</Text>
            <Ionicons name="ellipsis-vertical" size={16} color="#5B6C7B" />
          </View>
        <View style={styles.sectionCard}>

          <View style={styles.accountRow}>
            <Text style={styles.accountName}>Chequing (0419)</Text>
            <View style={styles.accountRight}>
              <Text style={styles.accountAmount}>4,000,000.99</Text>
              <Ionicons name="chevron-forward" size={14} color="#9AA4AE" />
            </View>
          </View>

          <View style={styles.accountRow}>
            <Text style={styles.accountName}>Savings (0419)</Text>
            <View style={styles.accountRight}>
              <Text style={styles.accountAmount}>1,000,000.00</Text>
              <Ionicons name="chevron-forward" size={14} color="#9AA4AE" />
            </View>
          </View>

          <View style={styles.accountRow}>
            <Text style={styles.accountName}>MasterCard (0419)</Text>
            <View style={styles.accountRight}>
              <Text style={styles.accountAmount}>10,000.93</Text>
              <Ionicons name="chevron-forward" size={14} color="#9AA4AE" />
            </View>
          </View>

          <View style={styles.accountActionsRow}>
            <Text style={styles.linkText}>Open an account</Text>
            <View style={styles.verticalDivider} />
            <Text style={styles.linkText}>View all</Text>
          </View>
        </View>

        {/* Needs Attention */}
        <Text style={styles.sectionTitle}>Needs Attention</Text>

        <View style={styles.sectionCard}>
          <View style={styles.alertRow}>
            <MaterialCommunityIcons name="bell-alert-outline" size={18} color="#C1182D" />
            <View style={{ flex: 1, marginLeft: 6 }}>
              <Text style={styles.alertTitle}>Don’t fall for a bank impersonation scam</Text>
              <Text style={styles.alertSub}>RBC will NEVER ask you to send money or give y...</Text>
            </View>
            <Ionicons name="chevron-down" size={16} color="#5B6C7B" />
          </View>
        </View>

        {/* NOMI */}
        <Text style={styles.sectionTitle}>NOMI</Text>
        <View style={styles.sectionCardSmall}>
        </View>
      </View>

      {/* BOTTOM NAV */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tabItem}>
    <Ionicons name="home" size={22} color="#0061B1" />
    <Text style={styles.tabLabelActive}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/accounts-page")}>
    <Ionicons name="document-text-outline" size={22} color="#71808D" />
    <Text style={styles.tabLabel}>Accounts</Text>
  </TouchableOpacity>

        {/* center yellow */}
        <View style={styles.centerWrapper}>
          <View style={styles.centerButton}>
            <Ionicons name="chevron-up" size={26} color="#000" />
          </View>
        </View>

  <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/move-money" as any)}>
    <Ionicons name="cash-outline" size={22} color="#71808D" />
    <Text style={styles.tabLabel}>Move Money</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.tabItem}>
    <Ionicons name="menu-outline" size={22} color="#71808D" />
    <Text style={styles.tabLabel}>More</Text>
  </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F8',
  },
  header: {
    height: 173,
    paddingHorizontal: 18,
    paddingTop: 8,
    backgroundColor: '#0061B1',

  },
  helpButton: {
    position: 'absolute',
    right: 16,
    top: 45,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    marginTop: 55,
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
  },
  greeting: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
    marginTop: 2,
  },
  searchBar: {
    marginTop: 14,
    height: 44,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
  content: {
    paddingTop: 12,
    paddingBottom: 0,
    flex: 1,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 6,
    gap: 4,

  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2933',
  },
  sectionCard: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 6,
  },
  sectionCardSmall: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 6,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#374957',
    paddingHorizontal: 14,

  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E7EB',
  },
  accountName: {
    fontSize: 15,
    color: '#374957',
  },
  accountRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  accountAmount: {
    fontSize: 15,
    fontWeight: '400',
    color: '#374957',
  },
  accountActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 10,
    paddingTop: 6,
  },
  linkText: {
    color: '#0061B1',
    fontWeight: '500',
  },
  verticalDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#D0D7DE',
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    paddingVertical: 6,
  },
  alertTitle: {
    color: '#C1182D',
    fontWeight: '600',
    fontSize: 13,
  },
  alertSub: {
    color: '#697784',
    fontSize: 12,
  },
  bottomBar: {
    height: 64, 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    borderTopWidth: StyleSheet.hairlineWidth, 
    borderTopColor: '#E1E4E8',
  },
  tabItem: {
    alignItems: 'center',
    width: 62,
    flex : 1,
  },
  tabLabel: {
    fontSize: 11,
    color: '#71808D',
    marginTop: 2,
  },
  tabLabelActive: {
    fontSize: 11,
    color: '#0061B1',
    marginTop: 2,
  },
  centerWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    top: -26,
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFD600',
    borderWidth: 5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
