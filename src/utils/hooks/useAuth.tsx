export const setLoggedInUser = (data: object) =>
  localStorage.setItem('userData', JSON.stringify(data))
