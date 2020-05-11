from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import LocationSerializer, TripSerializer, ActivitySerializer
from .models import Location, Trip, Activity
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .filter import TripFilter

class LocationList(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class TripList(generics.ListAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

    '''
    Sort the result list
    First, sorts the list by start_date with positive sequence, then sorts the list by end_date with positive sequence
        It means, If some trip's start_date are equal, the sort the end_date with positive sequence
    '''
    filter_backends = ( OrderingFilter,)
    ordering_fields = ("start_date","end_date",)
    ordering = ('start_date',"end_date",)

class TripSearch(generics.ListAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
    filter_backends = ( DjangoFilterBackend, OrderingFilter)
    # filter the list by customized filter class TripFilter
    filterset_class = TripFilter
    # Sort the result list
    ordering_fields = ("start_date","end_date",)
    ordering = ('start_date',"end_date",)
    
    
class ActivityList(generics.ListAPIView):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer