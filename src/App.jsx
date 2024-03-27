import ReactConceptImg from './assets/react-core-concepts.png';
import ComponentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
        <img src={ReactConceptImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
};

const CoreConcept = (props) => {
  return (<li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>);
};


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept image={ComponentsImg} 
            title="Components"
            description="The core UI building block"
            />
            <CoreConcept image={ComponentsImg} 
            title="Components"
            description="The core UI building block"
            />
            <CoreConcept image={ComponentsImg} 
            title="Components"
            description="The core UI building block"
            />
            <CoreConcept image={ComponentsImg} 
            title="Components"
            description="The core UI building block"
            />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
