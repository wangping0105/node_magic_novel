import React, {Component} from 'react'

class Headers extends Component{
    render() {
        return  (
                <nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
                  <div className="container">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="/">魔书网</a>
                      </div>
                      <div id="navbar" className="collapse navbar-collapse">
                          <ul className="nav navbar-nav">
                              <li className="active"><a href="/" data-no-turbolink="true">首页</a></li>
                              <li className=""><a href="/books" data-no-turbolink="true">魔·书库</a></li>
                              <li className=""><a href="/homes/react_demo" data-no-turbolink="true">吐槽区 <i id="talk_count" className="color-red"></i></a></li>
                          </ul>
                      </div>
                  </div>
                </nav>
        );
    }
}

export default Headers
