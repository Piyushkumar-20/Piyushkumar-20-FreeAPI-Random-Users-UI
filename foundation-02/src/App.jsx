import './App.css'

const shows = [ 
  { id: 3, name: "Piyush", section: "B" },
  { id: 3, name: "Ani", section: "B" },
  { id: 3, name: "aman", section: "B" },
  { id: 3, name: "suresh", section: "B" },
  { id: 3, name: "Piyush", section: "B" },
  { id: 3, name: "Piyush", section: "B" },
 ];

function App() {
  

  return (
    <>
     <div>
      <h1> Hello </h1>
      <section className="grid">
        {shows.map((show) => (
          <h3>{show.name}</h3>
        ))}

      </section>

     </div>
    </>
  )
}

export default App
