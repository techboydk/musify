# Musify

Musify is a React-based music web application that leverages the YouTube API to provide users with an engaging music streaming experience. The application features responsive design, online/offline status detection, and playlist management.

## Features

- **Responsive Design**: The application adapts to different screen sizes, providing an optimized experience for both mobile and desktop users.
- **Online/Offline Detection**: The application notifies users when they go offline.
- **Playlist Management**: Users can create and manage playlists.
- **YouTube API Integration**: Fetches music data and streams directly from YouTube.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Styled Components**: Utilized for styling the application components.
- **YouTube API**: For fetching and streaming music data.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/techboydk/musify.git
   cd musify
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

## Project Structure

- **App Component**: The main component that manages responsiveness, online/offline status, and routing.
- **Layout Component**: The primary layout for the application.
- **SearchPage Component**: Allows users to search for music.
- **Player2 Component**: A shared component for the music player.
- **StateProvider**: Context and reducer for managing global state.
- **api.js**: Contains functions for interacting with the YouTube API.
- **constant.js**: Contains constants such as playlist keywords.

## Key Files and Directories

- **src/App.js**: The main entry point of the application.
- **src/Layout.js**: Layout component.
- **src/components/SearchPage.js**: Search page component.
- **src/shared/player2.js**: Shared player component.
- **src/utils/StateProvider.js**: Global state management.
- **src/utils/api.js**: API interaction functions.
- **src/utils/constant.js**: Constant values used across the application.

## Usage

1. **Search Music**: Use the search functionality to find and play music from YouTube.
2. **Manage Playlists**: Create and manage your playlists.
3. **Responsive Design**: The application will adjust based on the device being used.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## Contact

For any inquiries or feedback, please contact [Contact Me](mailto:003yadavdipesh@gmail.com).
