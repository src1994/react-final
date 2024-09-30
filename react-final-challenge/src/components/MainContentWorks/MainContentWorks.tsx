import { useState, useEffect } from 'react';
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import ProjectCard from "./ProjectCard/ProjectCard";
import TitleCard from "../MainContentAbout/TitleCard/TitleCard";

const URL = ("https://jsonplaceholder.typicode.com/users")

interface User {
  id: number;
  name: string;
  username: string;
}

function MainContentWorks() {
  const [users, setUsers] = useState<User[]>([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<null | string>(null); 

  useEffect(() => {
   
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falla ao cerregar dados');
        }
        return response.json();
      })
      .then((data: User[]) => { 
        setUsers(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Carregar Projetos...</p>;
  }

  if (error) {
    return <p>Erro ao carregar Projetos: {error}</p>;
  }

  return (
    <main className="main-container">
      <div className="works">
        <div className="projects-aside">
          
          {users.length > 0 && (
            <>
              <ProjectsCard
                title={users[0].name} 
                subtitle={users[0].username} 
              />
              <ProjectCard
                title={users[0].name} 
                subtitle={users[0].username} 
              />
            </>
          )}
        </div>
        <div className="projects-rigth">
          <TitleCard Title="All Projects" />
          <div className="projects-rigth-container">
            
            {users.slice(1, 5).map((user) => (
              <ProjectsCard
                key={user.id} 
                title={user.name}
                subtitle={user.username}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContentWorks;
