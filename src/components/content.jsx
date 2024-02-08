import {React,useContext} from 'react'
import Spinner from '../components/Spiner'
import {AppContext} from '../context1/AppContextApp';
const content = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {loading,posts} = useContext(AppContext);
  return (
    <div>
      {
           loading ?  
           (<Spinner />) :
           (
            posts.length === 0 ?
            (
                <div>no post found </div>
            ) :
            (posts.map ( (post) => (
                <div className='py-4 pt-14 flex flex-wrap'> 
                <p className='text-red-600'>{post.title}</p>
                <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>{
                    post.tags.map( (tag) => {
                        return <span className='text-blue-600 px-1 cursor-pointer '>{`#${tag}`}</span>
                    })
                }
                </div>
                </div>
            )))
           )
        
      }
    </div>
  )
}

export default content
