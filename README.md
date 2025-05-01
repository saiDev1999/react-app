




May 1: 
1. Components in react
2. React fragment
2. How to use imports and exports in react
3. What is jsx  and how to use and rules of jsx




Component : Isolated pieces of UI in the web site. 
React is a component based approach


2013 - open source
2013-2018 - class components mainly 
2018 - functional components

2 types :
1. functional 
2. class components 

rules :
1.component always starts with capital letter
2. every component must return single parent  ex : div, section, ol, ul etc, Fragment 

button  - component 
image   - component
input   - component
card    - component
page/screen    -  component


List : 1. ordered list and un-ordered list
<ol>
<li>Mango</li>
<li>Apple</li>
<li>Banana</li>

 </ol>


 <ul>
<li>Mango</li>
<li>Apple</li>
<li>Banana</li>

</ul>


kebab-case
camelCase
PascalCase



DRY : don't repeat yourself



React fragment :
fragment allows you to group multiple elements without adding extra nodes to the DOM

<React.Fragment> syntax or the shorthand syntax <>...</>. 





imports and exports

exports can be in 2 ways :
1. Default export 
2. Named export


difference btw Default and Named exports

every file should contain only one default export
every file can contains any number of named export


while importing default export we can call any name 
while importing named export we should call with that or use as keyword 
