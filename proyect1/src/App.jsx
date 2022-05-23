import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./components/feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from "uuid"
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <div>My App</div>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <FeedbackStats feedback={feedback} />
      </div>
    </>
  );
}

export default App;
