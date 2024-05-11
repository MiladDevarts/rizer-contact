import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Title from "./components/Title";

function App() {
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center">
        <Navigation />
        <Title />
        <Form />
      </main>
    </>
  );
}

export default App;
