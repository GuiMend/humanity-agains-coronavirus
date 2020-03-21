import humps from 'humps'

export const createFormData = (data, isCamelized = false) => {
  const formData = new FormData()

  Object.keys(data).forEach(field => {
    const fieldValue = data[field]
    const formDataValue = (() => {
      if (!fieldValue) {
        return ''
      }

      if (fieldValue instanceof Blob || typeof fieldValue !== 'object') {
        return fieldValue
      }

      return JSON.stringify(fieldValue)
    })()

    formData.append(isCamelized ? field : humps.decamelize(field), formDataValue)
  })

  return formData
}
