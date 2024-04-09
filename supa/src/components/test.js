"use client"
import React, { useEffect, useState } from 'react';
import supabase from '../api/supabase';

export default function Test() {
  const [titles, setTitles] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const { data, error } = await supabase
          .from('test')
          .select('title');

        if (error) {
          throw error;
        }

        setTitles(data);
        setFetchError(null);
      } catch (error) {
        setFetchError('Error fetching titles');
        console.error('Error fetching titles:', error.message);
      }
    };

    fetchTitles();
  }, []);

  return (
    <div>
      <h1>Test</h1>
      {titles.map(title => (
        <p key={title.id}>{title.title}</p>
      ))}
      {fetchError && <p>Error: {fetchError}</p>}
    </div>
  );
}