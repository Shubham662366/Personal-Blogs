import {React,useContext} from 'react'
import {AppContext} from '../context1/AppContextApp'
const paginationn = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {page,totalpages,handlerPageChange} = useContext(AppContext);
  return (
    <div>
        <div className='bg-slate-500 text-white flex justify-center gap-6 fixed  top-100 bottom-0 w-full'>
            {
                page > 1 && 
                   (<button onClick={() => handlerPageChange(page-1)}>
                    Previous
                   </button>)
            }

            {
                page < totalpages &&
                  (<button onClick={() => handlerPageChange(page+1)}>
                    Next
                  </button>)
            }

            <p>
                Page {page} of {totalpages}
            </p>
        </div>
    </div>
  )
}

export default paginationn
