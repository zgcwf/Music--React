import React, { memo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils/Rec-format';

import SongOperationBar from '@/components/SongOperationBar';
import {
    InfoWrapper,
    InfoLeft,
    InfoRight
} from './style';

export default memo(function PlayerInfo(props) {
    // props and hooks
    const [isSpread, setIsSpread] = useState(false);

    // redux hooks
    const { currentSong, lyricList } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        lyricList: state.getIn(["player", "lyricList"])
    }), shallowEqual);

    // handle code
    const totalLyricCount = isSpread ? lyricList.length : 13;

    return (
        <InfoWrapper>
            <InfoLeft>
                <div className="image">
                    <img src={getSizeImage(currentSong && currentSong.al && currentSong.al.picUrl, 130)} alt="" />
                    <span className="cover image_cover"></span>
                </div>
                <div className="link">
                    <i className="sprite_icon2"></i>
                    <a href="#/">生成外联播放器</a>
                </div>
            </InfoLeft>
            <InfoRight isSpread={isSpread}>
                <div className="header">
                    <i className="sprite_icon2"></i>
                    <h3 className="title">{currentSong && currentSong.name}</h3>
                </div>
                <div className="singer">
                    <span className="label">歌手：</span>
                    <a href="/#" className="name">{currentSong && currentSong.ar[0] && currentSong.ar[0].name}</a>
                </div>
                <div className="album">
                    <span className="label">所属专辑：</span>
                    <a href="/#" className="name">{currentSong && currentSong.al.name}</a>
                </div>

                <SongOperationBar favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)"
                    id={currentSong.id} />

                <div className="lyric">
                    <div className="lyric-info">
                        {
                            lyricList.slice(0, totalLyricCount).map((item) => {
                                return <p key={item.time} className="text">{item.content}</p>
                            })
                        }
                    </div>
                    <button className="lyric-control"
                        onClick={e => setIsSpread(!isSpread)}>
                        {isSpread ? "收起" : "展开"}
                        <i className="sprite_icon2"></i>
                    </button>
                </div>
            </InfoRight>
        </InfoWrapper>
    )
})
