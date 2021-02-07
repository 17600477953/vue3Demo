const setSession = (key, value) => {
  sessionStorage.setItem(key, value)
}
const getSession = key => {
  return sessionStorage.getItem(key)
}
export { setSession, getSession }
