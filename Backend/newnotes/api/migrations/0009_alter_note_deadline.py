# Generated by Django 4.2.7 on 2023-12-01 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_note_deadline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='deadline',
            field=models.DateField(blank=True, null=True),
        ),
    ]