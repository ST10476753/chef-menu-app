Lesego Moagi
ST10476753
MASTS112 POE Part 1 

 
INTRODUCTION	3
USER INTERFACE DESIGN	3
THE APPLICATION WILL CONSIST OF THE FOLLOWING SCREENS:	3
WIREFRAMES	4
NAVIGATION FLOW	4
TECHNICAL IMPLEMENTATION PLAN	4
IMPORTS REQUIRED:	4
COMPONENTS:	5
STATE MANAGEMENT:	5
NAVIGATION:	6
CONCLUSION	6
REFERENCES	7


















Introduction

This document outlines the design and technical implementation plan for a mobile application developed in React Native. The application is designed for private chefs to create, manage, and display dynamic menus ensuring improved efficiency, keeping menus updated, and enhancing client presentation. The purpose of this document is to provide a detailed overview of the user interface design and technical implementation plan for the application.
User Interface Design
The application will consist of the following screens:

- Home Screen: Displays the chef's current menu, total number of items, and average price per course. This screen will provide an overview of the menu and allow chefs to quickly access key features.
- Add Menu Item Screen: Allows chefs to enter details of a new dish, including name, description, course, and price. This screen will include form validation to ensure accurate data entry.
- View Menu Screen: Shows the list of menu items, grouped by course, with filtering options. This screen will enable chefs to easily manage and update their menu items.
For Part 2, the application will be enhanced to allow chefs to enter and manage menu items directly from the Home Screen.
The screen will now include input fields for the following details:
•	Dish Name
•	Description
•	Course Selection (Starter, Main, Dessert)
•	Price
A Save button will be used to add the entered dish to a dynamically updated menu list.
Below the input section, a FlatList will display all added menu items and show the total number of menu itemscurrently on the menu.
The user interface will continue to use a consistent colour scheme and clear layout to ensure ease of use.



Wireframes

The wireframes for each screen will be created using a design tool such as Figma, Mockitt, or Sketch. The wireframes will provide a visual representation of the application's layout and user interface. [ The wireframes for the Home, Add Menu Item, and View Menu screens are provided in the appendix for reference]

- Home Screen Wireframe
- Add Menu Item Screen Wireframe: 
- View Menu Screen Wireframe
- Text fields: Dish Name, Description, Course, Price
- “Add Menu Item” button below the inputs
-  List of all added menu items displayed underneath
-  Text at the bottom showing “Total Items: X”

Navigation Flow

The navigation between screens will be handled using React Navigation's Stack Navigator. The navigation flow diagram will illustrate the intended flow of the application. [ Please see the appendix for the flow diagram]

- Navigation Flow Diagram
Technical Implementation Plan

The technical implementation plan includes the following:
 Imports Required:
    - React and React Native components (View, Text, TextInput, Button, FlatList)
    - useState hook for managing state
    - React Navigation libraries (NavigationContainer, createNativeStackNavigator)
    -React hooks: useState

Example code snippet for required imports in React Native:
import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 Components:
    - Home Screen: Displays total items and average price
    - Add Item Screen: Form to capture dish details
    - Menu Screen: List of dishes with filtering options
    -Contains input fields for the dish name, description, course, and price.
    -Includes a button to add the new item to the list.
    -Displays all menu items and shows the total count of items
 State Management:
The app will store data temporarily using the useState hook. Data will not be hardcoded or permanently stored.
Example:
const [menu, setMenu] = useState([]);
const [dish, setDish] = useState('');
const [description, setDescription] = useState('');
const [course, setCourse] = useState('');
const [price, setPrice] = useState('');
Function to Add a Menu Item:
const addMenuItem = () => {
  if (dish && description && course && price) {
    const newItem = { dish, description, course, price };
    setMenu([...menu, newItem]);
    setDish('');
    setDescription('');
    setCourse('');
    setPrice('');
  }
};
Displaying Menu Summary:
<Text>Total Menu Items: {menu.length}</Text>

Navigation:
For Part 2, the chef interacts mainly with the Home Screen, which now includes both the input fields and the menu display.
The Home Screen allows the chef to:
•	Add new menu items
•	View all added items in a list
•	See the total number of menu items
Navigation between multiple screens will be reintroduced in later parts of the project.

Conclusion

This part of the project adds functionality for chefs to enter, view, and track their menu items from the Home Screen.
The design ensures that all data is captured dynamically using React Native state management, enhancing the interactivity and usability of the app.

GitHub link:

https://github.com/ST10476753/chef-menu-app.git

YouTube link:

https://youtu.be/LJ82QvbfPIk






























References 
GeeksforGeeks (2023) ReactJS State Management with useState Hook in React. Available at: https://www.geeksforgeeks.org/reactjs/state-management-with-usestate-hook-in-react (Accessed: 4 September 2025).
Medium (2024) React Native Navigation Simplified: Best Practices and Tips. Available at: https://medium.com/@tusharkumar27864/react-native-navigation-simplified-best-practices-and-tips-748df1217a70(Accessed: 4 September 2025).
React.dev (2025) useState – React Documentation. Available at: https://react.dev/reference/react/useState (Accessed: 4 September 2025).
React Native (2025) Navigation. Available at: https://reactnative.dev/docs/next/navigation (Accessed: 4 September 2025).
React Navigation (2025) Stack Navigator. Available at: https://reactnavigation.org/docs/stack-navigator (Accessed: 4 September 2025).
ReactJS.org (2019) Using the State Hook. Available at: https://legacy.reactjs.org/docs/hooks-state.html (Accessed: 4 September 2025).

