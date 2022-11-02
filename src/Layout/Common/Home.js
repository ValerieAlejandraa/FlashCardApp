//Home "/" Shows a list of decks with options to create, study, view, or delete a deck
import React, {useState, useEffect} from "react"; //to use JSX
import DeckList from "../Decks/DeckList"; //we want to list out the decks 
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api/index";

function Home(){ 
   
    //we add the decks in layout to use decks as a prop for the components 
  const [decks, setDecks] = useState([]); //make the component reusable/modular
  //we want to add a set of decks from the data 
  //load decks
  useEffect(() => { //Generally we retrieve data only once when the page loads
    //declare abort Controller
    //const abortController = new AbortController(); //we can associate it with a fetch request, to stop it. already inside of utils api. remember we want the signal
    //loading of decks from API
    //get the async function listDecks from utils/api
    //Retrieves all existing decks.
    //@returns {Promise<[deck]>}
    //a promise that resolves to a possibly empty array of decks saved in the database.
    listDecks().then(setDecks); //in utils, api, gives us decks, then we set the data to setDecks
    
    //return () => abortController.abort(); //cleanup function  ,we only use this in a use effect, it allows us to stop the fetch so it won't update the state
  }, []);
  //The effect hook: useEffect()
  //enables you to perform side effects from React function components
  //side effect: anything in a function or expression that affects something outside
  // the scope of the function or expression
  //in this side effect we are making async api calls for data
  //inside the useEffect is the side effect
  //the dependency (2nd argument): when to rerun the useEffect

  //add the routes from instructions
  //import route and switch from "react-router-dom"
   
    return (
        <div>
            <div>
                <Link to="/decks/new"><button className="btn btn-primary btn-large"><i className="bi bi-plus"></i>Create Deck</button></Link>
            </div>
            <DeckList decks={decks} setDecks={setDecks} />
        </div>
       )
}

export default Home;





// So you can understand it this way, react-dom contains common components between react-router-dom and react-router-native.

// So you can say react router dom is a plus in react-router

// Also reaxt router exports exports the core components and functions


// whereas react-router-dom exports DOM-aware components, like <Link> , <route> etc
//The <Link> component provides declarative, accessible navigation around your application.
//You may be tempted to use regular anchor tags (such as <a href="/">Home</a>) instead of <Link> components. Although regular anchor tags will work, they will cause your app to reload the entire page when the user clicks the link.