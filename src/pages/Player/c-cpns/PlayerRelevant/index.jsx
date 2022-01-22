import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSimiSongAction } from '../../store/actionCreators';

import ThemeHeaderSmall from '@/components/ThemeHeaderSmall';
import { RelevantWrapper } from './style';

export default memo(function HYRelevant() {
    const { simiSongs } = useSelector(state => ({
        simiSongs: state.getIn(["player", "simiSongs"])
    }), shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSimiSongAction());
    }, [dispatch]);

    return (
        <RelevantWrapper>
            <ThemeHeaderSmall title="相似歌曲" />
            <div className="songs">
                {
                    simiSongs.map((item) => {
                        return (
                            <div className="song-item" key={item.id}>
                                <div className="info ">
                                    <div className="title text-nowrap">
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="artist text-nowrap">
                                        <span> {item.artists[0].name}</span>

                                    </div>
                                </div>
                                <div className="operate">
                                    <button className="item sprite_icon3 play"></button>
                                    <button className="item sprite_icon3 add"></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </RelevantWrapper>
    )
})
