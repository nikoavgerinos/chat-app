# 📱 React Native Mobile Chat App

Welcome to the React Native Mobile Chat App project! This repository hosts a robust chat application for mobile devices built with React Native, Expo, and Google Firestore Database. The app allows real-time conversations, image sharing, and location sharing.

## 📝 Project Description

This project aims to develop a fully functional chat application for mobile devices using React Native, Expo, and Google Firestore Database. The app will provide users with a seamless chat experience, allowing them to communicate in real-time, share images, and provide their location information.

## ✨ Features

- User profile setup with name and background color selection.
- Real-time chat interface with text input and message sending.
- Additional communication features: sending images and location data.
- Online and offline message storage.
- Authentication via Google Firebase authentication.
- Image selection from the device's library and camera capture.
- Storage of images in Firebase Cloud Storage.
- Location data sharing through map view.
- Chat interface powered by the Gifted Chat library.
- Codebase with comprehensive comments.

## 🛠️ Technical Requirements

- Development in React Native.
- Utilization of Expo for app development.
- Adherence to provided screen design guidelines.
- Storage of chat conversations in Google Firestore Database.
- Anonymous user authentication through Firebase.
- Local storage of chat conversations.
- Image selection and capture functionality.
- Image storage in Firebase Cloud Storage.
- Retrieval of user location data.
- Accessibility considerations in design and development.

## 🎨 Screen Design & Assets

### Design Specifications

- Evenly distributed vertical and horizontal spacing.
- App title: Font size 45, font weight 600, font color #FFFFFF.
- "Your name": Font size 16, font weight 300, font color #757083, 50% opacity.
- "Choose background color": Font size 16, font weight 300, font color #757083, 100% opacity.
- Color options HEX codes: #090C08; #474056; #8A95A5; #B9C6AE.
- Start chatting button: Font size 16, font weight 600, font color #FFFFFF, button color #757083.

For assets, please refer to [Assets available here](#).

## 🚀 Getting Started

To run this project on your local machine, follow the steps below:

1. **Install Node.js:** If you haven't already, install Node.js on your device.

2. **Install Expo globally:** Open your terminal and run the following command to install Expo globally:

```
npm install -g expo-cli
```

3. **Sign up for an Expo Account:** You'll need an Expo Account to run the app on your device.

4. **Clone this repository:** Clone this repository to your local machine.

5. **Install Dependencies:** Navigate to the project folder in your terminal and run:

```
npm install
```

6. **Configure Firebase:**

- Sign in to your Google Firebase account.
- Create a new Project (uncheck "Enable Google Analytics for this project").
- Set up a Firestore Database, choosing a region from the dropdown and starting in production mode.
- In the Firebase Console, go to the Rules tab and change `allow read, write: if false;` to `allow read, write: if true;`.

7. **Register your app in Firebase:** Follow the provided directions to register your app in the Firebase Project Overview section.

8. **Add Firebase SDK to your project:**

- Install the Firebase package by running:

  ```
  npm install firebase
  ```

- Initialize Firebase in your project by copying and pasting the provided Firebase configuration into the `App.js` file of the downloaded repository.

9. **Platform Setup:**

- For Android development on Windows, download and install Android Studio.
- For iOS development on macOS, ensure you have Xcode installed or use an iOS Simulator.

10. **Run the App:** Finally, run the app by executing the following command in your terminal:

```
expo start
```

Follow the instructions to access the app via the iOS Simulator or Android Emulator.

Now, you should have the project up and running on your device, ready for development and testing.
