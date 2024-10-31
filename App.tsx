import React from 'react';
import type { PropsWithChildren } from 'react';
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
    <SafeAreaView >
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <ScrollView contentContainerStyle={styles.container}>
  
        <View style={styles.header}>
        <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png' }} style={styles.headerImage} />
         <Image source={{ uri: 'https://avatars.githubusercontent.com/u/127679210?v=4' }} style={styles.headeruserImage} />
      
        
      
         
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
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
 
  container: {
    padding: 16,
  },
  
  header: {
    alignItems: 'flex-start',  
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    color: 'grey',
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  section: {
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
