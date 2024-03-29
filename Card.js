import React from 'react';
// Add import statements below

import { useSelector,useDispach } from 'react-redux'
import { selectVisibleIDs,flipCard,selectMatchedIDs,resetCards }  from '../../boardSlice'

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const dispach = useDispach()
  const visibleIDs = useSelector(selectVisibleIDs)
  const matchedIDs = useSelector(selectMatchedIDs)
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispach(flipCards(id))
    
  };
    const tryAgainHandler = () => {
    // Add action dispatch below
    dispach(resetCards())
  };


  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  //visibleIDs.includes(id)
  if (visibleIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(ids)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = tryAgainHandler;
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};