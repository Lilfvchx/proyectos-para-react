import Card from "../shared/Card"
import {useState} from "react"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"
function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(10)
  
  const handleTextChange=(e)=>{
    if(text===""){
      setBtnDisabled(true)
      setMessage(null)
    }
    else if(text!=="" && text.trim().length<=10){
      setBtnDisabled(false)
      setMessage("text must be at least 10 characters")
    }
    else{
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(e.trim().length>=10){
      const newFeedback={
        text,
        rating,
      }
      handleAdd(newFeedback)
      setText=""
    }
  }


  return (
    <Card>
    <form onSubmit={submitHandler}>
      <h2>How would you rate ur service with us?</h2>
      <RatingSelect selected={(rating)=> setRating(rating) } />
      <div className="input-group">
      <input onChange={handleTextChange} type="text" placeholder="write a review"/>
      <Button type="submit" isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className="message">{message}</div>}
    </form>
    </Card>
  )
}

export default FeedbackForm