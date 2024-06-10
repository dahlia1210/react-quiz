function StartScreen({ numberOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>به آزمون خودسنجی خوش آمدید!</h2>
      <h3> این آزمون شامل {numberOfQuestions} سوال برای ارزیابی شما است.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start"})}
      >
        شروع آزمون
      </button>
    </div>
  );
}

export default StartScreen;
