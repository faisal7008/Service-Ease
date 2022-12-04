import moment from 'moment'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import userService from '../../features/users/userService'

export default function Comment({comment}) {
    const {user} = useSelector(state => state.auth);
    const [commentor, setCommentor] = useState();
    useEffect(() => {
      userService.getUser(comment.user_id, user.token).then(res => setCommentor(res)).catch(err => console.log(err.message))
    }, [comment])
    
  return (
    <div>
        <div className="flex items-start space-x-3 w-full">
        <div className="flex-shrink-0 mt-1">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 max-w-md space-y-1">
          <p className="text-sm font-semibold text-gray-900 truncate ">
            {commentor?.name}{" "}
            <span className="ml-2 text-xs font-mono text-gray-500">
              {moment(comment.createdAt).startOf('minute').fromNow()}
            </span>
          </p>
          <p className="text-sm font-medium text-gray-600">{comment.comment}</p>
        </div>
      </div>
    </div>
  )
}
