# react-native-simple-app
A simple react native project that consists of:
1) A home page with a list of 'posts', with the infinite scroll view and drag to refresh capability.
2) Click the post to navigate to the post's page.
3) Click the author's name or photo to navigate to author's profile page.

## Environment
```shell
"npm": "8.11.0", # Globally installed
"node": "^16", # Globally installed
"yarn": "1.22.19", # Globally installed
"@react-navigation/elements": "^1.3.3",
"@react-navigation/native": "^6.0.10",
"@react-navigation/native-stack": "^6.6.2",
"@reduxjs/toolkit": "^1.8.2",
"axios": "^0.27.2",
"react": "18.2.0",
"react-native": "0.71.11",
"react-native-device-info": "^9.0.2",
"react-native-reanimated": "^3.3.0",
"react-native-safe-area-context": "^4.5.3",
"react-native-screens": "^3.21.0",
"react-redux": "^7.2.8",
"redux-flipper": "^2.0.1",
"styled-components": "^5.3.5"
```

## Install dependencies

```shell
nvm use 16
npm install --global yarn # Or use npx before each yarn command

# Install dependencies, start metro bundler and build app
yarn clean-start
yarn ios # Will run application to latest iPhone simulator
```

## App functionality

### Home screen
![Home screen](screenshots/1.png)
### Profile screen
![Profile screen](screenshots/2.png)
### Refresh
![Refresh](screenshots/3.png)
### Infinite scroll - Get next page
![Next page](screenshots/4.png)
