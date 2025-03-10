import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';
import { Bell, Globe, Moon, Shield } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Bell size={20} color="#1a1a1a" />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <Switch />
        </View>
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Moon size={20} color="#1a1a1a" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <Pressable style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Globe size={20} color="#1a1a1a" />
            <Text style={styles.settingText}>Language</Text>
          </View>
          <Text style={styles.settingValue}>English</Text>
        </Pressable>
        <Pressable style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Shield size={20} color="#1a1a1a" />
            <Text style={styles.settingText}>Privacy Policy</Text>
          </View>
        </Pressable>
      </View>

      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
    paddingLeft: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1a1a1a',
    marginLeft: 12,
  },
  settingValue: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  version: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 'auto',
    paddingBottom: 16,
  },
});