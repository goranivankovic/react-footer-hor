import logo from './logo.svg';
import './App.css';

import FooterBar from './components/Footer/FooterBar';
import react from 'react';

function App() {
  return (
    <div className="App">

      <div style={{height:"35vh",width:"100%",background:"#f5f5f5"}}></div>
    


      <FooterBar 
   
    //Chnage background color   
      bgColor=""

      //Change text color
      text_color=""
 
     //Change headline color of 4 rows
      headline_color=""

    //Chenge border color of 4 headline itmes 
      border_color=""

     //Change first row headline
      first_headline_name="NEWS"
    
      //Change first row items minimum 3 items. Maximum 5 items for responsiveness items,  it must have unique names
      first_row_items={["Blog","Newsletter","my Book","ABOUT US","Lean in 15 Meals on Gousto"]}


     //Change second row headline
      second_headline_name="COMMUNITY"
 
      //Change second row items minimum 3 items. Maximum  5 items for responsiveness items, it must have unique names.
      second_row_items={["YouTube Channel","Instagram","Twitter","Facebook","Google"]}


     //Change thred row headline
      three_headline_name="CONTACT US"

     //Change thred row items minimum 3 items. Maximum  5 items for responsiveness items, it must have unique names.
      three_row_items={["Support Centre","Newsletter","Fax & Email","Careers","Join Us"]}


     //Change four row headline
      four_headline_name="COMMUNITY"

     //Change fur row items minimum 3 items. Maximum  5 items for responsiveness items, it must have unique names.
      four_row_items={["YouTube Channel","Instagram","Twitter","Facebook","Google"]}


       
     //Change footer items minimum 1 items. Maximum 3 items for responsiveness items , it must have unique names.
     footer_items={["2022TERMS & CONDITION","@ THE FOOTER APP","SPRIVACY POLICYCOOKIE POLICY"]}

      
      
      />
    
    
    </div>
  );
}

export default App;
