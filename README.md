


1. Jsx and rules of jsx
2. presentational layer and container layer
3. class components




jsx :Jsx is a syntax extenstion for javascript , it lets you write html-like markup inside javascript file
jsx = js + html
React always using jsx syntax for component creation


jsx rules :
1. every component must return single parent or root element
2. Close all the tags
3. attributes must be always camelCase <button onClick=" ></button>
4. class must be replaced class name  <div className="parent" > - class is the reserved keyword in class components
5. always use  {} braces when using js inside the html





presentational layer : UI layer 
container layer : functional layer


2013 open source 
2013-2018 - class components - container layer, function - presentational layer
2018 > till now we are functional components - hooks  functional component - presentational layer + container layer



2 types :
1. functional components
2. class components




steps to create class components :

render : render is a method which returns jsx in class components 


class Button extends Component{

   render(){
     return(
        <div>
        </div>
     )
   }
}





Tasks :
1. Difference between presentational layer and container layer
2. Take employee details in a object. show in the UI
3. Map method usage in js and react
4. Functional and class components usage
5. Repeat the class