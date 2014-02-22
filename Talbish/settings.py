"""
Django settings for Talbish project.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.6/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
# give the path to the current file (settings.py) directory -- Boaz
SETTINGS_DIR = os.path.dirname(__file__)
# joins the path to the settings.py file with the parent directory path.. not sure..
PROJECT_PATH = os.path.join(SETTINGS_DIR, os.pardir)
# now 'PROJECT_PATH' should hold the absolute path to the project parent directory, i this case ~/Talbish
PROJECT_PATH = os.path.abspath(PROJECT_PATH)

# now we add (join) the path /templates
TEMPLATE_PATH = os.path.join(PROJECT_PATH, 'templates')

STATIC_PATH = os.path.join(PROJECT_PATH,'static')
# Absolute path to the media directory
MEDIA_ROOT = os.path.join(PROJECT_PATH, 'media')
# creating the database path
DATABASE_PATH = os.path.join(PROJECT_PATH, 'TalbishData.db')


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.6/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '@9d6!1s&+gj3_m#unqxg@$+(6rv3l%4x@p8rww@v6@d)@$g!tf'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'TalbishData',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

TEMPLATE_DIRS = (
    # Put strings here, like "/home/html/django_templates" or "C:/www/django/templates".
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    TEMPLATE_PATH,
)


STATICFILES_DIRS = (
    STATIC_PATH,
)


ROOT_URLCONF = 'Talbish.urls'

WSGI_APPLICATION = 'Talbish.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.6/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.6/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.6/howto/static-files/

STATIC_URL = '/static/'

MEDIA_URL = '/media/'