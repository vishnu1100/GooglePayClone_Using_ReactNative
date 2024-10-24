import 'package:flutter/material.dart';
import 'package:googlepays/screens/splash.dart';


void main() {
  runApp(const Main());
}

class Main extends StatelessWidget {
  const Main({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      
      home:  SplashScreen(),
    );
  }
}

