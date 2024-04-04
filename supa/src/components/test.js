"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import supabase from '../api/supabase'

export default function Test() {

  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const { data, error } = await supabase
        .from('test')
        .select('*');
      if (error) console.error('Error fetching todos:', error.message);
      setTest(data || []);
    };

    fetchTest();
  }, []);

  //----------------------------------------------------------------------------
  return (
    <div>
      <h1>Test</h1>
      <ul>
        {test.map(test => (
          <li key={test.id}>{test.title}</li>
        ))}
      </ul>
    </div>
  );
}