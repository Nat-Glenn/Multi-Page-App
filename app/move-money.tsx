import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PHONE_MAX = 420;
const PRIMARY = "#0069d8";

const Rows = [
  { id: "1", title: "Transfer Between My Accounts", icon: "swap-horizontal-outline" },
  { id: "2", title: "Pay a Bill", icon: "document-text-outline" },
  { id: "3", title: "Interac E-Transfer", icon: "paper-plane-outline" },
  { id: "4", title: "Send to an RBC Client", icon: "person-circle-outline" },
  { id: "5", title: "Deposit a Cheque", icon: "camera-outline" },
  { id: "6", title: "Split with Friends", icon: "git-merge-outline" },
  { id: "7", title: "Cross-Border Transfer", icon: "swap-vertical-outline" },
  { id: "8", title: "International Money Transfer", icon: "globe-outline" },
] as const;

export default function MoveMoney() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      {/* Phone wrapper */}
      <View style={styles.phone}>
        <LinearGradient
        colors={["#0A5DB6", "#0B77DA"]}
        start={{ x:0, y:0 }}
        end={{ x:1, y:1 }}
        style={styles.header}
        >
          <View style={styles.headerTop}>
            <Text style={styles.appLabel}>RBC MMobile</Text>
            <View style={{ flexDirection: "row", gap: 14 }}>
              <Ionicons name="help-circle-outline" size={22} color="#fff"/>
              <Ionicons name="ellipsis-vertical" size={22} color="#fff"/>
            </View>
          </View>
          <Text style={styles.title}>Move Money</Text>
        </LinearGradient>

        {/* content */}
        <View style={{ flex:1}}>
          {Rows.map(r => (
            <TouchableOpacity key={r.id} activeOpacity={0.7} style={styles.row}>
              <View style={styles.leftIcon}>
                <Ionicons name={r.icon as any} size={22} color={PRIMARY}/>
              </View>

              {r.title.startsWith("Interac") ? (
                <Text style={styles.rowText}>
                  <Text style={{ fontStyle: "italic" }}>Interact</Text></Text>
              ) : (
                <Text style={styles.rowText}>{r.title}</Text>
              )}

              <Ionicons name="chevron-forward" size={18} color="#9AA4AE"/>
            </TouchableOpacity>
          ))}
      </View>
      {/* bottom bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/")}>
            <Ionicons name="home" size={22} color="#71808D" />
            <Text style={styles.tabLabel}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => router.push("/accounts-page")}>
            <Ionicons name="document-text-outline" size={22} color="#71808D" />
            <Text style={styles.tabLabel}>Accounts</Text>
          </TouchableOpacity>

          <View style={styles.centerWrapper} pointerEvents="none"> 
            <View style={styles.centerButton}>
              <Ionicons name="chevron-up" size={26} color="#000" />
            </View>
          </View>

          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="cash-outline" size={22} color="#0061B1" />
            <Text style={styles.tabLabelActive}>Move Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="menu-outline" size={22} color="#71808D" />
            <Text style={styles.tabLabel}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 screen: { flex: 1, backgroundColor: "#F3F6F8", alignItems: "center" },
  phone: { flex: 1, width: "100%", maxWidth: PHONE_MAX },

  header: {
    paddingTop: 40,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  appLabel: { color: "#DCEBFA", fontSize: 12 },
  title: { color: "#fff", fontSize: 26, fontWeight: "700" },

  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E8EB",
  },
  leftIcon: {
    width: 40, height: 40, borderRadius: 20,
    borderWidth: 1.5, borderColor: PRIMARY,
    alignItems: "center", justifyContent: "center",
    marginRight: 12, backgroundColor: "#fff",
  },
  rowText: { flex: 1, fontSize: 16, color: "#333" },

  bottomBar: {
    position: "relative",
    height: 64,
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#E1E4E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  centerWrapper: {
    position: "absolute",
    alignSelf: "center",
    top: -26,
    zIndex: 2,
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFD600",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#fff",
  },
  tabItem: { alignItems: "center", width: 62, flex: 1 },
  tabLabel: { fontSize: 11, color: "#71808D", marginTop: 2 },
  tabLabelActive: { fontSize: 11, color: "#0061B1", marginTop: 2 },
});
