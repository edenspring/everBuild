# everBuild

# MVP List
## Data organization
* Oranized from least specific to most specific
* Aim is to organize the many threads of world building from a tabletop RPG, allowing GMs to keep their thoughts in a single place
* Provides tracking for:
  * Lands
    * Least specific, can be continents, regions, etc
  * Places
    * Towns, ruins, cities, large collections of peoples and places that make up lands 
  * POIs
    * Points of interest within places -- shops, inns, dungeons, palaces, shrines, etc  
  * NPCs
    * The people that make up a place, often tied to a point of interest   
  * Shops
    * Collections of items for sale at certain POIs, may or may not be tied to an NPC
  * Items
    * Database holding items for purchase within a shop, joined by a joins table to show a Shop's inventory
* Site should be searchable by name, finding all relevant bits of data
  * A stretch goal is to add tags that can be applied to database entries as well, aiding in finding or organizing data
## Site is presented in an inviting and clear way
* Goal is to provide intuitive and easy to understand organization through react components
* Interface should be easy to navigate and quick to understand
* Adding content should have clear methods and interfaces for accomplishing that goal
* Finding data that's been created by a user should be a prompt and painless experience, data should be organized and clear to access

# Bonus Goals
* Rich Text Editing
* Auto save
* Addding pictures to entries

# Database schema
![Database Schema](https://github.com/edenspring/everBuild/blob/main/Everbuild.png)
