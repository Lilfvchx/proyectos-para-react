import FeedbackItem from "./FeedbackItem";
import {motion, AnimatePresence } from "framer-motion"

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">

      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        );
      })}
    
    </div>
  );
}

export default FeedbackList;
