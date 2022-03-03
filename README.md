# LAURA_RECS-Project

A short description of your project.
A website for the record label/party series I run called L.A.U.R.A. Recs

Link to the API you plan to use
curl -X GET "https://api.soundcloud.com/tracks/308946187/streams" -H "accept: application/json; charset=utf-8"

Example data response you plan to use
{
"http_mp3_128_url": "https://cf-media.sndcdn.com/",
"hls_mp3_128_url": "https://cf-media.sndcdn.com/",
"hls_opus_64_url": "https://cf-media.sndcdn.com/",
"preview_mp3_128_url": "https://cf-media.sndcdn.com/"
}
Visual of your component hierarchy
Project 1 Component Hierarchy

Wire Frames
Copy and paste or drag and drop your images here.
Project 1 Wire Frame

User Stories
Add user stories following the As a [type of user], I want [what the user wants], so that [what it helps accomplish] format.

- As a user, I want to click through the home page so that I can view different parts of the site
- As a user, I want to be able to click through the carousel, so that I can see the different album art work
- As a user, I want to be able to click on the image in the carousel, so that I can get more information about the album release
- As a user, I want to click the play button, so that I can listen to the music associated with each release

- As a user, I want to be able to click into the navigation bar so that I can view different aspects of the site
- As a user, I want to be able to click into the shows tab so that I can see upcoming shows
- As a user, I want to be able click into the releases tab, so that I can see a comprehensive view of all upcoming shows
- As a user, I want to click into the merchandise tab, so that I can view what label merchandise is for sale
- As a user, I want to click into the about tab, so that I can see a bio about the record label

MVP Goals

- Flip through the homepage carousel with different release album cover art
- linking API data for the album art work and song associated with it
- clicking a play button thats on each slide and have it link to a song associated
- clicking into the carousel and having it route to the release
- each slide will have the ability to preview a song off of the associated release
- stylizing the homepage to match the label's aesthetic

Stretch Goals

- Link shows component in the nav bar with a routed link that opens a page
- Link releases component in the nav bar with a routed link that opens a page
- Link shows releases component
- clicking into the About button and routing to a bio section in the nav bar with a routed link that opens a page
- having a navigation bar with clickable links to shows, releases, and merchandise
