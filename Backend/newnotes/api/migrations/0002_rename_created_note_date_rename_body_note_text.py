# Generated by Django 4.2.7 on 2023-11-30 01:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='created',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='note',
            old_name='body',
            new_name='text',
        ),
    ]
