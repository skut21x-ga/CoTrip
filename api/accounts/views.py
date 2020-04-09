from rest_framework import generics, permissions
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, ProfileSerializer, ProfileSocialMediaSerializer, SocialMediaTypeSerializer
from .models import Profile, CustomUser, ProfileSocialMedia, SocialMediaType
import boto3
from django.http import JsonResponse
from django.conf import settings
import uuid


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        # create a mutable copy of the request data in order to perform .pop('profile')
        mutable_request_data = request.data.copy()
        profile_data = {}
        if 'profile' in mutable_request_data:
            profile_data = mutable_request_data.pop('profile')

        serializer = self.get_serializer(data=mutable_request_data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        profile = Profile.objects.create(user=user, **profile_data)

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class ProfileList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileUpdate(generics.RetrieveUpdateAPIView, UpdateModelMixin):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.partial_update(self, self.request)


# not added to urls VVV
class UserList(generics.ListAPIView):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all()

# add view to update a profile, it should only allow a profile to be updated when they have a token saying theyre logged in




def sign_s3(request):

  file_name = request.GET['folder'] + "/" + uuid.uuid1().hex
  file_type = request.GET['file_type']

  s3 = boto3.client('s3')

  presigned_post = s3.generate_presigned_post(
    Bucket = settings.S3_BUCKET,
    Key = file_name,
    Fields = {"acl": "public-read", "Content-Type": file_type},
    Conditions = [
      {"acl": "public-read"},
      {"Content-Type": file_type}
    ],
    ExpiresIn = 3600
  )

  return JsonResponse({
    'data': presigned_post,
    'url': 'https://%s.s3.amazonaws.com/%s' % (settings.S3_BUCKET, file_name)
  })
