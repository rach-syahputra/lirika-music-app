export const truncateText = (text, maxLength) => {
  // count the uppercase characters in the text
  const upperCaseCount = (text.match(/[A-Z]/g) || []).length

  // adjust maxLength based on uppercase count
  const adjustedMaxLength = maxLength - Math.max(0, upperCaseCount - 2)

  return text.length > adjustedMaxLength ? `${text.slice(0, adjustedMaxLength - 3)}...` : text
}