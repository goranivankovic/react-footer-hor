import React from 'react'


import styled, { css } from 'styled-components'

function FooterBar({bgColor,text_color,headline_color,border_color,
  first_headline_name,first_row_items , 
  second_headline_name, second_row_items ,
  three_headline_name , three_row_items ,
  four_headline_name , four_row_items ,
  footer_items

 }) {

  const Empty=styled.div`
  height: 7.5vh;
  width: 100%;
  `;


  const Main =styled.div`
  height: 65vh;
  width: 100%;
  background-color:grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  cursor: pointer;

  @media only screen and (max-width: 768px) {

    height: 158vh;
    width: 100%;
    background-color:grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    cursor: pointer;
    font-family: 'Righteous', cursive;
  }

  @media only screen and (max-width: 600px) {
    height: 183vh;
    width: 100%;
    background-color:grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    cursor: pointer;
    font-family: 'Righteous', cursive;
  }

  `;


  const FirstDiv=styled.div`
  height: 40vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1250px) {
    height: 40vh;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  @media only screen and (max-width: 992px) {
    height: 40vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
  }

  @media only screen and (max-width: 768px) {
    height: 149vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {

    height: 149vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
  }


  `;

  const FirstRow =styled.div`

  height: 37vh;
  width: 25%;
  padding-right:15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.1rem;

  

  @media only screen and (max-width: 1250px) {
    height: 37vh;
    width: 25%;
    padding-right:15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size:1rem;

  }

  @media only screen and (max-width: 992px) {
    height: 37vh;
    width: 25%;
    padding-right:15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size:.85rem;

  }
  @media only screen and (max-width: 768px) {
    height: 33vh;
    width: 85%;
    padding-right:15px;
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
  }
        
  @media only screen and (max-width: 600px) {
    height: 33vh;
    width: 90%;
    padding-right:15px;
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
  }

   
  `;
  const FirstRowHeadline=styled.div`
  height: 5vh;
  width: 80%;
  font-size: 1.3rem;
  border-bottom: 1px solid white;

  @media only screen and (max-width: 1250px) {
    height: 5vh;
    width: 80%;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 992px) {
    height: 5vh;
    width: 80%;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    height: 5vh;
    width: 70%;
    font-size: 1.2rem;
    border-bottom: 1px solid white
  }

  @media only screen and (max-width: 600px) {
    height: 5vh;
    width: 70%;
    font-size: 1.2rem;
    border-bottom: 1px solid white
  }

  `;

  const SecondDiv=styled.div`   
   height: 10vh;
   width: 85%;
   display: flex;
   align-items: center;
   justify-content: space-around;
   font-size: 1rem;

   @media only screen and (max-width: 1250px) {
    height: 10vh;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-around;
     font-size: 1rem;

   }

   @media only screen and (max-width: 992px) {
    height: 10vh;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: .9rem;
   }

   @media only screen and (max-width: 768px) {
    height: 10vh;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: .9rem;

   }

   @media only screen and (max-width: 600px) {
    height: 25vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
   }

  `;


  return (
    <Main style={{background:bgColor || 'grey',color:text_color || 'white'  }}>
        <Empty></Empty>



        <FirstDiv>

      <FirstRow>
          <FirstRowHeadline style={{color:headline_color || 'red',borderColor:border_color || 'white'}}>{first_headline_name}</FirstRowHeadline>

          
         {first_row_items.map((el)=>
         <div key={el}>{el}</div>
         )}

         


      </FirstRow>






      <FirstRow>

      <FirstRowHeadline style={{color:headline_color || 'red',borderColor:border_color || 'white'}}>{first_headline_name}</FirstRowHeadline>

      
      {second_row_items.map((el)=>
      <div key={el}>{el}</div>
      )}
    

          
          </FirstRow>






          <FirstRow>
          <FirstRowHeadline style={{color:headline_color || 'red',borderColor:border_color || 'white'}}>{first_headline_name}</FirstRowHeadline>

          {three_row_items.map((el)=>
          <div key={el}>{el}</div>
          )}

          
          </FirstRow>







          <FirstRow>
          <FirstRowHeadline style={{color:headline_color || 'red',borderColor:border_color || 'white'}}>{first_headline_name}</FirstRowHeadline>


          {four_row_items.map((el)=>
          <div key={el}>{el}</div>
          )}

          </FirstRow>

          




        </FirstDiv>




        <SecondDiv>

          {footer_items.map((el)=>
          <div key={el}>{el}</div>
          )}
      
        </SecondDiv>




       <Empty></Empty>
    </Main>
  )
}

export default FooterBar;