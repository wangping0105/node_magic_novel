import React, {Component} from 'react'

import RightSide from './components/right_side'

class BookList extends Component{
    constructor(props) {
      super(props);
      this.state = { books: [] }
      const _this = this;
      $.ajax({
          url: 'http://localhost:9000/api/v1/home',
          dataType: 'json',
          type: 'get',
          success: (data)=>{
            console.log(data.data.books)
            _this.setState({
              books: data.data.books
            })
          }
      })
    }

    componentDidMount(){

    }

    componentDidUpdate(){
    }

    render() {
      console.log(this.state.books)
      return  (
          <ul id="tab_books" className="row bg-white table table-striped">
          {
              this.state.books.map(function (item) {
                  return (
                      <li  key={item.id}>
                          <h4><a href="/books/{item.id}">{item.title}</a></h4>
                          <div className="h-180">
                          <span>
                            <a href="/books/1">{item.introduction}</a>
                          </span>
                          </div>
                      </li>
                  )
              })
          }
          </ul>
      );
    }
}

class Bodys extends Component{
    componentDidMount(){

    }

    render() {
        return  (
            <div className="container">
              <div className="row">
                <div className="col-sm-8 book-main">
                    <div className="container1">
                      <hr className="featurette-divider"/>
                      <span><h2>热门小说</h2>
                      <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a data-remote="true" href="/homes/tab_books?book_type=">所有小说</a></li>
                        <li role="presentation"><a data-remote="true" href="/homes/tab_books?book_type=0">原创</a></li>
                        <li role="presentation"><a data-remote="true" href="/homes/tab_books?book_type=1">转载</a></li>
                      </ul>
                      </span>
                      <BookList />
                    </div>
                </div>
                <div className="col-sm-3">
                  <RightSide />
                </div>
              </div>
            </div>
          );
    }
}

export default Bodys
