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
            { uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609201.png', label: 'More' }
          ].map((icon, index) => (
            <View key={index} style={styles.iconWrapper}>
              <Image source={{ uri: icon.uri }} style={styles.iconimage} />
              <Text style={styles.iconLabel}>{icon.label}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>People</Text>

        <View style={styles.iconContainer}>
          {/* First Row of Icons */}
          {[
            { uri: 'https://i.pinimg.com/236x/00/c6/a0/00c6a06f401a5468521b72678b9e6716.jpg', label: 'Rocky' },
            { uri: 'https://media.vogue.co.uk/photos/64916f00ad4b7de8bf024aa2/2:3/w_2560%2Cc_limit/Mia_200623_lascape%2520MIA.jpg', label: 'Mia' },
            { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQessajFGlfsaMHQPc5N_NLTpyQecw-1ZVlbg&s', label: 'Jhonny' },
            { uri: 'https://wallpapers.com/images/hd/dani-daniels-in-grey-tank-shirt-baks3onwmnv6muf2.jpg', label: 'Dani' }
          ].map((icon, index) => (
            <View key={index} style={styles.iconWrapper}>
              <Image source={{ uri: icon.uri }} style={styles.peopleimage} />
              <Text style={styles.iconLabel}>{icon.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.iconContainer}>
          {/* Second Row of Icons */}
          {[
            { uri: 'https://i.pinimg.com/564x/58/69/12/586912499e6d51122e26b8940c05dc1a.jpg', label: 'Briga' },
            { uri: 'https://i.pinimg.com/564x/76/ef/00/76ef006b3ab7496d3500ebb7a2cfd186.jpg', label: 'Khmer' },
            { uri: 'https://i.pinimg.com/736x/6f/49/c7/6f49c76f50e88124dba6f764c14d469b.jpg', label: 'Aanba' },
            { uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609201.png', label: 'More' }
          ].map((icon, index) => (
            <View key={index} style={styles.iconWrapper}>
              <Image source={{ uri: icon.uri }} style={styles.peopleimage} />
              <Text style={styles.iconLabel}>{icon.label}</Text>
            </View>
          ))}
        </View>


        <Text style={styles.sectionTitle}>Businesses</Text>

<View style={styles.iconContainer}>
  {/* First Row of Icons */}
  {[
    { uri: 'https://cdn-icons-png.flaticon.com/128/355/355999.png', label: 'PlayStore' },
    { uri: 'https://cdn-icons-png.flaticon.com/128/5977/5977576.png', label: 'Apple' },
    { uri: 'https://cdn-icons-png.flaticon.com/128/16021/16021158.png', label: 'Amazon' },
    { uri: 'https://cdn-icons-png.flaticon.com/128/3448/3448339.png', label: 'Redbus' }
  ].map((icon, index) => (
    <View key={index} style={styles.iconWrapper}>
      <Image source={{ uri: icon.uri }} style={styles.peopleimage} />
      <Text style={styles.iconLabel}>{icon.label}</Text>
    </View>
  ))}
</View>

<View style={styles.iconContainer}>
  {/* Second Row of Icons */}
  {[
    { uri: 'https://cdn-icons-png.flaticon.com/128/1176/1176838.png', label: 'Recharge' },
    { uri: 'https://cdn-icons-png.flaticon.com/128/9922/9922103.png', label: 'OYO' },
    { uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670147.png', label: 'Youtube' },
    { uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609201.png', label: 'More' }
  ].map((icon, index) => (
    <View key={index} style={styles.iconWrapper}>
      <Image source={{ uri: icon.uri }} style={styles.peopleimage} />
      <Text style={styles.iconLabel}>{icon.label}</Text>
    </View>
  ))}
</View>





        {/* Recent Transactions */}
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Recent Transactions</Text> */}
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>Transaction History</Text>
            <Text style={styles.transactionAmount}>- $50.00</Text>
          </View>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>Check Bank Balance</Text>
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
    marginVertical: 10,
  },
  iconWrapper: {
    alignItems: 'center',          // Center icons and labels
  },

  
  iconimage: {
    width: 40,                 
    height: 40,       
    resizeMode: 'cover',
      

  },

  peopleimage: {
    width: 60,                 
    height: 60,
    borderRadius: 25, 

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
