function ResultTable({ title = "Solution", steps = [], bestSolution = true }) {
  return (
    <>
      <h2 className="mb-15">{title}</h2>
      <table className="result-table mb-50">
        <thead>
          <tr>
            <th>Bucket X</th>
            <th>Bucket Y</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((row) => (
            <tr key={row.id}>
              <td>{bestSolution ? row.a : row.b}</td>
              <td>{bestSolution ? row.b : row.a}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ResultTable;
