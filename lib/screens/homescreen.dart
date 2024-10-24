import 'package:flutter/material.dart';
import 'package:googlepays/screens/profilescreen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
  backgroundColor: Colors.transparent, // Set the background to transparent
  elevation: 0, // Flat app bar without shadows
  title: Row(
    children: [
      Image.asset(
        'assets/logo/icon.png', // Add the Google Pay logo here
        height: 80,
        width: 70,
      ),
      const SizedBox(width: 16), // Reduced size for better spacing
      const Expanded( // Use Expanded to take up remaining space
        child: Text(
          "Google Pay",
          style: TextStyle(
            color: Color.fromARGB(255, 65, 62, 62), // Black text to match the theme
            fontWeight: FontWeight.bold,
            fontSize: 27,
            fontStyle: FontStyle.italic,
          ),
          textAlign: TextAlign.center, // Center the text for better alignment
        ),
      ),
    ],
  ),
  actions: [
    IconButton(
      icon: const CircleAvatar(
        radius: 35, // Half of the desired size (70 / 2)
        backgroundImage: AssetImage('assets/images/profile.jpg'), // Path to your image
      ),
      iconSize: 70, // Sets the size of the button
      onPressed: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const profilescreen()), // Navigate to ProfileScreen
        ); // Profile icon action
      },
    ),
  ],
),



      extendBodyBehindAppBar: true, // Allow body to extend behind AppBar
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              height: 500,
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('assets/images/bg1.jpg'), // Path to your background image
                  fit: BoxFit.cover, // Ensures the image covers the entire container
                ),
              ),
              child: const Center(
                child: Text(
                  "",
                  style: TextStyle(fontSize: 24, color: Colors.white), // Change text color as needed
                ),
              ),
            ),
            SizedBox(
  width: 343,
  height: 259,
  child: Stack(
    children: [
      const Positioned(
        left: 0,
        top: 0,
        child: SizedBox(
          width: 59,
          height: 19,
          child: Text(
            'People',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.black,
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: FontWeight.w500,
              height: 0,
            ),
          ),
        ),
      ),
      Positioned(
        left: 12,
        top: 31,
        child: SizedBox(
          width: 45,
          height: 66,
          child: Stack(
            children: [
              const Positioned(
                left: 2,
                top: 49,
                child: Text(
                  'Revan',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Color(0xFF3C4043),
                    fontSize: 14,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w500,
                    height: 0,
                  ),
                ),
              ),
              Positioned(
                left: 0,
                top: 0,
                child: Container(
                  width: 45,
                  height: 45,
                  decoration: ShapeDecoration(
                    image: const DecorationImage(
                      image: NetworkImage("https://via.placeholder.com/45x45"),
                      fit: BoxFit.cover,
                    ),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    shadows: [
                      const BoxShadow(
                        color: Color(0x4C000000),
                        blurRadius: 3,
                        offset: Offset(1, 2),
                        spreadRadius: 0,
                      )
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      Positioned(
        left: 102,
        top: 31,
        child: SizedBox(
          width: 45,
          height: 66,
          child: Stack(
            children: [
              const Positioned(
                left: 6,
                top: 49,
                child: Text(
                  'Jack',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Color(0xFF3C4043),
                    fontSize: 14,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w500,
                    height: 0,
                  ),
                ),
              ),
              Positioned(
                left: 0,
                top: 0,
                child: Container(
                  width: 45,
                  height: 45,
                  decoration: const ShapeDecoration(
                    color: Color(0xFFD9D9D9),
                    shape: OvalBorder(),
                    shadows: [
                      BoxShadow(
                        color: Color(0x4C000000),
                        blurRadius: 3,
                        offset: Offset(1, 2),
                        spreadRadius: 0,
                      )
                    ],
                  ),
                ),
              ),
              const Positioned(
                left: 18,
                top: 13,
                child: Text(
                  'J',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w500,
                    height: 0,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      Positioned(
        left: 192,
        top: 31,
        child: SizedBox(
          width: 45,
          height: 66,
          child: Stack(
            children: [
              const Positioned(
                left: 4,
                top: 49,
                child: Text(
                  'Scott',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Color(0xFF3C4043),
                    fontSize: 14,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w500,
                    height: 0,
                  ),
                ),
              ),
              Positioned(
                left: 0,
                top: 0,
                child: Container(
                  width: 45,
                  height: 45,
                  decoration: const ShapeDecoration(
                    color: Color(0xFFD9D9D9),
                    shape: OvalBorder(),
                    shadows: [
                      BoxShadow(
                        color: Color(0x4C000000),
                        blurRadius: 3,
                        offset: Offset(1, 2),
                        spreadRadius: 0,
                      )
                    ],
                  ),
                ),
              ),
              const Positioned(
                left: 17,
                top: 13,
                child: Text(
                  'S',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.black,
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w500,
                    height: 0,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      Positioned(
        left: 282,
        top: 31,
        child: SizedBox(
          width: 45,
          height: 66,
          child: Stack(
            children: [
              const Positioned(
                left: 10,
                top: 49,
                child: Text(
                  'Elly',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Color(0xFF3C4043),
                    fontSize: 14,
                    fontFamily: 'Inter',
                    fontWeight: FontWeight.w500,
                    height: 0,
                  ),
                ),
              ),
              Positioned(
                left: 0,
                top: 0,
                child: Container(
                  width: 45,
                  height: 45,
                  decoration: ShapeDecoration(
                    image: const DecorationImage(
                      image: NetworkImage("https://via.placeholder.com/45x45"),
                      fit: BoxFit.fill,
                    ),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30),
                    ),
                    shadows: [
                      const BoxShadow(
                        color: Color(0x4C000000),
                        blurRadius: 3,
                        offset: Offset(1, 2),
                        spreadRadius: 0,
                      )
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      
     
      
      
      
      
    ],
  ),
),
            Container(
              height: 200,
              color: const Color.fromARGB(255, 54, 244, 54),
              child: const Center(child: Text("Section 1", style: TextStyle(fontSize: 24, color: Colors.white))),
            ),
            Container(
              height: 200,
              color: const Color.fromARGB(255, 54, 244, 54),
              child: const Center(child: Text("Section 2", style: TextStyle(fontSize: 24, color: Colors.white))),
            ),
            Container(
              height: 200,
              color: const Color.fromARGB(255, 54, 244, 54),
              child: const Center(child: Text("Section 3", style: TextStyle(fontSize: 24, color: Colors.white))),
            ),
          ],
        ),
      ),
    );
  }
}
