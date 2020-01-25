import React from 'react';

const Item = (props) => {
  return ( 
    <div>
    {props.itemsToDisplay && props.itemsToDisplay.map(elem => {
      return(
        <div key={elem.id} className="post">
          <img src={elem.image} alt=""/>
          <div className="item-description">
            <button className="item-button" onClick={() => props.addVote(elem.id)}>{elem.votes}</button>
            <h2 className="item-title"><a
              className="item-link"
              href={elem.url}
              target="_blank"
              rel="noopener noreferrer">{elem.title}</a> </h2>
            <h3 className="item-date-dev">{"Published in "} {elem.date} {" by "} {elem.developer}</h3>
            <h3 className="item-submitter">{"Submitted by: "} {elem.submitter}</h3>
          </div>
        </div>
      )
    })}
  </div>
   );
}
 
export default Item;