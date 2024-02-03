# WEbPaper

## Description

A simple app that periodically takes a screenshot of a desired website and automatically sends it to a compatible e-Paper display. The project uses [Omni-EPD](https://github.com/robweber/omni-epd) to support a [wide variety of displays](https://github.com/robweber/omni-epd?tab=readme-ov-file#displays-implemented).

## Installation

Clone the repository and run the installation script.

```bash
git clone https://github.com/Soneliem/WEbPaper.git
cd WEbPaper
./install.sh
```

The script installs Node.js, creates a python virtual environment and the required dependencies.

## Configuration

The application uses a `.env` file to configure the application. The following variables are required:

- `DISPLAY_WIDTH` — The width of the display in pixels.
- `DISPLAY_HEIGHT` — The height of the display in pixels.
- `URL` — The URL of the website to take a screenshot of.
- `LOAD_TIME` — The time in milliseconds to wait for the website to load before taking a screenshot.
- `UPDATE_INTERVAL` — The interval in minutes to take a new screenshot.

## Usage

Run the application with the following command:

```bash
npm run prod
```
