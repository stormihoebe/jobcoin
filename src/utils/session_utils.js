export const handleLogin = (username) => {
  localStorage.setItem('username', username);
}

export const handleLogout = () => {
  localStorage.removeItem('username');
}

export const isLoggedIn = () => {
  return localStorage.getItem('username') != null
}

export const getCurrentAddress = () => {
  return localStorage.getItem('username')
}