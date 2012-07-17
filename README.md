# PhotoMapper

PhotoMapper is a simple mobile application that allows you to take pictures and view them in a list or on a map. This app is meant as an example of how to organize and build a Cordova app. See more about Cordova here: [http://incubator.apache.org/cordova](http://incubator.apache.org/cordova/).

This project will evovle over a series of blog posts at: [http://neilgoodman.net](http://neilgoodman.net). All blog posts will be filed under the Cordova category.

## Installation

### JavaScript Build

The JavaScript build phase depends on node.js and npm, to get these tools for your platform you can visit the node.js website: [http://nodejs.org](http://nodejs.org/).

Run the following commands in a command-line terminal in the projects root directory (where `grunt.js` is located):

    npm install
    npm run-script grunt

This will compile the LESS, JavaScript, and HTML components and copy them to the www folder located in both the Android and iOS projects.

### Android Build

The Android build phase depends on either ant or Eclipse and the Android SDK. To get ant installed for you platform, visit the ant website: [http://ant.apache.org](http://ant.apache.org/). Eclipse can be installed form the Eclipse website: [http://www.eclipse.org](http://www.eclipse.org/). Follow these directions on the Android Developer site to get up and running with the Android SDK: [http://developer.android.com/sdk](http://developer.android.com/sdk/).

You will need to complete the JavaScript Build phase before you continue with the Android Build phase.

Navigate to the `android` directory under the project root and run the following commands in a command-line terminal to build using ant:

    ant debug

To build using Eclipse you will first need to import the the Android project. Open Eclipse, go to File > Import. Select 'Existing Projects into Workspace'. Click the 'Browse' button next to the 'Select root directory' textbox. Navigate to the android directory under the project root. Make sure the PhotoMapper project is checked in the 'Projects' list and click the 'Finish' button. You can now select the PhotoMapper project in the 'Package Explorer' view and click either the 'Debug' or 'Run' button to build the project and run it in an Android Emualtor.

### iOS Build

The iOS build phase depends on xCode to be installed. To get a copy of xCode you can visit Apple's Developer site here: [https://developer.apple.com/xcode](https://developer.apple.com/xcode/).

You will need to complete the JavaScript Build phase before you continue with the iOS Build phase.

Navigate to the `ios` directory under the project root and double-click the `PhotoMapper.xcodeproj` file to open the project in xCode. Click the 'Run' button to build the project and open it in the iPhone Simulator.

## License

Copyright © 2012 Neil Goodman Licensed under the MIT license.