import React, { useEffect, useState } from 'react';
import { db } from './firebase/firebaseConfig'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch tasks from Firestore on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks")); // Assuming you have a 'tasks' collection
        const tasksData = querySnapshot.docs.map(doc => doc.data());
        setTasks(tasksData); // Set tasks data in state
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;

