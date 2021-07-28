export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('token')
}

export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  if (!token) return

  const splitToken = token.split('.')
  // console.log('splitToken', JSON.parse(atob(splitToken[1]))) 
 
  if (splitToken.length < 3) return
  return JSON.parse(atob(splitToken[1]))
}