import React, { Component } from 'react';
import API from '../utils/API';
import Container from '../components/Container'
import Input from '../components/Input'
// import SaveBtn from '../components/SaveBtn'
import FormBtn from '../components/FormBtn'
import Banner from '../components/Banner'
// import BannerAnim, { Element } from 'rc-banner-anim';
// import TweenOne from 'rc-tween-one';
// import 'rc-banner-anim/assets/index.css';
// const BgElement = Element.BgElement;




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




    render() {
        console.log(this.state.books)
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
                        <li key={i}>{book.volumeInfo.title}</li>   
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