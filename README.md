# movie-data-base
  [Click](#Click)  👉🏽  [<b> 📀 </b>](https://movie-app-project4.herokuapp.com/)


 # Table of Contents

- [Background](#background)
- [Technology Used](#technology-used)
- [Installing](#installing)
- [How-To-Use Movie-app-project4](#how-to-use-movie-app-project4)
- [Project Development](#project-development)
- [User Model](#user-model)
- [Authentication](#authentication)
- [Other Models](#other-models)
- [Implementing Relationships](#implementing-relationships)
- [Seeding](#seeding)
- [Front End](#front-end)
- [Registering a User](#registering-a-user)
- [Final Thoughts & Project Wrap](#final-thoughts-&-project-wrap)
- [Wins](#wins)
- [Challenges / Bugs](#challenges-/-bugs)
- [Key Learnings](#key-learnings)
- [Project's Future](#projects's-future)
- [License & copyright](#license-&-copyright)



# Background
This app was created to enable users to stream view movies without the need to download, rent or buy.
This is the fourth (and final) project in the General Assembly Immersive course. I worked solo and had 10 days to develop a full stack application. The back end is built with a Python Django API using Django REST Framework to serve data from a Postgres database, and a separate front end built with React.
 
# Technology Used
Python
JavaScript
SASS
 
# Frameworks
Django
React Hooks
Bulma
 
# Dependencies & Components
Axios - Promise based HTTP client for the browser and node.js
React-Icons
React-Router-Dom - DOM bindings for React Router
React-Select - Select Input control for ReactJS
 
 
# Installing
 
Install back-end dependencies: pipenv
Enter the project shell: pipenv shell
Make migrations: python manage.py makemigrations
Migrate: python manage.py migrate
Load seed data for Owners: python manage.py loaddata jwt_auth/seeds.json
Load seed data for Comments: python manage.py loaddata comments/seeds.json
Load seed data for Movies: python manage.py loaddata movies/seeds.json
Load seed data for : python manage.py loaddata jwt_auth/seeds.json
Start back end server: python manage.py runserver
Install dependencies in the client folder: cd client && yarn
Start the server (remaining in client folder): yarn start
 
 
# How To Use Movie-app-project4
Non-registered or logged in users can browse movies by accessing the movies page and selecting the picture corresponding to their movie choice.
Registered and logged in users can access the movie page as well as add, edit and delete movies.
However, users can only edit and delete the movies they added.


# Project Development
I began by drafting a plan of the movie-data-base.
I then created models of the various relationships (one-to-many) using Figma and Mirror

![mirror](https://user-images.githubusercontent.com/84001897/128668854-171abdb2-0603-48b9-98a9-ee50757ac6c8.png)


# User model
I created a folder called 'jwt_auth' and added 'jwt_auth' to my installed apps within the settings.py file in the project folder. I then linked it to the User model within the same folder: AUTH_USER_MODEL = 'jwt_auth.User'
 
from django.db import models
from django.contrib.auth.models import AbstractUser
 
class User(AbstractUser):   <<<Extending existing django User model>>>
   email = models.CharField(max_length=50, unique=True)
   first_name = models.CharField(max_length=50)
   last_name = models.CharField(max_length=50)
   profile_image = models.CharField(max_length=300)
 
The model now in place, I had Django check my new model and prepare to create the table for it in the database, using the make migrations command: python manage.py makemigrations
 
And then migrated to run the changes: python manage.py migrate
 
I then had to register the new app with the admin.py site in its app folder:
 
from django.contrib import admin
from django.contrib.auth import get_user_model
 
User = get_user_model()   ## get my custom user model ##
 
admin.site.register(User)
 
And tested everything works fine by running the server with python manage.py runserver and visiting the admin app localhost:8000/admin. I should be able to log in with my super user, but had I not created this when I set up the project, I can easily do so now by typing the following command in Terminal: python manage.py createsuperuser and filling the options required.

 
![admin](https://user-images.githubusercontent.com/84001897/128673403-02a43823-aed2-4962-a389-52079e3585f8.png)
 
 
![admin1](https://user-images.githubusercontent.com/84001897/128673430-017f217c-69a9-4745-b5af-4a7723d09788.png)

 
# Authentication
Because I needed users to be able to register via the API, I added the Python Json Web Token package: pipenv install pyjwt
 
I first did my secure route to be able to check if incoming requests have a valid token, and restrict access otherwise. I created the file authentication.py within my jwt_auth folder:
 
from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
 
User = get_user_model()
 
class JWTAuthentication(BasicAuthentication):
 
   def authenticate(self, request):
       header = request.headers.get('Authorization')  ## gets token from request and gives user the right to manipulate the data. ##
 
       if not header:
           return None
 
       if not header.startswith('Bearer'):
       # If token format is incorrect, throw error
           raise PermissionDenied(detail="Invalid token") 
 
       token = header.replace('Bearer ', '')  # Removes and replaces 'Bearer' with an empty string
 
       try:     # information about user that lives in the token
           payload =  jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
           print('PAYLOAD', payload)
           user = User.objects.get(pk=payload.get('sub'))
       except jwt.exceptions.InvalidTokenError:
           raise PermissionDenied(detail='Invalid token')
       except User.DoesNotExist:
           raise PermissionDenied(detail='user not found')
 
       return (user, token)   ## If user is found ##
 
I then added my custom authentication settings to the project/settings.py.
 
REST_FRAMEWORK = {
   'DEFAULT_RENDERER_CLASSES': [
       'rest_framework.renderers.JSONRenderer',
       'rest_framework.renderers.BrowsableAPIRenderer',
   ],
   'DEFAULT_AUTHENTICATION_CLASSES': [
       'jwt_auth.authentication.JWTAuthentication'
   ],
}
 
It was also time to add a user serializer to be able to view my user model information, which I created in the serializers folder. In order to implement register and login functionality, I made the views.py that would handle my server requests and send back responses, and then set up my URL patterns for paths. The only thing left to do was write my login and issue the token:
 
User = get_user_model()
 
class RegisterView(APIView): 
 
   def post(self, request):
   # request data going into the UserSerializer to be converted
       user_to_create = UserSerializer(data=request.data)
       if user_to_create.is_valid():
           user_to_create.save()
           return Response({ 'message': 'Registration Successful'}, status=status.HTTP_202_ACCEPTED)
       return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
 
class LoginView(APIView):   # post request to '/auth/login/'
 
   def post(self, request):
       email = request.data.get('email')
       password = request.data.get('password')
 
       try:
           user_to_login = User.objects.get(email=email)
       except User.DoesNotExist:
           raise PermissionDenied(detail='Invalid Credentials')
       if not user_to_login.check_password(password):
           raise PermissionDenied(detail='Invalid Credentials')
 
       dt = datetime.now() + timedelta(days=7)  # expiry_time
       token = jwt.encode(
           {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
           settings.SECRET_KEY,
           algorithm='HS256'
       )
       return Response({ 'token': token, 'message': f"Welcome back {user_to_login.username}" })
 
# Other Models
Once my User model was in place, I proceeded with creating my other 5 models one by one, following the same steps:
 
Start a new app within the project for each new model
Register the app in project/settings.py
Create the model in models.py
Establish any foreign key relationships
Make migrations and then migrate
Register the app within admin.py (adding a string method to the class to make items easier to read in the admin app)
Test by running the server and visiting localhost:8000/admin to check the models
As an example, here is my movie model along with its implemented relationships, which I will discuss next:
 
from django.db import models
from django.db.models.fields import CharField
 
# Movie model
 
class Movie(models.Model):
   title = models.CharField(max_length=100)
   description = models.CharField(max_length=500, default=None)
   image = models.CharField(max_length=300, default=None)
   video = models.CharField(max_length=300, default=None)
   audio_language = models.CharField(max_length=50, default=None)
   run_time_mins = models.PositiveIntegerField(default=None)
   year = models.PositiveIntegerField(default=None)
   views_count = models.PositiveIntegerField(default=None)
   worth_a_watch = models.BooleanField(default=True, null=True)
   # One_to_many relationship - a user can create many movies
   owner = models.ForeignKey(
       "jwt_auth.User",
       related_name="movies",
       on_delete = models.CASCADE
   )
 
   def __str__(self):
       return f"{self.title} - {self.year}"
 
# Implementing relationships
 
For establishing the One to Many relationships, I created in "ONE" / serializers folder a populated.py file where I established the relationship to the "MANY". As an example, here is my populated.py file for films:
 
class PopulatedMovieSerializer(MovieSerializer):
 
   # Adding an object called serializers
   comments = PopulatedCommentSerializer(many=True)
   owner = UserSerializer()  # shows the owner of this movie
 
 
# Seeding
I did the majority of seeding towards the end of the day. I followed the same process for all my models and uploaded some information via insomnia and others via the admin portal. With a good amount of data, I had  Django create a seeds file automatically from the data that already existed in the table: python manage.py dumpdata app-name --output app-name/seeds.json --indent=2 and then flushed the database and loaded the data from the seeds file back in. Below is an example of seeding data from TablePlus:


![admin2](https://user-images.githubusercontent.com/84001897/128669749-da5de6a4-6804-40d6-a673-a563f118c168.png)


# Front End
After establishing my website structure by writing basic components for my main links, I added the routes in App.js and Nav.js, and imported Bulma to do a basic styling as I go. My plan was to return and continue styling once my main components are all in place and functioning correctly.
 
I went one by one and created components for the home, navbar, the footer, the schedule (to host the main part of my app) and the movies. I then proceeded with shaping each page and implementing the request functionality into my components as required.
 
I then followed these steps
 
Creating a format scaffolding in each component using JSX and Bulma classes
Writing the requests one at a time (getting data through async functions with try / catch blocks in place, and setting into State)
Testing everything as I went along:
First in Insomnia to make sure the request to my back end was working accurately and check the format the data is sent in
Then in my console through logging the data at each step
And last ensuring it shows on the page itself
I then refactored my code to break it into smaller components that I imported in the main one (or reuse if required)
I later added error handling (through using State) and updated the try / catch block to set the errors.
For the components which required redirecting, I used History from react-router-dom to push a new url into the history array, and Location to refresh the page.
 
As an example of how I structured the components, the movies folder was composed of:
 
MovieIndex.js - Showing all movies
MovieCard.js - Used in the MovieIndex component, this is a subcomponent containing the format of a movie card
MovieShow.js - Showing one particular movie (found through its id)
AddMovie.js - The page a user is directed when wanting to create a movie
MovieForm.js - The form used to create a new movie (I later refactored a part of this into a useForm component to make it reusable)
MovieEdit.js - Importing the movie information into a form so the user can modify as required.
 
Below are photos with my folder structure
    
![front1](https://user-images.githubusercontent.com/84001897/128670042-f52e510e-876f-4b0d-a093-fc22c752e1b0.png)
![front2](https://user-images.githubusercontent.com/84001897/128670076-bbd5acf4-8ab7-43cf-b245-b714f5c8814c.png)
![front3](https://user-images.githubusercontent.com/84001897/128670096-845051de-09cd-42af-8e88-904083fa16ec.png)

# Registering a User
Followed similar steps as above for Registration until the point where I submitted the new user form, from where I took a different path for Login.
In my helpers folder from components, I created a new file, auth.js to handle tokens:
 
         const setTokenToLocalStorage = (token) => {
            window.localStorage.setItem('token', token)
          }
 
         export const getTokenFromLocalStorage = () => {
          return window.localStorage.getItem('token')
         }
 
        const handleLogout = () => {
           window.localStorage.removeItem('token')
           history.push('/')
         }
 
I then used SetToken within my Login function to set the user token if login is successful.
 
I also wrote further functions in my auth.js to check the token and establish if the user is authenticated and the owner of a particular element based on their token:

         export const getPayload = () => {
          const token = getTokenFromLocalStorage()
          if (!token) return false
          const parts = token.split('.')
          console.log('parts', JSON.parse(atob(parts[1])))
          if (parts.length < 3) return false
          return JSON.parse(atob(parts[1]))
         }
 

        const userIsAuthenticated = () => {
           const payload = getPayload()
           if (!payload) return false
           const now = Math.round(Date.now() / 1000)
           return now < payload.exp
         }
 
        const userIsOwner = (ownerId) => {
          const payload = getPayload()
          if (!payload) return
          return ownerId === payload.sub
        }
 
 
These functions then helped me implement authentication and different outcomes based on the existence of a token.
For example, my navbar displayed different options depending on login status:
 
 
         <div className="navbar-end">
           {!userIsAuthenticated() ?
             <>
               <div className="buttons">
                 <Link className="button is-dark" to="/home">
                   Home
                 </Link>
 
                 <Link to="/movies" className="navbar-item">Movies</Link>
               </div>
               <Link className="button is-dark" to="/register">
                 Register
               </Link>
               <Link className="button is-dark" to="/login">
                 Log in
               </Link>
             </>
             :
             <button className="button is-dark" onClick={handleLogout}>Log Out</button>
           }
         </div>
 
I also restricted adding films to authenticated users only, and editing and deleting films to be allowed only to the user who created the film:
 
{userIsOwner(movie.owner.id) &&
   <div className="buttons">
     <button onClick={handleDelete} className="button is-danger">Delete Movie</button>
     <Link to={`/movies/${id}/edit/`} className="button is-warning">Edit Movie</Link>
   </div>
}
 
 
# Final Thoughts and Project Wrap
 
# Wins
I had a great experience working with Django at the backend. I applied similar knowledge from my project 3 and was able to come up with an MVP and models for the project.
It was yet another opportunity to understand the backend better.
Given the timeframe, I was able to do what I did and appreciated by my peers for the effort I put in to achieve this.
 
# Challenges / Bugs
The main challenge of this project was getting the videos displayed on the browser. As they are trailing videos, I copied the video urls directly from the Youtube channel and uploaded them to Insomnia.
When I tried to display these videos, I could only see video frames with no videos to display. I then realised there were three different urls for the same video so, I needed to choose the right one to get it displayed.
I had a couple of serialisation issues. This was either because the data I put in did not correspond to fields in my models (and vise-versa) or some common type errors.
Another great challenge was when my laptop suddenly shutdown. I restarted it but everything stopped working and was throwing errors. I made some searches online to no avail. I then seeked some help from one of my instructors who resolved the issue with just a line of code.
This was the greatest challenge I ever had.
 
# Key Learnings
 
I now have a better understanding of models and relationships.
 
# Project's Future
This final output does not cover my intention and plan for the project. As a result, I intend to make some improvements on this project particularly on:
adding a comment section for the movies
adding the movie genres
modifying the movie model
Adding some more styling on the project.
 
# Contribution to this project
I would welcome any suggestions and contributions to improve on this project.
 
#  License & copyright
This project was built for educational purposes only. All the information on the website is fictional (including names, contact details and film information).
No copyright infringement is intended and all content is used under educational license.
 
© Maurice Kollewe
