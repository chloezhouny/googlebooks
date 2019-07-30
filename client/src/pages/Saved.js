import React, { Component } from 'react';
import API from '../utils/API';
import Banner from '../components/Banner'
import Container from '../components/Container'
import ListSaved from '../components/ListSaved'








class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks()
    };

    getSavedBooks() {
        API.getSavedBooks()
            .then(res => this.setState({ books: res.data}))
            .catch(err => console.log(err));
    };


  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.getSavedBooks())
      .catch(err => console.log(err));
  };


    render() {

        console.log(this.state.books);
        console.log(this.state.books[0]);
        return(   
            <div>         
            <Banner />
             <Container>
             <div>
                    {(this.state.books.length)? 
                    <ul>
                    {this.state.books.map((book, i)=>(
                        <div>
                        <ListSaved info={book} deleteBook={this.deleteBook} index={i} />
                        </div>

                    ))}
                    </ul>
                : "No Books to display!"}
                </div>

             </Container>
             </div>

        )
    }
}

export default Saved;