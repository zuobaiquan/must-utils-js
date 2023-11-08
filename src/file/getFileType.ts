const getFileType = (fileName)=> {
  if (!fileName) {
    return ''
  }
  return fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase()
}
export default getFileType