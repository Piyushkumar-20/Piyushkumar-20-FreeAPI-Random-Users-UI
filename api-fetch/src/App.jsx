import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random" , 
        {method: 'GET', headers: {accept: 'application/json'}}
      );
      const result = await response.json();
      setUser(result.data);
    } catch (error) {
      console.error("Failed to load user", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      await fetchUser();
    };

    loadUser();
  }, []);

  return (
    <div className="container">
      <div className={`card ${isLoading ? 'loading-state' : ''}`}>
        <h2 className="header-title">Generate Random User</h2>
        
        {user && (
          <div className="profile-section">
            <img src={user.picture?.large} alt="User Avatar" className="avatar" />
            <h2 className="user-name">{user.name?.first} {user.name?.last}</h2>
            <p className="user-email">{user.email}</p>
            <div className="tag-wrapper">
              <span className="location-pill">{user.location?.city}</span>
            </div>
          </div>
        )}

        <button onClick={fetchUser} disabled={isLoading} className="generate-btn">
          {isLoading ? 'Loading...' : 'Generate New User'}
        </button>
      </div>
    </div>
  );
}

export default App;
