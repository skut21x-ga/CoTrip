# Generated by Django 3.0.6 on 2020-05-18 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0011_auto_20200517_1937'),
    ]

    operations = [
        migrations.AddField(
            model_name='trip',
            name='overview',
            field=models.TextField(blank=True, max_length=500, null=True),
        ),
    ]