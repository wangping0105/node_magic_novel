import React, {Component} from 'react'

import RightSide from './components/right_side'

class BookList extends Component{
    componentDidMount(){

    }

    render() {
      return  (
          <div id="tab_books" className="row bg-white">
              <div className="col-md-4 h-280">
              <h4><a href="/books/1">[武侠]测试书籍</a></h4>
              <div className="h-180">
              <span className="f-left">
                <a href="/books/1"></a>
              </span>
              <span>
                <a href="/books/1">测试的用的</a>
              </span>
              </div>
              <p><a className="btn btn-default" href="/books/1" role="button">查看更多 »</a></p>
            </div>
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
