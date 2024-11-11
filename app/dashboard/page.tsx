"use client";
// import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React from "react";
// import { getTasks } from "../api/tasks";

const Dashboard: React.FC = () => {
  // const [tasks, setTasks] = React.useState([]);
  const { data: session } = useSession();
  // const fetchTasks = async () => {
  //   const res = await getTasks(session?.user.user.token as string);
  //   setTasks(res);
  // };
  if (!session) return <p>You are not logged in</p>;

  return (
    <div>
      {/* <button onClick={() => signOut()}>Sign Out</button> */}
      {/* <Button onClick={fetchTasks}>get Users Task</Button> */}
      {/* <div>
        {tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
