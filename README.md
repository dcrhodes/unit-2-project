# VNL
VNL is database application for collectors and enthusiasts of vinyl records.  Users have the ability to search, edit album details, add unlisted records to the database, and then add listed records to their personal collection or wishlist.  The users can then edit their collection and wishlist as their record collection grows, as well as share more details about themselves through an editable profile. 

I built this application to be a centralized way for collectors of independent music to keep track of their collections, and eventually be able to be a social network to interact with other enthusiasts and buy, sell, or trade those records we've all been missing from our collections. I'm an avid collector and former independent label owner myself, but have found some lacking features with other well-known record collection communities. It's frustrating to track down rare independent releases, and VNL intends to focus on the independent community and enthusiasts of fringe or niche corners of the music world.

## Getting Started:
Heroku Deployment: <https://vnl-project.herokuapp.com/>

Trello Board: <https://trello.com/b/DRPYGbsx/vnl-project>

Upon loading, an unregistered user is limited in their interaction with the applications.  They can search the database for specific terms using the search feature located on the right side of the navigation bar.  If the user logs in with their Google account, a profile is automatically registered for them, and they are free to utlize the rest of the application.

From the navigation bar, registered users can browse the entire record database through the "All Records" tab, or add unlisted records through "Add Records".  "Collection" will take the user to their personal profilem which also lists their entire record collection, or wishlist if the user has added records to either list.  "All Profiles" will let the user view the profiles of other registered users, and view their collections.

## Screenshots:
Home Page:
![Home Page](https://i.imgur.com/K0aXLWy.png)

All Records:
![All Records](https://i.imgur.com/KDT3NGD.png)

Add Records:
![Add Records](https://i.imgur.com/oWnKVxL.png)

User Profile:
![All Records](https://i.imgur.com/LKBq0Dz.png)

## Technologies Used:
- HTML
- CSS
- Bootstrap
- JavaScript
- Node.JS
- Express
- MongoDB
- Mongoose

## Next Steps:
- All record tables in the application need to be alphanumerically sortable.
  
- The search needs to be more intelligent.  It is currently case and spacing sensitive.  I would also like to implement the ability to work around small typos.

- The search feature currently searches through the record model based on the property parameter chosen from the drop-down menu.  I would like users to be able to search all objects for any instance of a searched phrase, regardless of which properties the phrase is contained in, without having to select a specific property.
  
- I want users to have the ability to search for records and see what other users have that record in their collection or wishlist.  I will implement a third collection list for each user, so they will not only be able to display their collections and wishlists, but have a third list to display what records they have available for sale or trade.  
  
- I want users to be able to privately message each other.

- I will implement additional models and profiles for record labels and artists.  This will allow users to navigate to these profiles to see all releases related to that artist or label, rather than having to use the search feature and getting a table in response.  I will full editable biographies and histories for these profiles, similar to what users are able to do with their personal profiles.
  
- The application needs to be responsive to mobile use.

- I would like to implement multiple APIs with this application.  The Discogs database is the most comprehenseive album database available, and would save the trouble of users having to build VNL's in-house database over time.  Additionally, incorporating the Spotify API may allow album profiles to host streaming widgets, or direct users to the Spotify application for records that are available in their system.

## Bugs To Be Addressed:
- Multiple instances of a record can be added to a user's collection or wishlist.  I will be implementing a function to disable collection or wishlist buttons for items that are already contained in the corresponding list for each logged in user.
  
- If multiple instances of a record exist in a collection or wishlist, removing one instance will automatically remove every instance, rather than only removing the extra unneeded instance.
  
- The default image in the record model does not show if a record has not been edited with a matching album cover.

## Lessons Learned:
I learned a lot through building this application, and personally do not feel like it's a complete project yet.  I now feel comfortable with compiling a MongoDB database, recalling the information, and displaying it through EJS on a browser.  CSS styling and responsivity was a major hurdle in the UI, and will constanly be a work in progress.  I was surprised that the back-end of this application was an easier task than the front-end.  This project was meant to demonstrate back-end skills, but I found that my lack of front-end manipulation was a roadblock in implementing additional features that I am confident in creating back-end logic to accomplish.  I will definitely be seeking additional practice to increase the cohesion of my UI and server-side understanding. 

## Credits:
All album images and artwork are properties of their respective trademark holders, and only used within this application for non-commmercial demonstrative or educational purposes.

