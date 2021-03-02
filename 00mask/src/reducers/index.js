import produce from "immer";
const baseState = {
  loading: false,
  error: "",
  stores: [
    {
      addr: '서울특별시 노원구 동일로 1701 110-1호 (상계동, 오피앙오스피스텔 상가)',
      code: '11803801',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6803112,
      lng: 127.0549036,
      name: '오피앙약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:58:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 섬밭로 263 롯데상가1층 (중계동)',
      code: '11806061',
      created_at: '2020/05/11 14:45:00',
      lat: 37.639142,
      lng: 127.0638313,
      name: '장생약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 10:19:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노해로 456 동방빌딩 1층 (상계동)',
      code: '11806401',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6535927,
      lng: 127.0588171,
      name: '동방약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:58:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 초안산로5길 12 110호 (월계동, 월계프라자)',
      code: '11816384',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6325635,
      lng: 127.0517605,
      name: '월계프라자약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:00:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 242 113호, 114호 (중계동, 삼부프라자)',
      code: '11816392',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6492399,
      lng: 127.0769853,
      name: '건강과행복이열리는약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:39:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로217가길 11 1층 (상계동, 대일빌딩)',
      code: '11816627',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6534504,
      lng: 127.0598978,
      name: '백경약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 07:57:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로48길 13 (상계동)',
      code: '11817224',
      created_at: '2020/05/10 23:55:00',
      lat: 37.6648791,
      lng: 127.0670837,
      name: '상계하나로약국',
      remain_stat: 'empty',
      stock_at: '2020/05/10 08:58:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로 138 준효약국 1층 (공릉동)',
      code: '11817267',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6221926,
      lng: 127.0793745,
      name: '준효약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:37:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로228길 35 (상계동)',
      code: '11818166',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6679325,
      lng: 127.0590528,
      name: '온누리영광약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 10:42:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로14길 8 105호 (중계동, 주공2단지상가)',
      code: '11818484',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6575776,
      lng: 127.0780091,
      name: '다정약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:39:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로230가길 15 103호 (상계동, 우방아파트상가)',
      code: '11818875',
      created_at: '2020/05/11 14:50:00',
      lat: 37.67154331,
      lng: 127.0572096,
      name: '희망약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:21:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로26길 181 1층 (상계동, 청자빌딩)',
      code: '11818921',
      created_at: '2020/05/11 14:50:00',
      lat: 37.658081,
      lng: 127.0713701,
      name: '기쁨약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:58:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로204가길 34 씨앤미복합빌딩 308호 (중계동)',
      code: '11818972',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6407388,
      lng: 127.0681502,
      name: '씨앤미3층온누리약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:03:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 중계로 120 (중계동)',
      code: '11819545',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6463011,
      lng: 127.08181,
      name: '삼기약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:11:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 화랑로 425-47 1층 (공릉동)',
      code: '11819570',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6181858,
      lng: 127.0745437,
      name: '태능삼호약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:15:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로37길 29 1층 (상계동)',
      code: '11826924',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6714583,
      lng: 127.0800023,
      name: '목원약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:11:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 77 한성여객(주) (하계동)',
      code: '11830115',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6375293,
      lng: 127.0704785,
      name: '무궁화약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:28:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로59길 18 102호 (하계동, 삼성시티빌)',
      code: '11832347',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6335317,
      lng: 127.0709695,
      name: '지혜약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:35:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로 333 104호 (중계동, 시영3단지상가)',
      code: '11832916',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6465817,
      lng: 127.0697643,
      name: '보건약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:55:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로 330 롯데마트 지하1층 (중계동)',
      code: '11835591',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6468244,
      lng: 127.0709359,
      name: '소나무약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 10:21:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 덕릉로126길 11 (상계동)',
      code: '11842911',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6705784,
      lng: 127.0817496,
      name: '메디팜은아약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:28:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1401 1층 (상계동, 상아빌딩)',
      code: '11843977',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6536148,
      lng: 127.0602679,
      name: '상아온누리약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:08:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 석계로9길 25 1층 오른쪽점포호 (월계동)',
      code: '11844990',
      created_at: '2020/05/11 14:45:00',
      lat: 37.616952,
      lng: 127.062941,
      name: '건강한약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:45:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로16길 21 106호 (하계동, 주공9단지아파트상가)',
      code: '11846551',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6421347,
      lng: 127.0737078,
      name: '용화당약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:04:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1673 (상계동)',
      code: '11851457',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6778534,
      lng: 127.0549716,
      name: '수락100세약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:13:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로 306 (상계동)',
      code: '11856718',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6703196,
      lng: 127.0795793,
      name: '길약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:02:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로 88 (상계동)',
      code: '11856742',
      created_at: null,
      lat: 37.6564554,
      lng: 127.0646098,
      name: '동덕약국',
      remain_stat: null,
      stock_at: null,
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 986 102동 1층 131-A호 (공릉동, 노원 프레미어스 엠코)',
      code: '11856793',
      created_at: '2020/05/11 14:50:00',
      lat: 37.618481,
      lng: 127.076212,
      name: '참빛약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 07:30:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로 147 2층 (공릉동)',
      code: '11856823',
      created_at: '2020/05/11 14:50:00',
      lat: 37.623149,
      lng: 127.07908,
      name: '재민약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:59:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 덕릉로 459-37 123호 (상계동, 주공1단지 가상가)',
      code: '11856858',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6468154,
      lng: 127.059675,
      name: '유성약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 10:25:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 410 1층 (상계동)',
      code: '11856947',
      created_at: '2020/05/11 14:50:00',
      lat: 37.661285,
      lng: 127.0712218,
      name: '하님약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:59:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1350 105호, 106호 (상계동)',
      code: '11856955',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6492539,
      lng: 127.0623495,
      name: '백약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:20:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로3길 10 한일빌딩 304호 (상계동)',
      code: '11856998',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6567056,
      lng: 127.0625748,
      name: '손약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:13:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 253 305호 (중계동, 세신프라자)',
      code: '11857056',
      created_at: '2020/05/11 14:45:00',
      lat: 37.65042302,
      lng: 127.076353,
      name: '소망약국',
      remain_stat: 'break',
      stock_at: '2020/05/11 09:51:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 463 (상계동)',
      code: '11857188',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6642153,
      lng: 127.0664624,
      name: '우성약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:45:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로1길 66 1층 102호 (상계동)',
      code: '11857218',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6589951,
      lng: 127.0615089,
      name: '수성약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:06:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 석계로 49 (월계동, 현대아파트 주상가 122호)',
      code: '11857226',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6189661,
      lng: 127.0624862,
      name: '성심온누리약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:58:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 월계로45길 28 1층 2-3호 (월계동, 월계아파트형 공장내)',
      code: '11857366',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6268565,
      lng: 127.0509977,
      name: '월계약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:47:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 섬밭로 229 201호 (하계동, 벽산상가)',
      code: '11857374',
      created_at: '2020/05/11 14:50:00',
      lat: 37.634832,
      lng: 127.065806,
      name: '세브란스약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:52:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로46길 3 102호 (공릉동, 평화타운)',
      code: '11857439',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6271754,
      lng: 127.0792717,
      name: '백조약국',
      remain_stat: 'few',
      stock_at: '2020/05/11 10:00:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로34길 92 (상계동)',
      code: '11857579',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6630675,
      lng: 127.0661769,
      name: '혜인약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 07:45:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로58가길 8 (하계동)',
      code: '11857781',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6359239,
      lng: 127.0729649,
      name: '하계약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:48:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로27길 15 1층 (상계동)',
      code: '11857889',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6592353,
      lng: 127.0702517,
      name: '남북약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:45:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 화랑로 337 (월계동)',
      code: '11857897',
      created_at: '2020/05/10 23:55:00',
      lat: 37.6151212,
      lng: 127.0652335,
      name: '경화당약국',
      remain_stat: 'break',
      stock_at: '2020/05/09 12:27:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 중계로14길 29 (중계동)',
      code: '11857901',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6498035,
      lng: 127.0819853,
      name: '중계약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:46:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로182길 20 (공릉동)',
      code: '11857935',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6230026,
      lng: 127.0753242,
      name: '창덕약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:47:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 마들로 111 308호 (월계동, 삼호아파트상가)',
      code: '11858427',
      created_at: '2020/05/11 14:50:00',
      lat: 37.62462944,
      lng: 127.0672212,
      name: '삼호성심약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:41:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1545 102호,103호 (상계동, 현대골드씨티)',
      code: '11860090',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6664002,
      lng: 127.0569974,
      name: '평강상록수약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:27:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1101 2층 (공릉동, 하니빌딩)',
      code: '11861681',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6283322,
      lng: 127.0713788,
      name: '한사랑약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:44:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 마들로 111 214호 (월계동, 삼호나상가)',
      code: '11862173',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6246256,
      lng: 127.0670763,
      name: '월계우리약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:24:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노해로 452 101호, 102호 (상계동, 노빌리안골드)',
      code: '11869127',
      created_at: '2020/05/11 14:50:00',
      lat: 37.653576,
      lng: 127.058347,
      name: '진약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:28:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로192길 20 1층 (공릉동)',
      code: '11871041',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6259269,
      lng: 127.0742699,
      name: '보윤약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:44:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로230가길 15 101호 (상계동, 우방아파트상가)',
      code: '11871059',
      created_at: '2020/05/11 14:50:00',
      lat: 37.671568,
      lng: 127.057238,
      name: '유림약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:53:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 누원로 22 크로바상가 101호 (상계동)',
      code: '11872161',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6871033,
      lng: 127.0530611,
      name: '뉴크로바약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 11:57:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 331 중계주공3단지아파트단지내상가 101호 (중계동)',
      code: '11872608',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6566351,
      lng: 127.0774629,
      name: 'the사랑약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:58:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 초안산로1길 18 101호 (월계동, 주공아파트상가)',
      code: '11874503',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6285801,
      lng: 127.0523375,
      name: '황인재약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:48:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노해로 506 112호 (상계동, 주공6단지 바상가)',
      code: '11875895',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6548335,
      lng: 127.0642252,
      name: '자인당약국',
      remain_stat: 'few',
      stock_at: '2020/05/11 09:25:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1551 삼전빌딩 1층 101,102,107,108호 (상계동)',
      code: '11876468',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6668972,
      lng: 127.056869,
      name: '서부약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 11:10:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1036 1층 (공릉동)',
      code: '11879599',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6225931,
      lng: 127.074337,
      name: '행복을주는약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:16:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 월계로 370 (월계동, 희성프라자 105호)',
      code: '11879971',
      created_at: '2020/05/11 14:50:00',
      lat: 37.631152,
      lng: 127.061266,
      name: '인덕약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:15:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1280 1층 109호,110호 (중계동, 무지개아파트단지내상가)',
      code: '11880031',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6434986,
      lng: 127.0657465,
      name: '동산약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:53:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로227길 26 2층 (상계동, 상계주공아파트15단지상가)',
      code: '11880163',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6683012,
      lng: 127.055611,
      name: '후생약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:04:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노해로 492 204호 (상계동, 프린스빌딩)',
      code: '11880210',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6544582,
      lng: 127.0626764,
      name: '연세약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:40:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 화랑로 325 (월계동)',
      code: '11880309',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6149399,
      lng: 127.0640504,
      name: '무지개온누리약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:45:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로203가길 29 205호, 206호 (중계동, 브라운스톤중계)',
      code: '11881348',
      created_at: '2020/05/11 14:50:00',
      lat: 37.64035061,
      lng: 127.0641835,
      name: '올리브약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:06:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 월계로45길 21 203호 (월계동, 롯데캐슬루나아파트)',
      code: '11882115',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6261102,
      lng: 127.0498162,
      name: '누리약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:52:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1379 105,106호 (상계동)',
      code: '11884037',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6518073,
      lng: 127.0609192,
      name: '다모아약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:27:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로 309-1 (상계동)',
      code: '11885726',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6708593,
      lng: 127.0800083,
      name: '당고개약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:13:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 56 1층 10호 (하계동, 미성아파트상가)',
      code: '11886111',
      created_at: '2020/05/11 14:50:00',
      lat: 37.636003,
      lng: 127.068736,
      name: '위드팜대학약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:17:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 269 105호 (중계동, 마들프라자)',
      code: '11887630',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6517265,
      lng: 127.0768035,
      name: '미즈약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:49:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 중계로 160 204호 (중계동, 화인상가)',
      code: '11887737',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6495898,
      lng: 127.0812993,
      name: '화인팜약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:55:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로32길 56 101호 (공릉동)',
      code: '11888199',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6216956,
      lng: 127.0822926,
      name: '이손약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:14:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1530 105호 (상계동, 다모아빌딩)',
      code: '11893168',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6650741,
      lng: 127.0580449,
      name: '마들소망약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:07:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 마들로 31 214호 (월계동, 그랑빌아파트상가)',
      code: '11893982',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6175164,
      lng: 127.0682195,
      name: '복음약국',
      remain_stat: 'break',
      stock_at: '2020/05/11 09:05:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로243길 33 1층 (상계동)',
      code: '11894377',
      created_at: '2020/03/15 23:55:00',
      lat: 37.6784694,
      lng: 127.053145,
      name: '건강샘온누리약국',
      remain_stat: 'break',
      stock_at: '2020/03/15 09:34:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 마들로 111 207, 208호 (월계동, 나상가)',
      code: '11894881',
      created_at: '2020/05/11 14:45:00',
      lat: 37.62463231,
      lng: 127.0670485,
      name: '삼호약국',
      remain_stat: 'break',
      stock_at: '2020/05/11 08:28:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1353 (상계동)',
      code: '11895071',
      created_at: '2020/05/11 14:50:00',
      lat: 37.649424,
      lng: 127.0615724,
      name: '종로프라자약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 10:05:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로 43 (공릉동)',
      code: '11895438',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6254259,
      lng: 127.0858403,
      name: '샘물약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:55:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 365 1층 (중계동, 데미안빌딩)',
      code: '11895519',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6582229,
      lng: 127.07414,
      name: '금강약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:06:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1548 (상계동)',
      code: '11895811',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6666795,
      lng: 127.0576424,
      name: '21세기상계약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:30:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1099 (공릉동)',
      code: '11897660',
      created_at: '2020/05/11 14:50:00',
      lat: 37.627926,
      lng: 127.0715611,
      name: '하니약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:17:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로237길 40 101호 (상계동, 대한빌)',
      code: '11899417',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6736923,
      lng: 127.0530937,
      name: '자연약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:41:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 초안산로 7 105호 (월계동, 월계2단지주공아파트종합상가)',
      code: '11899565',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6285969,
      lng: 127.0549359,
      name: '하나로약국',
      remain_stat: 'few',
      stock_at: '2020/05/11 08:54:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 24 108호 (하계동, 하계5단지상가)',
      code: '12800660',
      created_at: '2020/05/11 14:50:00',
      lat: 37.634219,
      lng: 127.0659031,
      name: '세일약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:05:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로58가길 14 1층 (하계동)',
      code: '12801046',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6362689,
      lng: 127.0728252,
      name: '푸른솔약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:41:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로1길 38 (상계동)',
      code: '12801607',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6577232,
      lng: 127.0617128,
      name: '건강플러스약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:02:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1102 (공릉동)',
      code: '12802034',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6282863,
      lng: 127.072,
      name: '노원종로약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:39:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 383 2층 26호 (중계동, 삼창타워프라자)',
      code: '12802301',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6589524,
      lng: 127.0725471,
      name: '국약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:48:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노원로1길 67 302호 (공릉동, 대덕프라자)',
      code: '12802352',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6208327,
      lng: 127.0836582,
      name: '화랑대약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:38:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로5길 12 112호, 113호 (상계동, 동양메이저상가)',
      code: '12802557',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6577059,
      lng: 127.0635679,
      name: '온누리약국',
      remain_stat: 'break',
      stock_at: '2020/05/11 08:55:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 월계로55길 4 111호 (월계동, 사슴아파트2단지상가)',
      code: '12802689',
      created_at: '2020/05/11 14:50:00',
      lat: 37.631937,
      lng: 127.0609256,
      name: '한빛약국',
      remain_stat: 'few',
      stock_at: '2020/05/11 09:13:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 덕릉로 780 4,5,6호 (상계동, 동아불암아파트상가)',
      code: '12803642',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6670475,
      lng: 127.0799007,
      name: '21세기보배약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:11:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 노해로 480 (상계동, 1층)',
      code: '12803898',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6541852,
      lng: 127.0614531,
      name: '수약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:17:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로48길 6 202호 (상계동, 한신2차아파트상가)',
      code: '12807010',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6660848,
      lng: 127.0686827,
      name: '서경약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 09:19:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 265 102호 (중계동)',
      code: '12807141',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6514602,
      lng: 127.076574,
      name: '성흔메디카약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:46:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 덕릉로 730 107호 (상계동)',
      code: '12808008',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6627862,
      lng: 127.0761611,
      name: '종로모범약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:33:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로 119 (상계동)',
      code: '12808326',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6579256,
      lng: 127.0679117,
      name: '세계로약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:17:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로59나길 78-10 (하계동)',
      code: '12808679',
      created_at: '2020/05/11 14:45:00',
      lat: 37.6357464,
      lng: 127.0701239,
      name: '동문약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 08:38:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 공릉로59나길 64 (하계동)',
      code: '12808997',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6359105,
      lng: 127.0697114,
      name: '후문약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 07:37:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 474 153호 (상계동, 보람상가)',
      code: '12809217',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6648282,
      lng: 127.0654593,
      name: '온누리보람약국',
      remain_stat: 'some',
      stock_at: '2020/05/11 08:46:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 동일로 1529 303호 (상계동)',
      code: '12809519',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6651461,
      lng: 127.0572948,
      name: '마들하나로약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 09:04:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 한글비석로 383 1층 일부호 (중계동, 삼창타워프라자)',
      code: '12809896',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6589524,
      lng: 127.0725471,
      name: '1층호약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 13:15:00',
      type: '01'
    },
    {
      addr: '서울특별시 노원구 상계로 65 304호 (상계동)',
      code: '12809918',
      created_at: '2020/05/11 14:50:00',
      lat: 37.6563604,
      lng: 127.0622597,
      name: '연수약국',
      remain_stat: 'plenty',
      stock_at: '2020/05/11 11:36:00',
      type: '01'
    }
  ],
};

const reducer = produce((state, action) => {

}, baseState);

export default reducer;