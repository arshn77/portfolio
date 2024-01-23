import "./App.css";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl m-4 font-semibold">Arshia's Portfolio</h1>
      <div className="flex items-center flex-col">
        <Project
          style="rounded-tl-lg rounded-tr-lg mt-4"
          name="Testing Center"
          link="https://arshn77.pythonanywhere.com/"
          img="/images/testing-center.png"
          code="https://github.com/arshn77/Testing-Hub"
        />
        <Project
          name="Generative Blocks"
          link="https://arshn77.github.io/generative-blocks/"
          img="/images/gen_blocks.png"
          code="https://github.com/arshn77/generative-blocks"
        />
        <Project
          name="Asteroid Game"
          link="https://arshn77.github.io/asteroid-game/"
          img="/images/asteroid.png"
          code=""
        />
        <Project
          name="Itunes Artist Search"
          link="https://arshn77.github.io/artist-search/"
          img="/images/itunes-logo.png"
          code=""
          style="rounded-bl-lg rounded-br-lg mb-4"
        />
      </div>
    </div>
  );
}

export default App;
