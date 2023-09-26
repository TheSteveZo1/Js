const userProfile = {
  name: 'Bogdan',
  commentsQty: 23,
  hasSignedAgreement: false,
}

const userInfo = ({ name, commentsQty}) => {
  if (!commentsQty) {
    return `User ${name} has no comments`
  }
  return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile)