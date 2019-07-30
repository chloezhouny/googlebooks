import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container'
import Input from '../components/Input'
// import SaveBtn from '../components/SaveBtn'
import FormBtn from '../components/FormBtn'
import Banner from '../components/Banner'
import List from '../components/List'




class Search extends Component {
    state = {
        search: '',
        books: [],
        title: '',
        author: '',
        description: '',
        image: '',
        link: '',
        btnTxt: "Search"
    }

    // componentDidMount() {
        // this.loadBooks();

    // }

    // loadBooks = search => {
    //     API.findBooks(search)
    //         .then(res => 
    //             this.setState({ books: res.data, title: "", author: "", image: '', description: "" })
    //         )
    //         .catch(err => console.log(err))
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            btnTxt: "Searching..."
        })
    console.log("i love donuts")
        API.findBooks(this.state.search)
        .then(res => this.setState({
            books: res.data,
            btnTxt: "Search"
        }))
        .catch(err => console.log(err)) 
    };


  saveBook = bookData => {
    console.log("save button clicked");
    API.saveBook(bookData)
      .then(res => console.log(res.json))
      .catch(err => console.log(err));
  };

    render() {
        console.log(this.state.books);
         console.log(this.state.books[0]);

        return ( 
            <div>
            <Banner />
           <Container>
                <form>
                    <Input
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name='search'
                        placeholder="Enter a book title"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    >
                        {this.state.btnTxt}
                    </FormBtn>
                </form>

                <div>
                    {(this.state.books.length)? 
                    <ul>
                    {this.state.books.map((book, i)=>(
                        <div>
                        <List info={book.volumeInfo} saveBook={this.saveBook} index={i} />
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

export default Search;