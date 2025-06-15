import Goal from "./Goal"

export default function GoalList() {
  return (
    <ul>
      <li><Goal goalTitle="Learn React" goalContent="Learn react by building solutions to the exercises in this book" /></li>
      <li><Goal goalTitle="Use React" goalContent="Use react js in building solutions to projects mentioned in the roadmap.sh projects" /></li>
    </ul>
  )
}
