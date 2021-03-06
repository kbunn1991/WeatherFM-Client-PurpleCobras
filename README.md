# WeatherFM
A playlist app that generates mood music based on the weather in your area ☀️🎶⛅🎶☁️
[![Build Status](https://www.travis-ci.org/thinkful-ei22/WeatherFM-Client-PurpleCobras.png)](https://www.travis-ci.org/thinkful-ei22/WeatherFM-Client-PurpleCobras)

## Link to deployed version on Heroku:
https://weatherfm-client.herokuapp.com/

## Link to backend repository: 
https://github.com/kbunn1991/WeatherFM-Backend-PurpleCobras
Please pull down both repositories and run npm install to get going! 

## Features

### Discover
The discover feature allows users to generate music that reflects the weather.  While on the discover page, users can choose to add a song to that specific weather playlist, go the next song or the previous song.  There are also advanced settings that allow the user to tweak the discover songs by adjusting song attributes like happiness, popularity and danceability.

Discover makes an API call (GET) to the OpenWeather API in order to pull the weather in your location via geolocation (if you allow it to be enabled). From here, it makes a GET request to the spotify API and the API returns an array of recommended songs based on the songs inputted in onboarding or those supplied by our app in relation to the current weather. Lastly, that makes a GET request to the Youtube API in order to return the video's URL so it can be displayed and played on the page. 

### Playlists
While listening to the discover page, users can add songs to their personal weather playlists.  When a user is on the playlists page, they can choose a weather playlist, add, remove and play songs from it.  We have also further integrated WeatherFM with Spotify, so for users with a spotify account, they can login into their account from WeatherFM and export their custom weather playlists to their own Spotify account.

The playlist page makes a simple GET request to our database and recieves all of the songs for your playlist - then rendering them to the page. When you play a song, it makes a request to the Youtube API and renders the song on the page.

### Customization
Regardless of a users location or the current weather, they can access all of their different weather playlists as well as use the discover feature.  By changing the current weather, users can generate rainy day playlists when its sunny outside.  Similarly, if a user does not want to share their location, or wants to discover music for another weather, they can manually set the weather.

Our customization alters the request query of the Spotyify API call. Essentially, it alters any elements that you choose through the customization and returns a brand new array of songs.

## Screenshots
### Discover Page
<img width="1270" alt="screen_shot_2018-10-12_at_3 14 22_pm" src="https://user-images.githubusercontent.com/38081935/46890019-51b3a780-ce1a-11e8-8ee2-7797e578654d.png">

### Playlist Page
<img width="1261" alt="screen_shot_2018-10-12_at_3 14 34_pm" src="https://user-images.githubusercontent.com/38081935/46890001-45c7e580-ce1a-11e8-8706-e3c753f5b652.png">

### On-Boarding
<img width="1268" alt="screen_shot_2018-10-12_at_3 15 12_pm" src="https://user-images.githubusercontent.com/38081935/46889970-321c7f00-ce1a-11e8-8426-0d8b5ee1a434.png">

### Custom Discover Settings
<img width="1222" alt="screen_shot_2018-10-12_at_3 14 13_pm" src="https://user-images.githubusercontent.com/38081935/46890036-5f692d00-ce1a-11e8-9d0d-688adc45e222.png">

### Registration
<img width="1244" alt="screen_shot_2018-10-12_at_3 19 27_pm" src="https://user-images.githubusercontent.com/38081935/46889877-e538a880-ce19-11e8-9ec2-2bcc6681706b.png">

## Target Audience
Anyone looking to find music that reflects nature's mood.

## Tech Stack
WeatherFM uses React.js, Enzyme/Jest for the client, and Node.js, MongoDB, Mongoose, Mocha/Chai for the backend.  WeatherFM also utilizes, Spotify, Youtube and OpenWeather's external APIs. 

## Future Plans
We would like to change our music player, so instead of playing youtube videos, our discover and playlist pages just play audio.

## Creators
Kaitlin Bunn, Brandon Graham, Kevin Tsang, Filipp Gorbunov, Ian Beihl
