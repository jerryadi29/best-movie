import React from 'react';
import './content.css';

function Content({ types }) {
  return (
    <div className="content">

      <Contentsection type={types} />
    

    </div>
  );
}

const Contentsection = ({ type }) => (
  <div className="content-section">
    <p className="content-para">
      Our
      {' '}
      {type}
      {' '}
      Service
    </p>
    <br />
    <p>
      Top 100 Television Movies. Best of Rotten Tomatoes.
      <br />
      {' '}
      Movies with 40 or more critic reviews vie for their place in history at Rotten Tomatoes.
      {' '}
      <br />
      Eligible movies are ...
    </p>
  </div>

);
export default Content;