import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import UserCardFull from './components/UserCardFull';
import { userData } from './userData.js';
import './App.css';
import '@fontsource/noto-sans-tc';

function App() {
  const [initialUsers, setInitialUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);

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
      .sort((a,b) => sortType === 'asc' ? a.age - b.age : b.age - a.age)
    setUsers(result)
  }

  const showUser = (item) => {
    handlePopup();
    setSelectedUser(item);
  }

  const handlePopup = () => {
    setPopupVisible(!popupVisible);
  }

  return (
    <div className="App">
      <header>
        <div className="settings">
          <div className="settings-item">
            <input type="text" placeholder="Enter user name" onChange={findByName}/>
          </div>
          <div className="settings-item">
            <select onChange={handleSort}>
              <option value="asc">Sort ascending</option>
              <option value="desc">Sort descending</option>
            </select>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="user-list">
          {
            users.map((item, i) => 
              <UserCard key={i} showUser={() => showUser(item)} user={item}/>)
          }
        </div>        
      </main>
      <UserCardFull visible={popupVisible} toggle={handlePopup} user={selectedUser}/>
    </div>
  );
}

export default App;
