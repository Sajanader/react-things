import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className="header">
      <h1>Pet App</h1>
      <h3> {props.pets}</h3>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className={props.cls}>
      <p>{props.foot}</p>
    </footer>
  )
}


function Animal(props) {
  return (
    <li>
      <h4>Name: {props.pe.name}</h4>
      <h4>description: {props.pe.description}</h4>
    </li>
  )
}


function Animalslist(props) {
  return (
    <main className="main">
      <h3>Number of Animals {props.Animalslist.length}</h3>
      <ul>
        {props.Animalslist.map(pe => <Animal pe={pe} />)}
      </ul>
    </main>
  )
}


class AnimalsForm extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> {this.props.title}
          <input description="foot" onChange={this.handleChange}></input>
        </label>

        <input type="submit" value="submit" />
      </form>
    )
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.Animalbuilder(this.state);
  }
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      Animals: [
        {
          id: 1,
          name: " Abyssinian Cat",
          description: "Abyssinians are highly intelligent and intensely inquisitive. They love to investigate and will leave no nook or cranny unexplored."
        },
        {
          id: 2,
          name: "American Bobtail Cat Breed",
          description: "The American Bobtail is an athletic breed that looks like a bobtailed wildcat and has many dog-like tendencies."
        },
        {
          id: 3,
          name: "Burmese Cat",
          description: "The Burmese thrives on companionship with her humans and other cats. Like her Siamese ancestors, she enjoys conversation, but has a much softer, sweeter voice."
        },
      ],

      pets: "types",
      counter: 0
    };
    this.AnimalCreater = this.AnimalCreater.bind(this);
  }


  AnimalCreater(Animal) {
    let allAnimals = this.state.Animals;
    allAnimals.push({ id: 4, name: Animal.name, description: Animal.description });
    this.setState({ Animals: allAnimals });
  }

  render() {
    return (
      <div className="App">

        <Header pets={this.state.pets} />
        <Animalslist Animalslist={this.state.Animals} />
        <h1>do you have a Animal ?? </h1>
        <AnimalsForm title="Enter Name:" Animalbuilder={(Animal) => this.AnimalCreater(Animal)} />
        <Footer cls="footer" foot="@copyright 2021" />
      </div>
    );
  }
}

export default App;