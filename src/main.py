import sys
from omni_epd import displayfactory
from PIL import Image

print("Loading display")

# epd = displayfactory.load_display_driver("waveshare_epd.it8951")
epd = displayfactory.load_display_driver("omni_epd.mock")

# if now load an image file using the Pillow lib
print("Loading image")
image = Image.open("../screenshot.png")

# resize for your display
# image = image.resize((epd.width, epd.height))

# prepare the epd, write the image, and close
print("Writing to display")
epd.prepare()

epd.display(image)

epd.close()
