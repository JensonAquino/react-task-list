
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
      <header>
        Task manager 
      </header>
      <main>
        <section>
        <h2>Current Tasks ({currentTasks.length}) </h2>
        <ul>
        {printList(currentTasks)}
        </ul>
        </section>
        
        <hr />

        <section>
        <h2>Complited Tasks ({complitedTasks.length})</h2>
        <ul>
        {printList(complitedTasks)}
        </ul>
        </section>
      </main>
    </>
  )
}

export default App
