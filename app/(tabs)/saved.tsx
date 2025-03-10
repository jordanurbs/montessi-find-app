import { View, Text, StyleSheet } from 'react-native';
import { Heart } from 'lucide-react-native';

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Heart size={48} color="#999" />
      <Text style={styles.title}>No Saved Schools Yet</Text>
      <Text style={styles.subtitle}>
        Save your favorite schools to quickly access them later
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#1a1a1a',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});