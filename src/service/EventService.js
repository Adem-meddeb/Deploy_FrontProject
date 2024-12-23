import axios from 'axios';

const EventService = {
  getAllEvents: async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('https://adem-445322.nw.r.appspot.com/api/events/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  registerForEvent: async (eventId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`https://adem-445322.nw.r.appspot.com/api/events/${eventId}/register`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      throw error;
    }
  },

  searchEvents: async (category, title) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('https://adem-445322.nw.r.appspot.com/api/events', {
        params: { category, title },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
};

export default EventService;