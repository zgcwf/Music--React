import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';

import {HeaderWrapper} from './style'

export default memo(function AppHeader() {
    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>
            <NavLink to='/discover'>发现音乐</NavLink>
            <NavLink to='/mine'>我的音乐</NavLink>
            <NavLink to='/friends'>朋友</NavLink>
            </div>
            <div className='divider'></div>
        </HeaderWrapper>
    )
})
