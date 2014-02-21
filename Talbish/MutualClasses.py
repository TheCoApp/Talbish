# Object with the client data
class Client(models.Model):
	m_ID = models.IntegerField(default=0) 				# Need to change to primary key
    m_userID = models.IntegerField(default=0) 			# Need to change to foreign key
    m_firstName  = models.CharField(max_length=128)		# User first name
    m_lastName  = models.CharField(max_length=128)		# User last name
    m_age = models.IntegerField(default=0)				# User age
    m_gender = models.IntegerField(default=0)			# 0 = male, 1 = female
    m_defLocation = models.IntegerField(default=0)		# User last location
    m_defEnv = models.IntegerField(default=0)			# User last envirment
    m_weightPref = models.IntegerField(default=0)		# User prefences of weight carring. for example will prefer not to carry a lot of clothes. 1 to 10 scale. 5 is normal (and default)
    m_coldPref = models.IntegerField(default=0)			# User prefences of cold and warm cloth. the normal (and default) is 5. 1 to 10 scale.
    m_clothes = list()									# List of all the user clothes (cloth object)

    def __unicode__(self):
        return self.m_firstName
# clothe object
class Clothe(models.Model):
	m_ID = models.IntegerField(default=0) 				# Need to change to primary key
	m_userID = models.IntegerField(default=0) 			# Need to change to foreign key
    m_bodyPart = models.IntegerField(default=0) 		# 0 = Head, 1 = Upper body, 2 = Lower body, 3 = Feet
    m_warmLevel = models.IntegerField(default=0) 		# 0 = Coldest , 1.. ,2.., 3.., 4.., n = Warmest
    m_pictureLink = models.URLField()					# Contains the URL for the cloth picture
    m_weight = models.IntegerField(default=0)			# 5 grades scale of the cloth (5 = heaviest)
    m_isOnion = models.IntegerField(default=0)			# Has a zipper? (or somthing like this) - The onion model

    def __unicode__(self):
        return self.m_userID

class Env(models.Model):
	m_ID = models.IntegerField(default=0) 				# need to change to primary key - Int
	m_userID = models.IntegerField(default=0) 			# need to change to foreign key - Int
	m_envName = models.CharField(ax_length=128) 		# The env. name shown in the UI - String
	m_defTime = models.Datetime()						# Last user choice - Datetime
	m_relativeFeeling = models.IntegerField(default=0) 	# relative sesetivity inside specific env for the specific user - Int

    def __unicode__(self):
        return self.m_envName

class Weather:
	m_temp	
	m_humidity
	m_wind
	m_cloudy
	m_feelsLike

class ClientRequest:
	m_userID											# Foreign key - Int
    m_envID												# Foreign key - Int
    m_time 												# User chosen time - Datetime
    m_weather											# Weather object

    def __unicode__(self):
        return self.m_userID

class Outfit:
	m_head
	m_upperBody
	m_lowerBody
	m_feet

class ClientResponse:
	m_outfitSet list()

class Location:
	m_ID = models.IntegerField(default=0) 				# Location ID
	m_nmae = models.CharField(ax_length=128)			# Loaction name

	 def __unicode__(self):
        return self.m_nmae
