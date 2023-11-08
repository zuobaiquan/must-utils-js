const getLastName =(filepath)=> {
  const names = filepath.split('/')
  return names[names.length - 1]
}
export default getLastName