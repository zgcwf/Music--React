import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

export default memo(function AppHeader() {
    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <NavLink to='/discover'>发现音乐</NavLink>
                    <NavLink to='/mine'>我的音乐</NavLink>
                    <NavLink to='/friends'>朋友</NavLink>
                </HeaderLeft>
                <HeaderRight>right</HeaderRight>
            </div>
            <div className='divider'></div>
        </HeaderWrapper>
    )
})
