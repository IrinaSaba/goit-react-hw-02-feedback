const FeedbackOptions = ({options, onLeaveFeedback}) => {
  let feeds = Object.keys(options)
   return (
    feeds.map(option => (
      // console.log(option)
        <button  key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        > {option}
        </button>
    ))
      
    );
}
 
export default FeedbackOptions;