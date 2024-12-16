
import tasks from "./data/data.js";
function App() {
 console.log(tasks)
  const currentTasks = tasks.filter((curTask) => 
    curTask.state !== "completed"
  );
  const complitedTasks = tasks.filter((curTask) => 
    curTask.state === "completed"
  );

  const printList = (array) => {
    return array.map(curtask => (
      <li key={curtask.id} className="task">
        <div className="title">
        <h4>{curtask.title}</h4>
        <span className="state">{curtask.state}</span>
        </div>
        <div className="detail">
          Priority: {curtask.priority}
        </div>
        <div className="detail">
          Est. time: {curtask.estimatedTime}
        </div>
        </li>
    ))};
    
  return (
    <>
    {/* <div className="container"> */}
      <header className="header">
        <h1 className="container">Task manager </h1>
      </header>
      <main className="container">
        <section className="mb-1">
        <h2 className="mb-1">Current Tasks ({currentTasks.length}) </h2>
        <ul className="task-list">
        {printList(currentTasks)}
        </ul>
        </section>
        
        <hr />

        <section className="mb-1">
        <h2 className="mb-1">Complited Tasks ({complitedTasks.length})</h2>
        <ul className="task-list">
        {printList(complitedTasks)}
        </ul>
        </section>
      </main>
    {/* </div> */}
    </>
  )
}

export default App
