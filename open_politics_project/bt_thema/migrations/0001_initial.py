# Generated by Django 4.2.5 on 2023-09-25 17:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aktivitaet',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('aktivitaetsart', models.CharField(max_length=100)),
                ('dokumentart', models.CharField(max_length=20)),
                ('wahlperiode', models.IntegerField()),
                ('datum', models.DateField()),
                ('aktualisiert', models.DateTimeField()),
                ('titel', models.TextField()),
                ('fundstelle', models.CharField(max_length=100)),
                ('vorgangsbezug', models.IntegerField(blank=True, null=True)),
                ('vorgangsbezug_anzahl', models.IntegerField()),
                ('deskriptor', models.CharField(blank=True, max_length=100, null=True)),
                ('abstract', models.TextField(blank=True, null=True)),
                ('ai_summary', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Drucksache',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('drucksachetyp', models.CharField(max_length=100)),
                ('dokumentart', models.CharField(max_length=20)),
                ('dokumentnummer', models.CharField(max_length=20)),
                ('wahlperiode', models.IntegerField()),
                ('herausgeber', models.CharField(max_length=2)),
                ('datum', models.DateField()),
                ('aktualisiert', models.DateTimeField()),
                ('titel', models.TextField()),
                ('autoren_anzeige', models.CharField(max_length=100)),
                ('autoren_anzahl', models.IntegerField()),
                ('fundstelle', models.CharField(max_length=100)),
                ('pdf_hash', models.CharField(blank=True, max_length=32, null=True)),
                ('urheber', models.CharField(max_length=100)),
                ('vorgangsbezug', models.IntegerField(blank=True, null=True)),
                ('vorgangsbezug_anzahl', models.IntegerField()),
                ('ressort', models.CharField(max_length=100)),
                ('anlagen', models.TextField(blank=True, null=True)),
                ('ai_summary', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('nachname', models.CharField(max_length=100)),
                ('vorname', models.CharField(max_length=100)),
                ('namenszusatz', models.CharField(blank=True, max_length=20, null=True)),
                ('wahlperiode', models.IntegerField()),
                ('basisdatum', models.DateField()),
                ('datum', models.DateField()),
                ('aktualisiert', models.DateTimeField()),
                ('titel', models.TextField()),
                ('person_roles', models.CharField(blank=True, max_length=100, null=True)),
                ('ai_summary', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Plenarprotokoll',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('dokumentart', models.CharField(max_length=20)),
                ('dokumentnummer', models.CharField(max_length=20)),
                ('wahlperiode', models.IntegerField()),
                ('herausgeber', models.CharField(max_length=2)),
                ('datum', models.DateField()),
                ('aktualisiert', models.DateTimeField()),
                ('titel', models.TextField()),
                ('fundstelle', models.CharField(max_length=100)),
                ('pdf_hash', models.CharField(blank=True, max_length=32, null=True)),
                ('vorgangsbezug', models.IntegerField(blank=True, null=True)),
                ('vorgangsbezug_anzahl', models.IntegerField()),
                ('sitzungsbemerkung', models.CharField(blank=True, max_length=100, null=True)),
                ('ai_summary', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vorgang',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('beratungsstand', models.CharField(max_length=100)),
                ('vorgangstyp', models.CharField(max_length=100)),
                ('wahlperiode', models.IntegerField()),
                ('initiative', models.CharField(max_length=100)),
                ('datum', models.DateField()),
                ('aktualisiert', models.DateTimeField()),
                ('titel', models.TextField()),
                ('abstract', models.TextField(blank=True, null=True)),
                ('sachgebiet', models.CharField(blank=True, max_length=100, null=True)),
                ('deskriptor', models.CharField(blank=True, max_length=100, null=True)),
                ('gesta', models.CharField(blank=True, max_length=100, null=True)),
                ('zustimmungsbeduerftigkeit', models.CharField(blank=True, max_length=100, null=True)),
                ('kom', models.CharField(blank=True, max_length=100, null=True)),
                ('ratsdok', models.CharField(blank=True, max_length=100, null=True)),
                ('verkuendung', models.CharField(blank=True, max_length=100, null=True)),
                ('inkrafttreten', models.DateField(blank=True, null=True)),
                ('archiv', models.CharField(blank=True, max_length=100, null=True)),
                ('mitteilung', models.TextField(blank=True, null=True)),
                ('vorgang_verlinkung', models.IntegerField(blank=True, null=True)),
                ('sek', models.CharField(blank=True, max_length=100, null=True)),
                ('url', models.URLField(blank=True, null=True)),
                ('ai_summary', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vorgangsposition',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('vorgangsposition', models.CharField(max_length=100)),
                ('zuordnung', models.CharField(max_length=2)),
                ('gang', models.BooleanField()),
                ('fortsetzung', models.BooleanField()),
                ('nachtrag', models.BooleanField()),
                ('vorgangstyp', models.CharField(max_length=100)),
                ('titel', models.CharField(max_length=200)),
                ('dokumentart', models.CharField(max_length=20)),
                ('datum', models.DateField()),
                ('aktualisiert', models.DateTimeField()),
                ('fundstelle', models.CharField(max_length=100)),
                ('urheber', models.CharField(max_length=100)),
                ('ueberweisung', models.CharField(max_length=100)),
                ('aktivitaet_anzeige', models.CharField(max_length=100)),
                ('aktivitaet_anzahl', models.IntegerField()),
                ('ressort', models.CharField(max_length=100)),
                ('beschlussfassung', models.CharField(blank=True, max_length=100, null=True)),
                ('ratsdok', models.CharField(blank=True, max_length=100, null=True)),
                ('kom', models.CharField(blank=True, max_length=100, null=True)),
                ('sek', models.CharField(blank=True, max_length=100, null=True)),
                ('mitberaten', models.IntegerField(blank=True, null=True)),
                ('abstract', models.TextField(blank=True, null=True)),
                ('ai_summary', models.TextField(blank=True, null=True)),
                ('vorgang', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bt_thema.vorgang')),
            ],
        ),
    ]
