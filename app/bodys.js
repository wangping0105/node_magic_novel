import React, {Component} from 'react'

import RightSide from './components/right_side'

class BookList extends Component{
    constructor(props) {
      super(props);
      this.state = { books: [], active: -1 }
      const _this = this;
      this.get_books(-1)

    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    get_books(tab_type){
      var _this = this

      $.ajax({
          url: 'http://localhost:9000/api/v1/home?book_type=' + tab_type,
          dataType: 'json',
          type: 'get',
          success: (data)=>{
            console.log(data.data.books)
            _this.setState({
              books: data.data.books,
              active: tab_type
            })
          }
      })
    }

    handleClick(tab_type){
      console.log(tab_type)
      this.get_books(tab_type)
    }

    render() {
      console.log(this.state.books)
      console.log(this.state.active)

      return  (
        <div className="container1">
          <hr className="featurette-divider"/>
          <span><h2>热门小说</h2>
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className={this.state.active ==-1 ? 'active' : ''}>
              <a onClick= {()=>this.handleClick(-1)} >所有小说</a>
            </li>

            <li role="presentation" className={this.state.active == 0 ? 'active' : ''}>
              <a onClick= {()=>this.handleClick(0)} >原创</a>
            </li>

            <li role="presentation" className={this.state.active == 1 ? 'active' : ''}>
              <a onClick= {()=>this.handleClick(1)} >转载</a>
            </li>
          </ul>
          </span>
          <table id="tab_books" className="table table-striped">
          <tbody>
          {
              this.state.books.map(function (item) {
                  return (
                      <tr  key={item.id}>
                        <td>
                          <h4><a href="/books/{item.id}">{item.title}</a></h4>
                          <div className="h-180">
                          <span>
                            <a href="/books/1">{item.introduction}</a>
                          </span>
                          </div>
                        </td>
                      </tr>
                  )
              })
          }
          </tbody>
          </table>
        </div>
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
                    <BookList />
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
