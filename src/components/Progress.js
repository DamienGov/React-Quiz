function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index}</strong>/ {numQuestions}{" "}
        <p>
          <strong>
            {points}/ {maxPossiblePoints}
          </strong>
        </p>
      </p>
    </header>
  );
}

export default Progress;
