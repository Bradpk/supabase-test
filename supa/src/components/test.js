"use client"
import React, { useEffect, useState } from 'react';
import supabase from '../api/supabase'
import styles from '../components/test.module.css'

export default function Test() {

  const [test, setTest] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const { data, error } = await supabase
        .from('test')
        .select('*');
      if (error) console.error('Error fetching test:', error.message);
      setTest(data || []);
    };

    fetchTest();
  }, []);

  //----------------------------------------------------------------------------
  return (
    <div>
      <h1>Test</h1>
      <ul className={styles.color}>
        {test.map(test => (
          <li key={test.id}>{test.title}</li>
        ))}
      </ul>
    </div>
  );
}