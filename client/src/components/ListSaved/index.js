import React from 'react';

export function ListSaved(props) {

console.log(props);


    return (

   <li key={props.index}>


  <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div className="uk-card-media-left uk-cover-container">
        <img src={props.info.image} alt="" uk-cover/>
        <a href={props.info.link}><button className="uk-button uk-button-default">View</button></a>
        <button className="uk-button uk-button-default" onClick={() => props.deleteBook}>Delete</button>
    </div>
    <div>
        <div className="uk-card-body">       	
            <h3 className="uk-card-title">{props.info.title}</h3>
            <p>{props.info.description}</p>
        </div>
    </div>
	</div>
</li>
    )
}

export default ListSaved;