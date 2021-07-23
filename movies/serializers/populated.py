from comments.serializers.common import CommentSerializer
from .common import MovieSerializer
#from jwt_auth.serializer import UserSerializer


class PopulatedMovieSerializer(MovieSerializer):

    comments = CommentSerializer(many=True)  # Adding an object called serializers
    #owner = UserSerializer()