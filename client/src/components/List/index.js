import React from 'react';

export function List(props) {


const bookData = 
{
  title: props.info.title,
  authors: props.info.authors,
  description: props.info.description,
  image: props.info.imageLinks.thumbnail,
  link: props.info.infoLink
};

console.log(bookData);

    return (



   <li key={props.index}>


  <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div className="uk-card-media-left uk-cover-container">
        <img src={props.info.imageLinks.thumbnail} alt="" uk-cover/>
        <a href={props.info.infoLink}><button className="uk-button uk-button-default">View</button></a>
        <button className="uk-button uk-button-default" onClick={() => props.saveBook(bookData)}>Save</button>
    </div>
    <div>
        <div className="uk-card-body">
        	
            <h3 className="uk-card-title">{props.info.title}</h3>
            <h5>{props.info.subtitle}</h5>
            <p>{props.info.description}</p>
        </div>
    </div>
	</div>
</li>
    )
}

export default List;