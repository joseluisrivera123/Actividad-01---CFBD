import Post from "./components/Emergencies";
import { useEffect, useState } from "react";
import { records } from "./service/pocketbase-service";
import ChartJS2 from "./components/ChartJS2";

function App() {
  const [posts, setPosts] = useState<Array<any>>([]);
  useEffect(() => {
    setPosts(records);
    console.log("App  mounted");
  }, []);
  return (
    <main className="flex flex-col gap-3">
      <h1 className="bg-black text-white font-bold text-center">Emergencies</h1>
      <section className="flex flex-row flex-wrap gap-4 items-center justify-center">
        
        {
          posts.map((post) => {
            return <Post
              key={post.id}
              title={post.emergency_type}
              description={post.emergency_status}
              fecha={post.emergency_time}
              
             />
          })
        }
        
      </section>
      <section>
        <div><ChartJS2></ChartJS2></div>
      </section>
    </main>
  );
}

export default App;