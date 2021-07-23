from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import MovieSerializer
from jwt_auth.serializers import UserSerializer


class PopulatedMovieSerializer(MovieSerializer):

    # Adding an object called serializers
    comments = PopulatedCommentSerializer(many=True)
    #owner = UserSerializer()
