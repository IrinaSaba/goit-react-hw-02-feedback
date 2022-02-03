import s from './FeedbackOptions.module.scss'
const FeedbackOptions = ({options, onLeaveFeedback}) => {
  let feeds = Object.keys(options)
   return (
    feeds.map(option => (
      // console.log(option)
        <button className={s["btn-search"]} key={option}
          onClick={() => onLeaveFeedback(option)}
          type="button"
        > {option}
        </button>
    ))
      
    );
}
 
export default FeedbackOptions;