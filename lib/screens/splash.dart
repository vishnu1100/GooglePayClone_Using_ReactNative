import 'dart:async';
import 'package:flutter/material.dart';
import 'homescreen.dart'; // Adjust the import based on your file structure

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    
    // Delay of 3 seconds before navigating to the next screen
    Future.delayed(const Duration(seconds: 10), () {
      Navigator.of(context).pushReplacement(MaterialPageRoute(
        builder: (context) => const HomeScreen(),
      ));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset(
                  'assets/images/intro2.gif', // Adjust the path to your logo
                 width: 700, // Increased width
                  height: 700, // Increased height
                  
                ),
              ],
            ),
          ),
          const Positioned(
            bottom: 50.0,
            left: 0,
            right: 0, // Allowing it to stretch to the right
            child: Center( // Center the text within the Positioned widget
              child: Text(
                ' Powered by Not Google ',
                style: TextStyle(
                  fontSize: 25,
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),),
        ],
      ),
    );
  }
}
