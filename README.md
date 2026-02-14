# smk-clean-bc

An interactive map application for planning electric vehicle routes across British Columbia. Built with [SMK (Simple Map Kit)](https://github.com/bcgov/smk) and powered by [Leaflet](https://leafletjs.com/).

## Overview

The CleanBC Fleet Route Planner is an easy-to-use web-based map interface designed to help fleet operators plan efficient routes while accounting for electric vehicle charging station availability. The application displays government and public EV charging stations, government facilities and integrates route planning to assist with trip planning across the province.

## Features

- **Interactive Map Interface**: Zoom and pan across British Columbia to explore EV charging stations and government facilities
- **Route Planning**: Plan optimal or fastest routes with:
  - Turn-by-turn directions
  - Print-friendly route instructions
- **Charging Station Data**: View locations and details for:
  - Government charging stations 
  - Public EV charging stations across BC 
- **Address Search**: Find locations using BC Geocoder integration
- **Dynamic Layers**: Toggle visibility of charging stations and government buildings
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bcgov/smk-clean-bc.git
   cd smk-clean-bc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To view and test the application locally:

```bash
npm run view
```

This will:
- Start a local HTTP server on port 8080
- Automatically open the application in your default browser

Access the application at `http://localhost:8080`


## Configuration

The application is configured through `smk-config.json`, which defines:

- **Map Viewer**: Leaflet-based viewer with initial zoom level and extent centered on BC
- **Base Map**: Streets basemap from ESRI
- **Layers**: Vector layers for government charging stations, government buildings and public EV stations with custom styling
- **Tools**: Route planner, search, layers panel, identify and other interactive tools
- **Attributes**: Display of charging station details, facility information and accessibility data

## Data Sources

- **Government Charging Stations**: GeoJSON file containing EVCS locations and details
- **Government Buildings**: GeoJSON file containing RPD property locations
- **Base Maps**: ESRI Maps (requires valid ESRI API key in configuration)

## Technologies Used

- **[SMK (Simple Map Kit)](https://github.com/bcgov/smk)**: BC Government's map framework
- **[Leaflet](https://leafletjs.com/)**: Open-source mapping library
- **[GeoJSON](https://geojson.org/)**: Geographic data format
- **[Caddy](https://caddyserver.com/)**: Lightweight web server
- **[Node.js](https://nodejs.org/)**: JavaScript runtime

## License

Licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.
