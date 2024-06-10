function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        <strong>امتیاز شما : {points} </strong> از {maxPossiblePoints} (
        {Math.ceil(percentage)} %)
      </p>
      <p className="highscore">(بالاترین امتیاز: {highscore} )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        آزمون مجدد
      </button>
    </>
  );
}

export default FinishScreen;
