# Friul-Bike Webapp

## ⚠️ Project Status Notice ⚠️

This repository is **no longer actively maintained**.  
Please be aware that some dependencies may be outdated or insecure.  

It is strongly recommended to ensure that your npm environment is updated before using this project.

## Description
This is a Node.js-based web application that allows users to explore and post comments regarding cycling routes in Friuli Venezia-Giulia (Italy). It provides interactive maps, route details, and a community feature for sharing feedback on specific locations.

## Features
- **Interactive Maps**: Visualize cycling routes (MTB, Road, Gravel) using Google Maps integration.
- **Route Details**: View elevation profiles, distances, and descriptions.
- **Community Comments**: Users can leave comments on specific waypoints (Start, Arrival, Points of Interest).
- **Services**: Locate bike shops and charging stations.
- **Security**: Protected against Stored XSS attacks.

## Installation & Usage

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (Node Package Manager)

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the application**:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Access the application**:
   Open your web browser and navigate to:
   [http://127.0.0.1:1337/Views/home.html](http://127.0.0.1:1337/Views/home.html)

## Configuration

### Google Maps API Key
The application uses Google Maps to display routes and markers. The current API key is invalid or expired. You must provide your own valid Google Maps JavaScript API Key.

1. **Get an API Key**: Visit the [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key) and generate a new key.
2. **Replace the Key**: Update the following files by replacing `YOUR_API_KEY` with your actual key in the `<script>` tag:
   - `public/Views/Paths/mtb/m1.html`
   - `public/Views/shop.html`
   - `public/Views/charger.html`

   Look for the line:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=myMap"></script>
   ```

## Project Structure

```
Friul-bike-nodejs/
├── app.js                  # Main server entry point (Express.js)
├── comments.json           # JSON database for storing user comments
├── public/                 # Static files served by Express
│   ├── Contents/           # Assets (Images, Fonts, KML tracks, JSON data)
│   ├── Css/                # Stylesheets
│   ├── Scripts/            # Client-side JavaScript logic
│   │   ├── DataBaseHandler.js  # Server-side DB logic (referenced by app.js)
│   │   └── ...
│   └── Views/              # HTML pages (Home, Paths, Gallery, etc.)
└── package.json            # Project dependencies and scripts
```

## Security
This project includes security measures to prevent Stored Cross-Site Scripting (XSS). User inputs (names, comments) are validated and sanitized server-side before being stored in the database.

## Technologies
- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript, jQuery
- **Data**: JSON-based flat file storage
- **APIs**: Google Maps API, Google KML Layers
