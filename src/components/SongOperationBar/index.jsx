import React, { memo } from 'react';
import { useDispatch } from "react-redux";

import { OperationBarWrapper } from './style';
import { getSongDetailAction } from "@/pages/Player/store/actionCreators";

export default memo(function SongOperationBar(props) {
    const { favorTitle, shareTitle, downloadTitle, commentTitle, id } = props;
    // redux hooks
    const dispatch = useDispatch();

    // other handle
    // 点击在下方播放音乐,未实现
    const playMusic = (id) => {
        dispatch(getSongDetailAction(id));
    };
    return (
        <OperationBarWrapper>
            <span className="play">
                <div onClick={(e) => playMusic(id)}>
                    <div className="play-icon sprite_button"  >
                        <span className="play sprite_button">
                            <i className="sprite_button"></i>
                            <span>播放</span>
                        </span>
                    </div>
                </div>

                <a href="/abc" className="add-icon sprite_button">+</a>
            </span>
            <a href="/abc" className="item sprite_button">
                <i className="icon favor-icon sprite_button">{favorTitle}</i>
            </a>
            <a href="/abc" className="item sprite_button">
                <i className="icon share-icon sprite_button">{shareTitle}</i>
            </a>
            <a href="/abc" className="item sprite_button">
                <i className="icon download-icon sprite_button">{downloadTitle}</i>
            </a>
            <a href="/abc" className="item sprite_button">
                <i className="icon comment-icon sprite_button">{commentTitle}</i>
            </a>
        </OperationBarWrapper>
    )
})
