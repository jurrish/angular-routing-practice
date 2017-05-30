# angular-routing-practice

##front-end CRUD
#create/read/update/destroy views
#like twitter. each component is a separate view

#METHOD /api/photo
#each endpoint is going to do something different to the resource

# ?usrname=jrIriarte

##FRONT-END ROUTING
endpoints are similar
/index.html
/home
/about

-each of these will be associated with different pages
-with multipage applications, they're just different html files in the applications
-could all share the same navbar
-no need to redo logic for the navbar

# hashroutes aka /#/home, /#/app, /#/messages, /#/profile
-used to be used to get to subsections of a page
-used to be used to jump to different sections on a page
-could be used to grab state
/#/app/?galleryID=1234 -> would configure the app so the 1234 gallery would render to page
-basically every route on the front-end is a get request

#CRUD vs ROUTING
crud is operations, routing is deciding which view will show up on page
