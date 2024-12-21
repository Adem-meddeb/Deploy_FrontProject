import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCalendar, FaMapMarkerAlt, FaTag, FaEdit, FaTrash } from 'react-icons/fa';
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const MyEvents = () => {
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchMyEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token manquant');
        setLoading(false);
        return;
      }

      const response = await axios.get('/api/events/my-events', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data && Array.isArray(response.data)) {
        setMyEvents(response.data);
      } else {
        setError('Aucun événement trouvé');
      }

      setLoading(false);
    } catch (err) {
      setError('Erreur lors du chargement de vos événements');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyEvents();
  }, []);

  const handleEdit = (eventId) => {
    navigate(`/edit-event/${eventId}`);
  };

  const handleDelete = async (eventId) => {
    try {
      const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet événement ?');
      if (!confirmation) return;

      const token = localStorage.getItem('token');
      if (!token) {
        setError('Token manquant');
        return;
      }

      await axios.delete(`/api/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert('Événement supprimé avec succès');
      fetchMyEvents();
    } catch (err) {
      setError('Erreur lors de la suppression de l\'événement');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold">Chargement...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Mes Événements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myEvents.map((event) => {
          const eventDate = new Date(event.date);
          const formattedDate = eventDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={event.imageUrl || "/placeholder-event.jpg"}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = "/placeholder-event.jpg"}
                />
              </div>
              <div className="p-5">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
                  {event.title}
                </h5>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="mr-2" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaTag className="mr-2" />
                    <span>{event.category}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => handleEdit(event.id)}
                    className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                  >
                    <FaEdit className="mr-2" /> Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 flex items-center justify-center"
                  >
                    <FaTrash className="mr-2" /> Supprimer
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {myEvents.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          Vous n'avez créé aucun événement pour le moment
        </div>
      )}
    </div>
  );
};

export default MyEvents;
