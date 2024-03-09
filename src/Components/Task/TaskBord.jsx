import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Js",
    description:
      "These symbols play various roles in programming languages and are used for tasks such as defining blocks of code, indicating the start and end of arrays or objects,",
    tags: ["web", "react", "tailwind"],
    property: "High",
    isFaverate: true,
  };

  const handleAddTasks = (e) => {
    e.preventDefault();
    console.log("Cliked even");
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [isTaskModalShow, setIsTaskModalShow] = useState(false);
  return (
    <section className="mb-20" id="tasks">
      {isTaskModalShow && <AddTaskModal />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleAddTasks={() => setIsTaskModalShow(true)} />
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBord;
