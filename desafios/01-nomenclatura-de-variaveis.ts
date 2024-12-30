// Nomenclatura de variáveis

const categories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getGithubProfile(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const apiResponse = await fetch(`https://api.github.com/users/${username}`);

  if (apiResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const user = await apiResponse.json()

  const categorySort = categories.sort((firstCategory, lastCategory) =>  lastCategory.followers - firstCategory.followers); 

  const category = categorySort.find(category => user.followers > category.followers)

  const result = {
    user,
    category: category.title
  }

  return result
}

getGithubProfile({ query: {
  username: 'josepholiveira'
}}, {})