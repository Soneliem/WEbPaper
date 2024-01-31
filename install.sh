#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    # Install Node.js 20 from NodeSource
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    npm install
else
    echo "Node.js is already installed"
fi

sudo apt-get install -y python3-dev chromium-browser

# Check if the virtual environment exists
if [ ! -d "venv" ]
then
    # Create a new virtual environment
    python3 -m venv --system-site-packages venv
else
    echo "Virtual environment 'venv' already exists"
fi
# Activate the virtual environment
source venv/bin/activate

# Check if omni-epd is installed
if ! pip3 show omni-epd &> /dev/null
then
    # Install the git repository
    pip3 install git+https://github.com/robweber/omni-epd.git#egg=omni-epd
else
    echo "omni-epd is already installed"
fi

# Deactivate the virtual environment
deactivate