

<h1>React responsiv Footer with props</h1>



<h4>react-footer-hor is a React component to build  simple and responsive footer component</h4>



## Installation

<h5>Use the npm package manager to install react-footer-hor</h5>

</br>





```bash
npm install react-footer-hor
```
<h4>styled components must be installed</h4>

```bash
npm install styled-components --save
```

</br>


[Link with Example](https://goranivankovic.github.io/react-footer-hor/)



</br>




  <img src="https://media.giphy.com/media/VYDcGcFl0UvgtAfcsq/giphy.gif" heigt="500" width="50%" />
  
  
  <h4>
  Responsive footer with props.</br>
  Technologies use: react, styled-components, react-hooks, react-icons, css.</br>
  Don't waste your time building your own footer, just simple downloaded with npm.</br>
  Required: Node.js, NPM, React.</br>
  Simple to use send props in your main components. </br>
  Add colors of: text-headline, border-headline, background, text-rows.<br/>
  Add row headline-names , row-items, footer-items. </br> 
  I hope you liked and feel happy to enjoy and download.
  

  </h4>
  
  
  
  ## Usage

```javascript

import react from 'react';
import FooterBar from 'react-footer-hor';

function App() {
  return (
    <div>
    
    
      <FooterBar 
   
    //Chnage background color not requried default grey.
      bgColor=""

      //Change text color not requried default white.
      text_color=""
 
     //Change headline color of 4 rows not requried default red.
      headline_color=""

    //Chenge border color of 4 headline itmes not requried default white.
      border_color=""

     //Change first row headline required.
      first_headline_name="NEWS"
    
      //Change first row items minimum 3 items. Maximum 5 items for responsiveness items,  it must have unique names required.
      first_row_items={["Blog","Newsletter","my Book","ABOUT US","Lean in 15 Meals on Gousto"]}


     //Change second row headline required.
      second_headline_name="COMMUNITY"
 
      //Change second row items minimum 3 items. Maximum  5 items for responsiveness items, it must have unique names required.
      second_row_items={["YouTube Channel","Instagram","Twitter","Facebook","Google"]}


     //Change thred row headline required.
      three_headline_name="CONTACT US"

     //Change thred row items minimum 3 items. Maximum  5 items for responsiveness items, it must have unique required.
      three_row_items={["Support Centre","Newsletter","Fax & Email","Careers","Join Us"]}


     //Change four row headline required.
      four_headline_name="COMMUNITY"

     //Change fur row items minimum 3 items. Maximum  5 items for responsiveness items, it must have unique name required.
      four_row_items={["YouTube Channel","Instagram","Twitter","Facebook","Google"]}


       
     //Change footer items minimum 1 items. Maximum 3 items for responsiveness items , it must have unique names required.
     footer_items={["2022TERMS & CONDITION","@ THE FOOTER APP","SPRIVACY POLICYCOOKIE POLICY"]}

      
      
      />
    

    </div>
  );
}

export default App;

```

</br>

</br>

<img  align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt="npm" />https://www.npmjs.com/package/react-footer-hor

</br>


<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />https://github.com/goranivankovic/react-footer-hor


</br>
## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr></hr>

##
[developed](https://github.com/goranivankovic)


