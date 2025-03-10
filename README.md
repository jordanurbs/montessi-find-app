# Montessi Find App

A React Native application built with Expo, featuring a modern UI and seamless user experience.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd montessi-find-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Expo development server. You can then:
- Scan the QR code with your mobile device (using Expo Go app)
- Press 'i' to open in iOS simulator
- Press 'a' to open in Android emulator
- Press 'w' to open in web browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build:web` - Build the web version of the app
- `npm run lint` - Run linting checks

## Project Structure

The project uses:
- [Expo Router](https://docs.expo.dev/router/introduction/) for navigation
- [React Native](https://reactnative.dev/) for the UI framework
- [TypeScript](https://www.typescriptlang.org/) for type safety
- Various Expo packages for enhanced functionality

## Dependencies

Key dependencies include:
- `@expo/vector-icons` - Icon library
- `expo-blur` - Blur effects
- `expo-linear-gradient` - Gradient effects
- `react-native-reanimated` - Advanced animations
- `react-native-gesture-handler` - Gesture handling
- `@expo-google-fonts/inter` - Google Fonts integration

## Troubleshooting

If you encounter any issues:

1. Clear the Metro bundler cache:
```bash
npm start -- --clear
# or
yarn start --clear
```

2. Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
# or
yarn install
```

3. Make sure your Expo CLI is up to date:
```bash
npm install -g expo-cli
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.