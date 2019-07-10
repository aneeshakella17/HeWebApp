#Dehazing Web App

Hazy Image:
<br>
<img src = "/static/images/forest_input.jpg" width ="400" height = "300"/>


Output Image:
<br>
<img src = "/static/images/forest_output.jpg" width ="400" height = "300"/>

Here is my [web app](http://aneeshakella17.pythonanywhere.com/) to run Kaiming He's algorithm for dehazing hazy images.
The app was built using Flask, Javascript, CSS, and HTML. He theorized that in a hazy image, the brightest pixels in the RGB channels are
primarily contributed by airlight. We can use the dark channel prior to estimate the atmosphere
vector which can be used to estimate the transmission.

Example of the Dark Channel Prior
<img src = "/static/images/dark_channel_prior.jpg" width ="600" height = "300"/>

Transmission
<img src = "/static/images/transmission.jpg" width ="400" height = "300"/>
