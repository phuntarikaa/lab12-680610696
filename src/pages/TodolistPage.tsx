import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";
import {type TaskCardProps} from "../libs/Todolist";

export default function TodolistPage() {
  const title ="Todo List";
  const tasks : TaskCardProps[] = [
  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: false,
  },
];
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
        <div className="col-2 p-0">
          <Sidebar userName="puntharika" type="student"/>
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header/>

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>

              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
              <div className="d-flex my-3">
                <TaskInput/>
                <button className="btn btn-primary px-4">Add</button>
              </div>

              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
               {
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isDone={task.isDone}
                />
              ))
            }
            </div>
          </main>

          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
         <Footer year = "2026" fullName = "Puntharika khokankklang" studentId="680610696" />
        </div>
      </div>
    </div>
  );
}
