import Header from '../Header'
import AllStories from '../AllStories'
import AllPostsLists from '../AllPostsLists'
import SearchPosts from '../SearchPosts'
import SearchContext from '../../context/SearchContext'
import './index.css'

const Home = () => (
  <SearchContext.Consumer>
    {value => {
      const {searchInput, searchPostView} = value
      return (
        <>
          <Header />
          <div className="bg-color">
            {searchPostView ? (
              <SearchPosts input={searchInput} />
            ) : (
              <>
                <AllStories />
                <AllPostsLists />
              </>
            )}
          </div>
        </>
      )
    }}
  </SearchContext.Consumer>
)

export default Home
