export const headerLinks = [
  {
    title: "发现音乐",
    link: "/discover",
  },
  {
    title: "我的音乐",
    link: "/mine",
  },
  {
    title: "朋友",
    link: "/friends",
  },
  {
    title: "商城",
    link: "https://music.163.com/store/product",
  },
  {
    title: "音乐人",
    link: "https://music.163.com/nmusician/web/index#/",
  },
  {
    title: "下载客户端",
    link: "https://music.163.com/#/download",
  },
];

export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service",
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy",
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children",
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html",
  },
  {
    title: "意见反馈",
    link: "#",
  },
];

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth",
  },
  {
    link: "https://music.163.com/recruit",
  },
  {
    link: "https://music.163.com/web/reward",
  },
  {
    link: "https://music.163.com/uservideo#/plan",
  },
];

// discover中的数据
export const dicoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend",
  },
  {
    title: "排行榜",
    link: "/discover/ranking",
  },
  {
    title: "歌单",
    link: "/discover/songs",
  },
  {
    title: "主播电台",
    link: "/discover/djradio",
  },
  {
    title: "歌手",
    link: "/discover/artist",
  },
  {
    title: "新碟上架",
    link: "/discover/album",
  },
];
// 热门主播
export const hotRadios = [
  {
    picUrl:
      "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
    name: "陈立",
    position: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485",
  },
  {
    picUrl:
      "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg",
    name: "DJ艳秋",
    position: "著名音乐节目主持人",
    url: "/user/home?id=91239965",
  },
  {
    picUrl:
      "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg",
    name: "国家大剧院古典音乐频道",
    position: "国家大剧院古典音乐官方",
    url: "/user/home?id=324314596",
  },
  {
    picUrl:
      "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg",
    name: "谢谢收听",
    position: "南京电台主持人王馨",
    url: "/user/home?id=1611157",
  },
  {
    picUrl:
      "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg",
    name: "DJ晓苏",
    position: "独立DJ，CRI环球旅游广播特邀DJ",
    url: "/user/home?id=2313954",
  },
];

// 歌手类别
export const artistCategories = [
  {
    title: "推荐",
    area: -1,
    artists: [
      {
        name: "推荐歌手",
        type: 1,
        url: "/discover/artist",
        id: 0,
      },
      {
        name: "入驻歌手",
        type: 2,
        url: "/discover/artist?cat=5001",
        dataPath: "/artist/list?cat=5001",
      },
    ],
  },
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1,
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2,
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3,
      },
    ],
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1,
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2,
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3,
      },
    ],
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1,
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2,
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3,
      },
    ],
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1,
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2,
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3,
      },
    ],
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1,
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2,
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3,
      },
    ],
  },
];
// 歌单默认歌曲详情
export const playListSong = [
  {
    name: "All My Love Is For You",
    id: 28844143,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 126793,
        name: "少女时代",
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 80,
    st: 0,
    rt: null,
    fee: 0,
    v: 17,
    crbt: null,
    cf: "",
    al: {
      id: 2897267,
      name: "The Best",
      picUrl:
        "https://p2.music.126.net/x4t6eM9ZQpiKRjM-e3dMHg==/5971447650966383.jpg",
      tns: [],
      pic: 5971447650966383,
    },
    dt: 223000,
    h: {
      br: 320000,
      fid: 0,
      size: 8930913,
      vd: -41800,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5358615,
      vd: -39300,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3572467,
      vd: -38400,
    },
    a: null,
    cd: "1",
    no: 9,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 9007199255003136,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 17,
    songJumpInfo: null,
    entertainmentTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 663018,
    mv: 1509,
    publishTime: 1406044800007,
  },
  {
    name: "DAY BY DAY (Japanese Ver.)",
    id: 26089233,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 127815,
        name: "T-ara",
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: "",
    fee: 0,
    v: 21,
    crbt: null,
    cf: "",
    al: {
      id: 2384020,
      name: "**** Love (Japanese ver.)(通常盤)",
      picUrl:
        "https://p1.music.126.net/XO97_nReCuNxdnoQosLgug==/2520080650885474.jpg",
      tns: [],
      pic: 2520080650885474,
    },
    dt: 208840,
    h: {
      br: 320000,
      fid: 0,
      size: 8356092,
      vd: -51300,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5013672,
      vd: -48800,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3342462,
      vd: -47399,
    },
    a: null,
    cd: "1",
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 9007199255003136,
    originCoverType: 0,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 21,
    songJumpInfo: null,
    entertainmentTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mst: 9,
    cp: 663018,
    rtype: 0,
    rurl: null,
    mv: 0,
    publishTime: 1449657738550,
  },
  {
    name: "Sexy Love (Japanese ver.)",
    id: 28828593,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 127815,
        name: "T-ara",
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 0,
    v: 20,
    crbt: null,
    cf: "",
    al: {
      id: 2902320,
      name: "Queen of Pops",
      picUrl:
        "https://p2.music.126.net/hgZfjFfyFftNLyTIw9hVIQ==/5950556929936915.jpg",
      tns: [],
      pic: 5950556929936915,
    },
    dt: 226480,
    h: {
      br: 320000,
      fid: 0,
      size: 9061398,
      vd: -47900,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5436856,
      vd: -45500,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3624585,
      vd: -44100,
    },
    a: null,
    cd: "1",
    no: 5,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 2,
    s_id: 0,
    mark: 262144,
    originCoverType: 0,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 20,
    songJumpInfo: null,
    entertainmentTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mst: 9,
    cp: 663018,
    rtype: 0,
    rurl: null,
    mv: 0,
    publishTime: 1404230400000,
  },
];
