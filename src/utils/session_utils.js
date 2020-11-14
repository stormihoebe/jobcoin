export const handleLogin = (username) => {
  localStorage.setItem('username', username);
}

export const handleLogout = () => {
  localStorage.setItem('username', null);
}

export const isLoggedIn = () => {
  return localStorage.getItem('username') != null
}

export const getCurrentAddress = () => {
  return localStorage.getItem('username') != null
}