

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


