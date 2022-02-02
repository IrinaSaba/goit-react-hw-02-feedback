const Statistics = ({good, neutral, bad}) => {
   return ( 
      <>
       <p>Good: {good}</p>
       <p>Neutral: {neutral}</p>
       <p>Bad: {bad}</p>
       <p>Total: {good + neutral + bad}</p>
       <p>Positive feedback: {parseInt(good*100/(good + neutral + bad))}% </p>
      </>
    );
}
 
export default Statistics;