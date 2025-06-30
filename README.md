


Navigation :



To provide navigation we are going use external package :

React Router Dom 


npm i react-router-dom






https://www.zomato.com/ --- BASE URL - Static routing

BASE URL + partner-with-us/new/ - Static routing

BASE URL + /bangalore/restaurants - Dynamic routing

BASE URL + bangalore/rox-new-bel-road-bangalore/info - Dynamic routing

BASE URL + bangalore/indian-biere-house-jp-nagar-bangalore/info -  Dynamic routing



Navigation or Routing :
1. Static Routing 
2. Dynamic Routing - All detail screens - id routing


Setup for navigation :



http://localhost:5173/ - BASE URL


1. HomeScreen - Static   - http://localhost:5173/
2. AboutScreen - Static  - http://localhost:5173/about
3. SettingScreen - Static - http://localhost:5173/setting
4. ProductListing - Static - http://localhost:5173/productListing
5. ProductDetails - Dynamic - http://localhost:5173/product/129991/info









For api calls :
1. Fetch
2. Axios
3. React Query
4. SWR




Axios :
Its a npm package which is widely used for the HTTP request for javascript apps


Advantages of axios over fetch:
1. Status codes will be provided  
2. Automatic json converstion is possible using axios


2  ways to navigate :
1. Link - when its in return jsx
2. using useNavigate from react-router-dom - js functions



useParams :
This is responsible for extracting dynamic info from url