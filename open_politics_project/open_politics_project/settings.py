"""
Django settings for open_politics_project project.

Generated by 'django-admin startproject' using Django 4.2.5.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""
import os
import environ
from pathlib import Path

with open('.env', 'r') as file:
    for line in file:
        key, value = line.strip().split('=', 1)
        os.environ[key] = value

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-0_lkdf^d#luxx#uxf9$!v)4i^ilu7*wyszfgk7x4s6+^r3ilk4'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['open-politics.org', 'www.open-politics.org', 'web', 'localhost', '127.0.0.1', '*']



# Application definition

INSTALLED_APPS = [
    'authentification',
    'corsheaders',
    'django.contrib.admin', 
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'bt_thema',
    'news',
    'channels',
    'rest_framework',
    'rest_framework.authtoken',

]

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        '': {  # 'root' logger
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}


CORS_ALLOW_ALL_ORIGINS = True

CORSE_ALLOW_CREDENTIALS = True

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
}
CHANNEL_LAYERS = {
     'default': {
         'BACKEND': 'channels_redis.core.RedisChannelLayer',
         'CONFIG': {
             "hosts": [('127.0.0.1', 6379)],
         },
     },
}
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'
LOGIN_URL = '/accounts/login/'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

CSRF_TRUSTED_ORIGINS = [
    'https://www.open-politics.org',
    'http://www.open-politics.org',  # If you also serve traffic over HTTP
    'https://subdomain.open-politics.org',  # If applicable
]
CSRF_COOKIE_DOMAIN = '.open-politics.org'

SESSION_ENGINE = 'django.contrib.sessions.backends.db'  # or 'cache' for cache-backed sessions
SESSION_CACHE_ALIAS = 'default'
SESSION_COOKIE_NAME = 'sessionid'  # Ensure the correct cookie name


ROOT_URLCONF = 'open_politics_project.urls'


WSGI_APPLICATION = 'open_politics_project.wsgi.application'
ASGI_APPLICATION = 'open_politics_project.asgi.application'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('POSTGRES_DB', 'default_db_name'),
        'USER': os.getenv('POSTGRES_USER', 'default_user'),
        'PASSWORD': os.getenv('POSTGRES_PASSWORD', 'default_password'),
        'HOST': 'postgres', 
        'PORT': '5432',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_root')
MEDIA_ROOT = os.path.join(BASE_DIR, 'media_root')

STATIC_URL = '/static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Path: open_politics_project/open_politics_project/settings.py
# static settings for the project


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'bt_thema', 'static'),
    os.path.join(BASE_DIR, 'news', 'static'),
]

# URL configuration for open_politics_project project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/4.2/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import: from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')