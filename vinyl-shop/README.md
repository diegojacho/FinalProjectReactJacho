# This App was created for the Course React JS from CoderHouse.com with the goal of using Web-Development and React-js knowledge and its application into a well designed app

This project was bootstrapped with [Create React App](https://github.com/create-react-app). This app was created using Create react app, and all the dependencis installed including:
    react-dom
    react-router-dom
    react-toastify
    firebase

## Description of the App

Title of the app : Vinyl Record Store
The app has 4 main pages or views, however only 4 of them are display in the navbar menu, and it contains a Checkout page and a Item Description page.

Addiitonallty, components, hooks and helper documents were created to developed the app, the pages were mounted to the main 'App.js' thorugh the react-router dependency

### Components, hooks and helper documentes were optimized to avoid monolithic components.

The HomePage, which it is displays when the app is initiated or can be access through the logo and app name. This page containes a description of the app and a button link to the main catalog as well as other page of the app. It also display a carousel of our top rated products 

The Catalog page request data from firestore firebase, obtains and maps the collection into the component Item

The Item component displays a card of each item, image of the produdct, and a button "view description" which can direct you to the ItemDescription page. This view description button is use for mounting the ItemDetails component

The categories page maps the firestore database by categories using a react-bootstrap accodions style menu

Finally, the ShopCart component displays a react-bootstrap interactive Modal. The use is able to modify the ShopCart by adding or removing items, this Modal Shop Cart containes a Checkout button that mounts the view ShopCartCheckout. This papge/view is in charge of displaying the summary of the checkout order and it sends the order information to firebase. 

## Vinyl Record Store App was designed by Diego Jacho