# Generated by Django 4.2.5 on 2023-10-11 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newssource',
            name='id',
            field=models.CharField(max_length=255, primary_key=True, serialize=False),
        ),
    ]
