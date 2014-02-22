import os

def Populate():
    newClient = AddClient(7, 'Json', 'Pristiely')

    AddClothe(newClient, "http://127.0.0.1:8000/static/talbish.jpg")
    # Print out what we have added to the user.
    # for c in Client.objects.all():
    #     print "- {0} - {1}".format(str(c))

def AddClient(_id, _firstName, _lastName):
    client = Client.objects.get_or_create(m_userID=_id, m_firstName=_firstName, m_lastName=_lastName)
    return client

def AddClothe(_client, _url):
    clothe = Clothe.objects.get_or_create(m_userID=_client[0].m_userID, m_pictureLink=_url)
    return clothe

# Start execution here!
if __name__ == '__main__':
    print "Starting Rango population script..."
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Talbish.settings')
    from TalbishData.models import Client, Clothe
    Populate()