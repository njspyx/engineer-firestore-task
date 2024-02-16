import React, { useState, useEffect } from "react"; // Or Whatever React imports you want
import "./App.css";
import db from "./firebase-config.js"; // Import the database from the firebase-config file
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [newChapterName, setNewChapterName] = useState("");
  const [chapterToDelete, setChapterToDelete] = useState("");
  const [chapters, setChapters] = useState([]);

  const displayDatabase = async () => {
    const chaptersCollectionRef = collection(db, "chapters");
    const chaptersSnapshot = await getDocs(chaptersCollectionRef);
    const chaptersList = chaptersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setChapters(chaptersList);
  };

  // Function to add a chapter
  const addChapter = async () => {
    // TODO: Implement the logic to add a new chapter to the database
  };

  // Function to delete a chapter
  const deleteChapter = async () => {
    // TODO: Implement the logic to delete a chapter from the database
  };

  return (
    <div className="App">
      <h1>Chapter Operations</h1>
      <button onClick={displayDatabase}>Display Database</button>
      <div>
        <input
          type="text"
          placeholder="New Chapter Name"
          value={newChapterName}
          onChange={(e) => setNewChapterName(e.target.value)}
        />
        <button onClick={addChapter}>Add Chapter</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Chapter ID to Delete"
          value={chapterToDelete}
          onChange={(e) => setChapterToDelete(e.target.value)}
        />
        <button onClick={deleteChapter}>Delete Chapter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {chapters.map((chapter) => (
            <tr key={chapter.id}>
              <td>{chapter.id}</td>
              <td>{chapter.name}</td>
              <td>{chapter.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
