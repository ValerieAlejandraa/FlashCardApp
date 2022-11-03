import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Common/Home" //when you create a component and add it in JSX, make sure to import it 
import StudyDeck from "./Decks/StudyDeck";
import AddCard from "./Decks/AddCard";
import OneDeck from "./Decks/OneDeck";
import EditCard from "./Decks/EditCard.js"
import CreateDeck from "./Decks/CreateDeck"
import EditDeck from "./Decks/EditDeck";

function Layout() {
  
  return (
    <>
      <Header />
      <div className = "container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study" >
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit" >
            <EditCard />
          </Route>
          <Route path="/decks/:deckId"  >
            <OneDeck />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
//add our switch and route
   //how we will map our website 



//line 41: we are going to export decks which holds the data . go to home
//The .container class provides a responsive fixed width container
// abortController is to avoid race condition. That is it will cancel ongoing fetch requests

//So you can use the <Switch> component to render only one <Route>.
//Alright, so the basic difference between switch and router is that router is not so picky.
//Switch will render one and only one matching route basically the first matched child
//so the first match is rendered even when there are additional matching routes.
//But router is not selective with routes it will render all routes that match.
// For example, if user clicks on some button to get decks, and before the data is fetched user clicks on another button

//If abortController is not used, then both requests to fetch data will be made

// But, with abortController, when user clicks on another button, first fetch request will be cancelled and only the second one will be made


// Race condition is when 2 or more processes compete with each other to acquire data