# Generated by Django 4.2.7 on 2023-12-01 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_note_deadline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='deadline',
            field=models.DateField(blank=True, null=True),
        ),
    ]
