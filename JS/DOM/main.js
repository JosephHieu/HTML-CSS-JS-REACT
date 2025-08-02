
// HTML DOM - Document Object Model

/*
    1. Element: ID, class, tag, CSS selecter, HTML collection
    2. Attribute
    3. Text
*/

// Node

/* 
    The W3C DOM standart is separated into 3 different parts:
    - Core DOM - standard model for all document types
    - XML DOM - standard model for XML documents
    - HTML DOM - standard model for HTML documents
*/

// ------------------------------------------------

// Javascript: Browser | Server (NodeJS)

// Application programming interface

// Browser: HTML -> DOM -> WEB API

console.log(document);

var headingNodes = document.querySelectorAll('.box .heading-2');


console.log(headingNodes[1]);

console.log(document.forms['form-1']);

var listItemsNodes = document.querySelectorAll('.box-1 li');

var boxNode = document.querySelectorAll('.box-1');

console.log(listItemsNodes);


// DOM attributes


