export const createUser = (userData) => {
    return fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  export const createItinerary = (userData) => {
    return fetch('/api/user/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
  }
  
  export const loginUser = (userData) => {
    return fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

  export const logOut = () => {
    return fetch('api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'}
    });
  };