
import React, {Component} from 'react'

class RightSide extends Component{

    render() {
      return  (
          <div className="sidebar-module sidebar-module-inset ">
            <div className="panel panel-default">
              <div className="panel-heading">小帖士</div>
              <div className="panel-body">
                <p>如果是你 Ruby, Rails 新手，请别在 Windows 上面折腾：<a href="https://ruby-china.org/topics/1020" target="_blank">https://ruby-china.org/topics/1020</a></p>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">友情社区</div>
              <div className="panel-body">
                <ul className="list-group" style={{textAlign: 'center'}}>
                   <li className="list-group-item"><a href="http://ruby-china.org" rel="nofollow" title="RubyChina 社区" target="_blank"><img src="https://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" style={{width:'130px '}}/></a>
                   </li>
                   <li className="list-group-item"><a href="http://cnodejs.org" rel="nofollow" title="CNode 社区" target="_blank">
                   <img src="//ruby-china-files.b0.upaiyun.com/photo/2016/d427ef3efd33b57721df152c2aa1735e.png" style={{width:'130px' }}/></a>
                   </li>
                   <li className="list-group-item"><a href="https://laravel-china.org" target="_blank" rel="nofollow">
                   <img src="//ruby-china-files.b0.upaiyun.com/photo/2016/d7782871f3fac7e85a95d20c74046909.png" style={{width:'130px' }}/></a>
                   </li>
                   <li className="list-group-item"><a href="http://elixir-cn.com" target="_blank" rel="nofollow">
                   <img src="//ruby-china-files.b0.upaiyun.com/photo/2015/f65fb5a10d3392a1db841c85716dd8f6.png" style={{width: '140px' }}/>
                   </a>
                   </li>
                   <li className="list-group-item"><a href="http://ionichina.com/" target="_blank" rel="nofollow">
                   <img src="//ruby-china-files.b0.upaiyun.com/photo/2016/62e5d33d4f90ead9e798e3f8ae085f16.png" style={{width: '140px'}}/>
                   </a>
                   </li>
                   <li className="list-group-item"><a href="https://testerhome.com/" target="_blank" rel="nofollow">
                   <img src="//ruby-china-files.b0.upaiyun.com/photo/2016/5cd78b730062ab3c768bcc2592c5c7fa.png" style={{width: '150px'}}/>
                   </a>
                   </li>
                </ul>
              </div>
            </div>


            <div className="panel panel-default">
              <div className="panel-heading">Statistics</div>
              <div className="panel-body">
                <p>小说数量: 2 </p>
                <p>用户数量: 2 </p>
                <p>总阅读量: 15 </p>
              </div>
            </div>

          </div>
      );
    }
}

export default RightSide
