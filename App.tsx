import React from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.header}>
          <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png' }} style={styles.headerImage} />
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/127679210?v=4' }} style={styles.headeruserImage} />
          <Image source={{ uri: 'https://media.istockphoto.com/id/1203754461/vector/finance-concept.jpg?s=612x612&w=0&k=20&c=S80TqBYMS_BpCDLBUCwa-M38QpO9kklfcRKKPH6hfq0=' }} style={styles.image} />
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.iconContainer}>
          {/* First Row of Icons */}
          {[
            { uri: 'https://cdn-icons-png.flaticon.com/128/1287/1287558.png', label: 'Send' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/2482/2482945.png', label: 'Request' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/901/901388.png', label: 'Pay' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/942/942748.png', label: 'Apply' }
          ].map((icon, index) => (
            <View key={index} style={styles.iconWrapper}>
              <Image source={{ uri: icon.uri }} style={styles.iconimage} />
              <Text style={styles.iconLabel}>{icon.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.iconContainer}>
          {/* Second Row of Icons */}
          {[
            { uri: 'https://cdn-icons-png.flaticon.com/128/625/625599.png', label: 'Save' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/9405/9405882.png', label: 'Invest' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/196/196578.png', label: 'History' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/1633/1633721.png', label: 'More' }
          ].map((icon, index) => (
            <View key={index} style={styles.iconWrapper}>
              <Image source={{ uri: icon.uri }} style={styles.iconimage} />
              <Text style={styles.iconLabel}>{icon.label}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>People</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.actionContainer}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Send Money</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Request Money</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Pay Bills</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>Paid to John Doe</Text>
            <Text style={styles.transactionAmount}>- $50.00</Text>
          </View>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>Received from Jane Smith</Text>
            <Text style={styles.transactionAmount}>+ $100.00</Text>
          </View>
          {/* Add more transaction items here as needed */}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',         // Align icons horizontally
    justifyContent: 'space-around', // Spread icons evenly
    padding: 16,
    borderRadius: 10,              // Rounded edges for the view
    marginVertical: 20,
  },
  iconWrapper: {
    alignItems: 'center',          // Center icons and labels
  },
  iconimage: {
    width: 30,       
    height: 30,         
    resizeMode: 'cover',
  },
  iconLabel: {
    fontSize: 12,                 // Small text below icons
    color: '#333',
    marginTop: 4,  
    fontWeight: 'bold',            // Space between icon and label
  },
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  
  header: {
    alignItems: 'flex-start',  
    borderRadius: 8,
    marginBottom: 16,
  },
  headerImage: {
    width: 90,              
    height: 50,              
  },
  headeruserImage: {
    width: 40,                 
    height: 40,
    borderRadius: 25,         
    position: 'absolute',                      
    right: 10,                 
  },
  image: {
    width: '100%',       
    height: 100,         
    resizeMode: 'cover',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 16,
    backgroundColor: '#00796b',
    borderRadius: 8,
    marginRight: 8,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
  },
  transactionCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionText: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00796b',
  },
});

export default App;
