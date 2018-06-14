[Live](https://weather-vane.herokuapp.com/)

Weather Vane is a simple app which displays the current weather from five different cities on the splash page, with the ability to click on each individual city to expand the information displayed into it's own window. Individual show pages for each city have more detailed information available, as well as a five day forecast. Weather Vane is created using React.js and OpenWeatherMap.org weather API.

# Features and Implementation
## Celsius/Fahrenheit Switch
![](https://media.giphy.com/media/2fRzuUZFTkKf6eu10F/giphy.gif)

Users are able to decide whether they want the information displayed to be according to metric or imperial formatting. The state of the component is updated based on the value of the Switch component and makes a fetch request to the server based on which units are selected in state.
## Show Modal
![](https://media.giphy.com/media/fMzwSjZLP3vVARF7zq/giphy.gif)

When users click on a specific city from the homepage, a modal is activated and an api call is made to update the modal window's state based on which city was clicked on. This then renders the modal filled with detailed weather information from the selected city, as well as a five day forecast. The modal window also has Celsius/Fahrenheit formatting options.
## Responsive Design
Weather Vane utilizes media queries to resize both the splash page component and the modal components to deliver a seamless and responsive experience. If the user changes the size of the window or uses the app on a smaller device, the components will adjust their size accordingly.
# Future Direction
* Allowing users to choose their cities through a text input.
* A map component displaying current temperature of cities selected as markers on a map.
