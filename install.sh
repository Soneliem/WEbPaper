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

# Check if the virtual environment exists
if [ ! -d "epd" ]
then
    # Create a new virtual environment
    python3 -m venv epd
else
    echo "Virtual environment 'epd' already exists"
fi
# Activate the virtual environment
source epd/bin/activate

# Check if omni-epd is installed
if ! pip show omni-epd &> /dev/null
then
    # Install the git repository
    pip install git+https://github.com/robweber/omni-epd.git#egg=omni-epd
else
    echo "omni-epd is already installed"
fi

# Deactivate the virtual environment
deactivate