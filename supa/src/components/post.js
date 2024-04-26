'use client';
import React, { useState } from 'react';
import supabase from '../api/supabase';

export default function Post() {
  const [newTitle, setNewTitle] = useState('');

  const handleAddTitle = async () => {
    try {
      const { data, error } = await supabase
        .from('test')
        .insert([{ title: newTitle }]);

      if (error) {
        throw error;
      }

      console.log('Title added successfully:', data);
      setNewTitle('');
    } catch (error) {
      console.error('Error adding title:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={handleAddTitle}>Post</button>
    </div>
  );
}