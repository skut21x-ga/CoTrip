# Generated by Django 3.0.6 on 2020-05-13 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0007_auto_20200513_1918'),
        ('accounts', '0009_auto_20200410_1526'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='city_of_residence',
        ),
        migrations.AddField(
            model_name='customuser',
            name='is_subscriber',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='profile',
            name='cities_of_residence',
            field=models.ManyToManyField(blank=True, null=True, related_name='people', to='trip.Location'),
        ),
        migrations.AddField(
            model_name='profile',
            name='trips',
            field=models.ManyToManyField(blank=True, null=True, related_name='attendees', to='trip.Trip'),
        ),
    ]