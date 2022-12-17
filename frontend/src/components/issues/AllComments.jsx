import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../features/comments/commentSlice";
import Comment from "./Comment";

export default function AllComments({issueId}) {
  const dispatch = useDispatch()
  const {comments} = useSelector(state => state.comments)
  useEffect(() => {
    dispatch(getComments(issueId)) 
  }, [issueId, dispatch])
  let latestComments = []
  if (comments.length > 0) {
   latestComments = comments?.map(comment => comment).reverse()
  }  
  return (
    <div className="grid grid-cols-1 gap-3">
      {latestComments.length > 0 && latestComments?.map((comment) => (
        <Comment key={comment._id} comment={comment}/>
      ))}
    </div>
  );
}
