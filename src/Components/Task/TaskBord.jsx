import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBord = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Js",
    description:
      "These symbols play various roles in programming languages and are used for tasks such as defining blocks of code, indicating the start and end of arrays or objects,",
    tags: ["web", "react", "tailwind"],
    property: "High",
    isFavorate: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [isTaskModalShow, setIsTaskModalShow] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTasks = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setIsTaskModalShow(false);
  };

  // Edit Task
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setIsTaskModalShow(true);
  };
  // Delete Single Task
  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Delete All Task
  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  // Close Modal
  const onClickCloseModal = () => {
    setIsTaskModalShow(false);
    setTaskToUpdate(null);
  };

  // Favorite Task
  const handleFavorate = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorate = !newTasks[taskIndex].isFavorate;
    setTasks(newTasks);
  };

  //   Search Task
  const handleSearch = (searchText) => {
    console.log(searchText);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setTasks([...filtered]);
  };
  return (
    <section className="mb-20" id="tasks">
      {isTaskModalShow && (
        <AddTaskModal
          onSave={handleAddTasks}
          taskToUpdate={taskToUpdate}
          onClickClose={onClickCloseModal}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            handleAddTasks={() => setIsTaskModalShow(true)}
            onDeleteAllTask={handleDeleteAllTask}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              setTasks={setTasks}
              onEdit={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onFav={handleFavorate}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBord;
