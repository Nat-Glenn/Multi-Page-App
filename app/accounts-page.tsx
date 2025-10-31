import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Alert,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type NavItem = {
  key: string;
  label: string;
  icon: string;
};

const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Home", icon: "home-outline" },
  { key: "accounts", label: "Accounts", icon: "card-outline" },
  { key: "move", label: "Move Money", icon: "send-outline" },
  { key: "more", label: "More", icon: "menu-outline" },
];

const AccountsPage: React.FC = () => {
  const onLockCard = () => Alert.alert("Lock Your Card pressed");
  const onTransactions = () => Alert.alert("Transactions pressed");

  return (
    <View style={[styles.container, Platform.OS === "web" && styles.webPhone]}>
      {/* Top header */}
      <View style={styles.topBar}>
        <Text style={styles.leftChevron}>{"‹"}</Text>
        <View style={styles.titleWrap}>
          <Text style={styles.titleText}>My Accounts</Text>
        </View>
        <Ionicons
          name="help-circle-outline"
          size={22}
          color="#fff"
          style={styles.helpIcon}
        />
      </View>

      {/* Teal header + card */}
      <View style={styles.headerArea}>
        <View style={styles.cardArea}>
          <View style={styles.carouselBack} />
          <View style={styles.accountCard}>
            <View style={styles.cardTopRow}>
              <View>
                <Text style={styles.accountName}>Julians cash</Text>
                <Text style={styles.accountNumber}>00002-5680046</Text>
              </View>
              <TouchableOpacity style={styles.optionsDot}>
                <Ionicons name="ellipsis-vertical" size={18} color="#666" />
              </TouchableOpacity>
            </View>
            <View style={styles.balanceWrap}>
              <Text style={styles.balanceText}>126.43</Text>
            </View>
          </View>
          <View style={styles.carouselDots}>
            <View style={styles.dotInactive} />
            <View style={styles.dotActive} />
          </View>
        </View>

        {/* main content card */}
        <View style={styles.contentWrap}>
          <View style={styles.segmentCard}>
            <View style={styles.segmentControl}>
              <TouchableOpacity
                style={styles.segmentLeft}
                onPress={onTransactions}
              >
                <Text style={styles.segmentLeftText}>Transactions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.segmentRight}>
                <Text style={styles.segmentRightText}>Details</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.detailsArea}
              contentContainerStyle={{ paddingBottom: 140 }}
            >
              <Text style={styles.sectionLabel}>MANAGE CARD</Text>
              <TouchableOpacity style={styles.listRow} onPress={onLockCard}>
                <Text style={styles.listText}>Lock Your Card</Text>
                <Ionicons name="chevron-forward" size={18} color="#999" />
              </TouchableOpacity>

              <Text style={[styles.sectionLabel, { marginTop: 18 }]}>
                BALANCE
              </Text>
              <View style={styles.balanceRow}>
                <Text style={styles.smallLabel}>Current Balance</Text>
                <Text style={styles.largeValue}>126.43</Text>
              </View>
              <View style={styles.balanceRow}>
                <Text style={styles.smallLabel}>Authorized Overdraft</Text>
                <Text style={styles.largeValue}>500.00</Text>
              </View>

              {/* filler spacing */}
              <View style={{ height: 24 }} />
            </ScrollView>
          </View>
        </View>
      </View>

      {/* bottom nav */}
      <View style={styles.bottomNavWrap}>
        <View style={styles.bottomNav}>
          {/* left nav items */}
          <View style={styles.navGroup}>
            {NAV_ITEMS.slice(0, 2).map((n) => (
              <View style={styles.navItem} key={n.key}>
                <Ionicons
                  name={n.icon as any}
                  size={22}
                  color={n.key === "accounts" ? "#0b79ff" : "#777"}
                />
                <Text
                  style={[
                    styles.navLabel,
                    n.key === "accounts" && { color: "#0b79ff" },
                  ]}
                >
                  {n.label}
                </Text>
              </View>
            ))}
          </View>

          {/* center FAB */}
          <View style={styles.centerFabWrap}>
            <TouchableOpacity style={styles.centerFab}>
              <Ionicons name="chevron-up" size={22} color="#111" />
            </TouchableOpacity>
          </View>

          {/* right nav items */}
          <View style={styles.navGroup}>
            {NAV_ITEMS.slice(2).map((n) => (
              <View style={styles.navItem} key={n.key}>
                <Ionicons
                  name={n.icon as any}
                  size={22}
                  color="#777"
                />
                <Text style={styles.navLabel}>{n.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountsPage;

const hair = StyleSheet.hairlineWidth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS !== "ios" ? StatusBar.currentHeight ?? 0 : 0,
  },
  webPhone: {
    width: 390,
    alignSelf: "center",
    borderLeftWidth: hair,
    borderRightWidth: hair,
    borderColor: "#e6e6e6",
    backgroundColor: "#fff",
  },
  topBar: {
    height: 66,
    backgroundColor: "#07807a",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftChevron: { color: "#fff", fontSize: 28, width: 30 },
  titleWrap: { flex: 1, alignItems: "center" },
  titleText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  helpIcon: { marginRight: 4 },
  headerArea: {
    backgroundColor: "#07807a",
    paddingBottom: 18,
    paddingTop: 10,
    alignItems: "center",
  },
  cardArea: { width: "92%", alignItems: "center" },
  carouselBack: {
    position: "absolute",
    top: 8,
    left: 0,
    right: 0,
    height: 88,
    borderRadius: 14,
    backgroundColor: "transparent",
  },
  accountCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginTop: 6,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
      },
      android: { elevation: 3 },
      web: { boxShadow: "0 6px 18px rgba(0,0,0,0.08)" } as any,
    }),
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  accountName: { fontSize: 18, fontWeight: "600", color: "#111" },
  accountNumber: { fontSize: 12, color: "#9aa1a1", marginTop: 6 },
  optionsDot: { padding: 6 },
  balanceWrap: { marginTop: 18, alignItems: "center", justifyContent: "center" },
  balanceText: { fontSize: 44, color: "#111", fontWeight: "300" },
  carouselDots: { marginTop: 8, flexDirection: "row", alignItems: "center" },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.6)",
    margin: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.95)",
    margin: 4,
  },
  contentWrap: {
    width: "92%", 
    alignSelf: "center",
    marginTop: 12,
  },
  segmentCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.03,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
      web: { boxShadow: "0 2px 10px rgba(0,0,0,0.04)" } as any,
    }),
  },
  segmentControl: { flexDirection: "row", padding: 10, backgroundColor: "#fff" },
  segmentLeft: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 10,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: hair,
    borderColor: "#ececec",
  },
  segmentLeftText: { color: "#333", fontWeight: "600" },
  segmentRight: {
    flex: 1,
    backgroundColor: "#0b79ff",
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentRightText: { color: "#fff", fontWeight: "700" },
  detailsArea: { paddingHorizontal: 12, paddingTop: 8, flexGrow: 1 },
  sectionLabel: { fontSize: 12, color: "#9aa1a1", marginTop: 12, marginBottom: 8, paddingLeft: 2 },
  listRow: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: hair,
    borderBottomColor: "#eee",
  },
  listText: { fontSize: 16, color: "#111" },
  balanceRow: { paddingVertical: 14, borderBottomWidth: hair, borderBottomColor: "#f1f1f1" },
  smallLabel: { fontSize: 13, color: "#8a8a8a" },
  largeValue: { fontSize: 20, fontWeight: "700", marginTop: 6 },
  bottomNavWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: hair,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  bottomNav: {
    maxWidth: 390,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: Platform.OS === "ios" ? 22 : 12,
    paddingHorizontal: 12,
    position: "relative",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "40%", // left and right groups each take ~40% leaving 20% for center FAB
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navLabel: { fontSize: 11, marginTop: 4, color: "#666" },
  centerFabWrap: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -28 }],
    top: -28,
  },
  centerFab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ffd93b",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#fff",
    ...Platform.select({
      ios: { shadowColor: "#000", shadowOpacity: 0.12, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
      android: { elevation: 4 },
      web: { boxShadow: "0 8px 18px rgba(0,0,0,0.12)" } as any,
    }),
  },
});
