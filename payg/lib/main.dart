import 'package:flutter/material.dart';
import 'package:payg/screens/splash.dart';

void main() {
  runApp(const Main());
}

class Main extends StatelessWidget {
  const Main({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      
      home:  SplashScreen(),
    );
  }
}

