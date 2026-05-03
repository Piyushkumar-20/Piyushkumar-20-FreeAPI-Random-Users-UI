import './App.css'
import AvatarCard from './components/avatarcard.jsx'

const avatars = [
  { name: "Piyush", code: "fourteen" },
  { name: "Vishal", code: "four" },
  { name: "Aman", code: "fourty" },
];

function Shell({ title, children }) {
  return (
    <section>
      <p>Reusable Shell</p>
      <h2>{title}</h2> 
      {children}
    </section>
  );
}

// 2. Renamed the prop to 'avatar' (singular) for clarity


function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        <Shell title="My Team" /> 
        <section>
          {avatars.map((item) => (
            // 3. Match the prop name (avatar) and use a unique key
            <AvatarCard key={item.name} avatar={item} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
