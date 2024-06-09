"use client";

import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [dueDate, setDuedate] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }

  function addTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please, enter your task.");

    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            title: title,
            dueDate: dueDate,
          };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
      
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 100),
        title: title,
        dueDate: dueDate,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
    setDuedate(editTask.dueDate);
  }

  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container mx-auto bg-white flex flex-col items-center justify-start min-h-screen border-1 bg:-white dark:bg-slate-700">
        <h1 className="text-md sm:text:xl md:text-2xl lg:text-3xl text-black dark:text-white font-bold mb-6 mt-8">
          Personal Information Management App
        </h1>
        <a href='/calendar' className="my-4 border text-bold dark:text-white">Full Calendar Page</a>
        <div className="grid grid-cols-1 border-t-2 border-b-2 lg:border-2 lg:rounded-lg text-center p-10 mx-auto w-full lg:w-3/5">
          <TodoForm
            title={title}
            setTitle={setTitle}
            dueDate={dueDate}
            setDuedate={setDuedate}
            addTask={addTask}
            editId={editId}
          />
          <section>
            {tasks.map((data) => (
              <Item
                key={data.id}
                data={data}
                deleteTask={deleteTask}
                editTask={editTask}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
