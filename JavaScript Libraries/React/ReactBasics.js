"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//    React Basics
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is React?
//
// NOTES /////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on React basics taken from study, research, tutorials, mentor 
//        meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question 
//        and Answer format for improved readability.
//        
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
What is React?
////////////////////////////////////////////////////////////////////////////////
  •	React is a JavaScript library for building fast and friendly user interfaces.

  o	React is used to build user interfaces
    •	 Developed by Facebook in 2011, it is currently the most popular library for building user interfaces.

  o	At the heart of React are components
    •	A component is a piece of the UI.
    •	When building application with React, you are building independent, isolated, and reusable components and then composing them to build complex interfaces.

  o	Every React application has at least one component called the root component.
    •	This root component represents the entire application and contains other child components.

  o	Every React Application is a tree of components.
    •	For example, if you had an application like twitter, you would have a bunch of components, including: Navigation bar, Profile, Trends section, Tweet feed, etc.
    •	If you think of the components above like a tree, it would look something like this:    
      	Each component above is a piece of UI.
      	Each component can be built in isolation and then put together to create complex user interfaces.

  o	Components are typically implemented as a class
    •	Each of these classes has a state and a render method.
      	The state is the data we want to display when the data is rendered.
      	The render method describes what the UI should look like.

  o	The output of the render is a React Element.

      class Tweet {
          state = {};        // data to be displayed when rendered.
          render() {         // output rendered as a React Element.

          }
      }

  o	A React element is simple JavaScript object that’s maps the DOM element. 
    •	It is NOT a DOM element, it only represents the DOM element in the memory.
    •	The react element is essentially a lightweight representation of the DOM in memory which is referred to as the virtual DOM.
    •	Unlike the real DOM, the virtual DOM is cheap to create.
    •	When you change the state of an element, you create a NEW element.
    •	React will then compare this new element and its children of the previous one, figures out what is changed, then updates a part of the real DOM to keep it in sync with the virtual DOM.
    •	This means that when building applications with React, unlike vanilla JavaScript and jQuery, you don’t have to work with DOM API in the browser.
      	In other words, you don’t have to write code to query and manipulate the code or attach event handlers.
      	With react, you simply change the state of the components and React will automatically update the DOM to match that state.

  o	React is called React because it “reacts” to state changes.
    •	When the state changes, React will “react” to the state change and update the DOM.
    •	React only takes care of rendering the view and making sure that the view is in sync with the state… that’s all React does.
    •	Because of this, the API is small and very easy to learn.
    •	With React, you need to use other libraries or things like routing or calling HTTP services.


*/