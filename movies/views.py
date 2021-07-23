# class which facilitates sending back json
from rest_framework.views import APIView
from rest_framework.response import Response  # method to send back a response
from rest_framework import status  # methods to send back a status code
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Movie
from .serializers.common import MovieSerializer
from .serializers.populated import PopulatedMovieSerializer


class MovieListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, ) # Choose who can see what

    def get(self, _request):
        movies = Movie.objects.all()  # get everything from the movies table in the db
        # transform data into python by running through serializer
        serialized_movies = PopulatedMovieSerializer(movies, many=True)
        # return data and status code
        return Response(serialized_movies.data, status=status.HTTP_200_OK)

    def post(self, request):
        #request.data['owner'] = request.user.id
        print('REQUEST DATA', request.data)
        movie_to_add = MovieSerializer(data=request.data)
        if movie_to_add.is_valid():
            movie_to_add.save()
            print('MOVIE TO ADD', movie_to_add.data)
            return Response(movie_to_add.data, status=status.HTTP_201_CREATED)
        return Response(movie_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class MovieDetailView(APIView):

    def get_movie(self, pk):
        try:
            return Movie.objects.get(pk=pk)
        except Movie.DoesNotExist:
            raise NotFound(detail="🚨 Can't find that movie")


    def get(self, _request, pk):
        movie = self.get_movie(pk=pk)
        serialized_movie = PopulatedMovieSerializer(movie)
        return Response(serialized_movie.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        movie_to_delete = self.get_movie(pk=pk)
        movie_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        movie_to_edit = self.get_movie(pk=pk)
        updated_movie = MovieSerializer(movie_to_edit, data=request.data)
        if updated_movie.is_valid():
            updated_movie.save()
            return Response(updated_movie.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_movie.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
