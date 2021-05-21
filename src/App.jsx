import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import { userData } from './userData.js';
import './App.css';
import '@fontsource/noto-sans-tc';

function App() {
  const [initialUsers, setInitialUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
    setInitialUsers(userData);
  }, []);

  const findByName = (e) => {
    const result = initialUsers.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setUsers(result);
  }

  const handleSort = (e) => {
    const sortType = e.target.value;
    const result = [...users]
      .sort((a,b) => sortType == 'asc' ? a.age - b.age : b.age - a.age)
    setUsers(result)
  }

  const showUser = (item) => {
    console.log(item);
  }

  return (
    <div className="App">
      <header>
        <input type="text" placeholder="Enter user name" onChange={findByName}/>
        <select onChange={handleSort}>
          <option value="asc">Sort ascending</option>
          <option value="desc">Sort descending</option>
        </select>
      </header>
      <main className="main">
        <div className="user-list">
          {
            users.map((item) => 
              <UserCard showUser={() => showUser(item)} user={item}/>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;
