## Part 1. Reading JSON
- We are going to work with USGS earthquake data from the past week.
- Visit http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson in your browser.
    + What is the structure of the data?
        + How many earthquakes does it list?
        + How would you grab the first earthquake?
            * How would you grab it's title?
            * How would you grab it's geological coordinates:
                - *latitude*?
                - *longitude*?
            * When did it happen?
                - How many hours ago is that?

##Part 2. Rendering Data
- Your short term goal is to render each *title* to the page.
    - Your going to need to:
        - grab the data from the usgs endpoint.
        - loop over it
        - add each title to the page (in the "info" section/column)

##Part 3. Google Maps
- Your next goal is to integrage Google Maps:
    - Add a google map to the page
        + Follow the tutorial at [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
        + Note that you will need to sign up for an API key
    - Add a marker/pin to the map for each earthquake location



Stretch:
    - Calculate how long ago the quake occured and add it to the page. E.g. "28 hours ago".
    - Parse the title to only include the location, E.g. Instead of "M 4.2 - 1km ESE of Fontana, California", it should just say "Fontana, California"

Stretch:
- Create an option to "sort by magnitude"
- Create three buttons: "Show past: month, week, day"
    + When a user clicks the button, can you filter the results to only show earthquakes from the correct timeframe?
    + Bonus: Can you do it without hitting the API endpoint more than once?
