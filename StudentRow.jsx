function StudentRow({ student, updateScore, index }) {
  const isPass = student.score >= 40;

  return (
    <tr>
      <td>{index}</td>
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(student.id, e.target.value)}
          className="score-input"
        />
      </td>
      <td>
        <span className={isPass ? "status pass" : "status fail"}>
          {isPass ? "Pass" : "Fail"}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;