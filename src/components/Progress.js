function Progress({ numOfQuestions, index, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        سوال <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        {maxPossiblePoints} / <strong> {points}</strong>
      </p>
    </header>
  );
}

export default Progress;
