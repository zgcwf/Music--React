import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Button } from 'antd';

import { NotFountWrapper } from './style'
const NotFound = (props) => {
    const clickBack = () => {
        props.history.goBack()
    }
    return (
        <NotFountWrapper className='wrap-v2'>
            <div className="cf">
                <div className='wrap-404'>
                    <div className="cf">
                        <div className='title-404'><i>网</i><i>易</i><i>云</i><i>音</i><i>乐</i></div>
                    </div>
                    <div className="reason">
                        <p className="not-found-tip">Not Found  :( 很抱歉，您访问的页面不存在!)</p>
                        <p className="possible">可能原因:</p>
                        <ul>
                            <li>此页面尚未完成</li>
                            <li>该数据或音乐已被删除，但却被搜索引擎收录了，通过搜索引擎访问就会看到此页面</li>
                            <li>您手动输入了一个从来没有的访问url，这样系统也是无法识别您的url，报错</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="not_found">
                    <i className="ribbon"></i>
                    <div className="not-found cf">
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </div>
                    <div className="btn">
                        <NavLink to="/discover/recommend" className="button">看看首页</NavLink>
                        <Button className="button" onClick={clickBack}>
                            返回上页
                        </Button>
                    </div>
                </div>
            </div>
        </NotFountWrapper>
    )
}
export default withRouter(NotFound)