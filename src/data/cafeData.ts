import { MenuItem, Facility, DriveCourse, GuestReview, StoreInfo } from '../types';

import heroSunset from '../assets/images/paradise_exact_real_hero_1788067718142.jpg';
import homemadeFood from '../assets/images/paradise_homemade_food_1788065897549.jpg';
import bakeryDessert from '../assets/images/paradise_bakery_dessert_1788065913166.jpg';
import snackMart from '../assets/images/paradise_snack_mart_1788065926055.jpg';
import sunsetObservatory from '../assets/images/sunset_observatory_1788183356480.jpg';
import baeksuRoad from '../assets/images/baeksu_road_1788183871938.jpg';
import chilsanTower from '../assets/images/chilsan_tower_1788183886897.jpg';
import baekjeSite from '../assets/images/baekje_site_1788183900605.jpg';
import gamamiBeach from '../assets/images/gamami_beach_1788184292763.jpg';
import yeonggwangWindFarm from '../assets/images/yeonggwang_wind_farm_1788184317862.jpg';

export const IMAGES = {
  heroSunset,
  gravelTerrace: heroSunset,
  homemadeFood,
  bakeryDessert,
  snackMart,
  sunsetObservatory,
  baeksuRoad,
  chilsanTower,
  baekjeSite,
  gamamiBeach,
  yeonggwangWindFarm,
};

export const STORE_INFO: StoreInfo = {
  name: '카페 파라다이스',
  subName: 'CAFE & OCEAN LOUNGE PARADISE',
  phone: '061-352-3516', // Yeonggwang area code 061
  address: '전남광주통합특별시 영광군 백수읍 해안로 703',
  addressDetail: '바다가 내려다보이는 해안도로변 1층 단독건물 & 넓은 자갈마당',
  operatingHours: '평일 13:30 ~ 19:00 (일몰 시간에 따라 탄력적 연장 영업) / 주말·공휴일 09:30 ~ 20:00',
  parkingInfo: '매장 전용 넓은 무료 주차장 완비 (대형 SUV 및 단체 방문 가능)',
  restroomInfo: '남/여 구분 청결하고 깨끗한 실내 화장실 완비',
  notice: '노을 지는 오후 6시~7시 30분경 야외 자갈마당 파라솔 좌석이 가장 인기 있습니다.',
  features: [
    '🌅 서해안 붉은 노을 1열 파노라마 오션뷰',
    '⛱️ 자갈 깔린 넓은 마당 야외 파라솔 벤치 5석 & 루프탑 테라스',
    '🎶 바다 바람과 함께 야외로 흘러나오는 감성 음악',
    '🍳 엄마의 정성 가득 손맛 요리 (수제돈가스, 닭발볶음, 김치볶음밥)',
    '🏪 해안도로 필수 쉼터: 캔맥주, 과자, 즉석라면, 담배 정식 판매',
    '🍪 정성 가득 프리미엄 수제 베이커리 (수제 쿠키, 버터 마들렌, 아몬드 튀일)',
    '🪟 통유리창으로 탁 트인 실내 10개 테이블 & 쾌적한 화장실',
    '🚗 초보 운전도 걱정 없는 넓은 전용 주차장',
  ],
};

export const MENU_ITEMS: MenuItem[] = [
  // 1. 엄마표 손맛 식사 & 안주 (Food & Anju)
  {
    id: 'food-1',
    name: '엄마표 수제 바삭 돈가스',
    category: 'food',
    price: 11000,
    description: '신선한 국내산 돼지고기를 직접 두드려 만든 바삭한 돈가스와 특제 수제 소스, 신선 샐러드 & 밥 세트',
    badge: '인기 1위',
    isSpecial: true,
    image: IMAGES.homemadeFood,
    tags: ['겉바속촉', '수제소스', '든든한식사', '추천'],
  },
  {
    id: 'food-2',
    name: '엄마표 매콤 불 닭발볶음',
    category: 'food',
    price: 18000,
    description: '매콤달콤한 불향 가득 특제 양념에 쫄깃하게 볶아낸 최고의 감성 안주! 시원한 맥주와 찰떡궁합',
    badge: '최고의 안주',
    isSpecial: true,
    image: IMAGES.homemadeFood,
    tags: ['불향가득', '매콤쫄깃', '맥주안주', '단골원픽'],
  },
  {
    id: 'food-3',
    name: '고소한 햄야채 김치볶음밥',
    category: 'food',
    price: 8500,
    description: '잘 익은 묵은지와 햄, 신선한 야채를 달달 볶고 고소한 계란후라이와 김가루를 얹은 엄마표 꿀맛 볶음밥',
    badge: '엄마손맛',
    image: IMAGES.homemadeFood,
    tags: ['묵은지', '반숙계란', '남녀노소인기'],
  },
  {
    id: 'food-4',
    name: '바다보며 먹는 갓 끓인 라면',
    category: 'food',
    price: 5000,
    description: '해안 드라이브 중 출출할 때 파도소리 들으며 먹는 꼬들꼬들 얼큰한 즉석 끓인 라면 (김치 제공)',
    badge: '해안도로 명물',
    tags: ['얼큰꼬들', '노을뷰라면', '간편식'],
  },
  {
    id: 'food-5',
    name: '바삭 모둠 안주 & 스낵 플래터',
    category: 'food',
    price: 15000,
    description: '노을 보며 시원한 맥주 한잔과 즐기기 좋은 마른안주, 견과류, 먹태 & 특제 마요 청양간장 소스',
    tags: ['맥주짝꿍', '야외테라스안주', '마른안주'],
  },

  // 2. 카페 음료 (Coffee & Beverages)
  {
    id: 'coffee-1',
    name: '파라다이스 아메리카노 (HOT/ICE)',
    category: 'coffee',
    price: 4500,
    description: '고소하고 다크한 풍미의 고급 프리미엄 원두로 내린 깔끔하고 시원한 시그니처 커피',
    badge: '대표 커피',
    tags: ['고소한풍미', '바다뷰와함께', '기본충실'],
  },
  {
    id: 'coffee-2',
    name: '달콤 시원 복숭아 아이스티',
    category: 'coffee',
    price: 5000,
    description: '진하고 달콤한 복숭아 향이 가득해 남녀노소 드라이브 피로를 싹 풀어주는 청량 음료',
    tags: ['달콤시원', '피로회복', '인기음료'],
  },
  {
    id: 'coffee-3',
    name: '100% 생과일 주스 (토마토 / 딸기 / 키위)',
    category: 'coffee',
    price: 6500,
    description: '신선한 제철 생과일을 아낌없이 듬뿍 넣어 즉석에서 갈아 만든 건강하고 진한 리얼 생과일주스',
    badge: '100% 리얼',
    isSpecial: true,
    tags: ['신선비타민', '무첨가제', '엄마표정성'],
  },
  {
    id: 'coffee-4',
    name: '부드러운 바닐라 카페라떼',
    category: 'coffee',
    price: 5500,
    description: '신선한 우유와 달콤한 바닐라빈 시럽, 에스프레소가 어우러진 부드러운 라떼',
    tags: ['달콤부드러움', '에스프레소'],
  },
  {
    id: 'coffee-5',
    name: '톡 쏘는 청량 수제 에이드 (자몽 / 레몬 / 청포도)',
    category: 'coffee',
    price: 6000,
    description: '수제 과일청과 청량한 탄산수가 만나 갈증을 한방에 날려주는 시원한 스파클링 에이드',
    tags: ['상큼폭발', '탄산톡톡', '여름추천'],
  },

  // 3. 시그니처 프리미엄 수제 디저트 (Handmade Bakery & Dessert)
  {
    id: 'dessert-1',
    name: '수제 바삭 아몬드 & 피칸 튀일 (Tuile)',
    category: 'dessert',
    price: 4000,
    description: '프랑스 전통 방식으로 고소한 아몬드 슬라이스와 견과류를 얇고 바삭하게 구워낸 고급 수제 과자',
    badge: '디저트 시그니처',
    isSpecial: true,
    image: IMAGES.bakeryDessert,
    tags: ['고소바삭', '견과류듬뿍', '선물용인기', '수제구움과자'],
  },
  {
    id: 'dessert-2',
    name: '풍미 가득 버터 마들렌 (바닐라 / 초코 / 얼그레이)',
    category: 'dessert',
    price: 3500,
    description: '프랑스산 발효 버터로 구워내 겉은 촉촉하고 속은 부드러운 클래식 조개모양 마들렌',
    badge: '버터향가득',
    image: IMAGES.bakeryDessert,
    tags: ['프리미엄버터', '촉촉부드러움', '커피짝꿍'],
  },
  {
    id: 'dessert-3',
    name: '겉바속촉 르뱅스타일 수제 뚱쿠키',
    category: 'dessert',
    price: 3800,
    description: '다크초코칩과 호두를 아낌없이 듬뿍 넣어 묵직하고 꾸덕한 미국 르뱅스타일 수제 쿠키',
    image: IMAGES.bakeryDessert,
    tags: ['초코칩듬뿍', '꾸덕달콤', '당충전'],
  },

  // 4. 해안도로 편의점 & 쉼터 마트 (Mart & Convenience)
  {
    id: 'mart-1',
    name: '얼음장 캔맥주 / 병맥주 (카스, 테라, 켈리, 수입맥주)',
    category: 'mart',
    price: 4000,
    description: '노을지는 바다를 바라보며 시원하게 들이켜는 최상의 온도 냉장 캔/병맥주',
    badge: '해안도로 강점',
    image: IMAGES.snackMart,
    tags: ['시원한냉장', '바다맥주', '안주와함께'],
  },
  {
    id: 'mart-2',
    name: '정식 허가 담배 판매 코너',
    category: 'mart',
    price: 4500,
    description: '백수해안도로 인근에서 구하기 힘든 담배를 정식 판매하여 여행객과 드라이버분들의 편의를 돕습니다.',
    badge: '해안도로 귀한곳',
    image: IMAGES.snackMart,
    tags: ['정식판매점', '드라이브쉼터', '편의제공'],
  },
  {
    id: 'mart-3',
    name: '스낵 & 과자 모음 (포카칩, 새우깡, 꼬북칩 등)',
    category: 'mart',
    price: 2000,
    description: '일반 마트처럼 다양한 인기 봉지과자와 간식거리를 상시 구비해 아이들과 함께 오셔도 좋습니다.',
    image: IMAGES.snackMart,
    tags: ['간식거리', '인기과자', '차량간식'],
  },
  {
    id: 'mart-4',
    name: '탄산음료 & 캔음료 (콜라, 사이다, 밀키스, 웰치스)',
    category: 'mart',
    price: 2000,
    description: '시원하고 청량한 캔음료 & 생수 완비',
    tags: ['시원한음료', '갈증해소'],
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'gravel-yard',
    title: '자갈 깔린 바다 앞 넓은 마당',
    subtitle: '파라솔 & 벤치 5석 완비',
    description: '부모님이 정성껏 자갈을 깔아 만든 넓은 마당에서 시원한 바닷바람과 파도소리, 밖으로 은은히 흐르는 감성 음악을 들으며 힐링할 수 있는 야외 명당입니다.',
    features: [
      '넓고 쾌적한 자갈 테라스',
      '그늘을 만들어주는 대형 파라솔 5세트',
      '바다를 정면으로 바라보는 편안한 원목 벤치',
      '야외 스피커로 울려 퍼지는 감성 음악',
    ],
    image: IMAGES.gravelTerrace,
    iconName: 'Umbrella',
  },
  {
    id: 'rooftop',
    title: '1층 옥상 루프탑 테라스',
    subtitle: '하늘과 바다가 맞닿은 파노라마 뷰',
    description: '1층 옥상에도 파라솔과 벤치가 설치되어 있어, 더 높은 시야에서 붉게 물드는 서해안 노을과 수평선을 360도로 감상하실 수 있습니다.',
    features: [
      '탁 트인 서해 바다 360도 조망',
      '루프탑 전용 파라솔 & 벤치 휴식공간',
      '노을 인생샷을 남길 수 있는 포토존',
      '낭만적인 야간 조명',
    ],
    image: IMAGES.heroSunset,
    iconName: 'SunMedium',
  },
  {
    id: 'indoor-glass',
    title: '전면 통유리 실내 카페홀',
    subtitle: '답답함 없는 10개 쾌적 테이블',
    description: '바다와 자갈마당이 한눈에 들어오는 전면 통유리창 구조로, 비가 오거나 추운 날에도 따뜻한 실내에서 바다 뷰를 편안히 즐기실 수 있습니다.',
    features: [
      '통유리로 즐기는 사계절 오션뷰',
      '테이블 10개 넉넉한 실내 좌석 배치',
      '냉난방 쾌적한 힐링 분위기',
      '콘센트 및 여유로운 좌석 간격',
    ],
    image: IMAGES.gravelTerrace,
    iconName: 'Maximize2',
  },
  {
    id: 'restroom-parking',
    title: '깨끗한 화장실 & 넓은 전용 주차장',
    subtitle: '여행객의 편의를 생각한 쾌적한 시설',
    description: '크진 않지만 부모님이 매일 청결하게 관리하시는 깨끗한 화장실과, 초보 운전자도 편안하게 댈 수 있는 넓은 전용 주차장을 갖추고 있습니다.',
    features: [
      '매일 깨끗이 관리하는 청결 실내 화장실',
      '매장 바로 앞 넓은 전용 무료 주차장',
      '대형 SUV 및 드라이브 단체 차량 여유 주차',
      '해안도로 진입이 편리한 구조',
    ],
    image: IMAGES.heroSunset,
    iconName: 'Car',
  },
];

export const DRIVE_COURSES: DriveCourse[] = [
  {
    id: 'course-sunset',
    title: '영광 백수해안도로 낭만 노을 코스',
    tag: '가장 추천하는 대표 코스',
    duration: '약 3~4시간 소요',
    spots: [
      {
        name: '영광노을전시관',
        desc: '노을 과학과 서해안 일몰 역사 관람 & 바다 전망 데크',
        image: IMAGES.sunsetObservatory,
        mapUrl: 'https://map.naver.com/p/search/%EC%98%81%EA%B4%91%EB%85%B8%EC%9D%84%EC%A0%84%EC%8B%9C%EA%B4%80',
      },
      {
        name: '백수해안도로 드라이브',
        desc: '한국의 아름다운 길 100선 해안 절벽길 드라이브 & 노을길 산책',
        image: IMAGES.baeksuRoad,
        mapUrl: 'https://map.naver.com/p/search/%EC%98%81%EA%B4%91%20%EB%B0%B1%EC%88%98%ED%95%B4%EC%95%88%EB%8F%84%EB%A1%9C',
      },
      {
        name: '카페 파라다이스 (노을 & 식사)',
        desc: '자갈마당 테라스에서 노을 보며 수제돈가스·커피·맥주 즐기기',
        isParadise: true,
        image: IMAGES.gravelTerrace,
        mapUrl: 'https://map.naver.com/p/entry/place/1175028249',
      },
      {
        name: '칠산타워 & 칠산대교',
        desc: '야경 드라이브 및 전남 최고 높이 111m 바다 전망대',
        image: IMAGES.chilsanTower,
        mapUrl: 'https://map.naver.com/p/search/%EC%98%81%EA%B4%91%20%EC%B9%A0%EC%82%B0%ED%83%80%EC%9B%8C',
      },
    ],
    tip: '오후 5시경 백수해안도로에 진입해 6시 전후 카페 파라다이스에 도착하시면 환상적인 일몰을 감상할 수 있습니다.',
  },
  {
    id: 'course-food-heal',
    title: '영광 미식 & 힐링 쉼표 코스',
    tag: '가족 & 커플 여행 코스',
    duration: '약 4~5시간 소요',
    spots: [
      {
        name: '영광 굴비거리 & 백제불교최초도래지',
        desc: '영광의 맛과 이국적인 간다라 양식의 백제 불교 역사 탐방',
        image: IMAGES.baekjeSite,
        mapUrl: 'https://map.naver.com/p/search/%EB%B0%B1%EC%A0%9C%EB%B6%88%EA%B5%90%EC%B5%9C%EC%B4%88%EB%8F%84%EB%9E%98%EC%A7%80',
      },
      {
        name: '가마미해수욕장',
        desc: '호남 3대 해수욕장, 고운 모래사장과 시원한 바다 뷰 산책',
        image: IMAGES.gamamiBeach,
        mapUrl: 'https://map.naver.com/p/search/%EA%B0%80%EB%A7%88%EB%AF%B8%ED%95%B4%EC%88%98%EC%9A%95%EC%9E%A5/place/11491644?c=15.00,0,0,0,dh&placePath=%3Fbk_query%253D%2525EA%2525B0%252580%2525EB%2525A7%252588%2525EB%2525AF%2525B8%2525ED%252595%2525B4%2525EC%252588%252598%2525EC%25259A%252595%2525EC%25259E%2525A5%2526entry%253Dbmp',
      },
      {
        name: '영광풍력발전단지',
        desc: '해안 도로변에 줄지어 선 웅장한 풍차와 시원한 바닷바람 포토존',
        image: IMAGES.yeonggwangWindFarm,
        mapUrl: 'https://map.naver.com/p/entry/place/1206005349?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202609011556%26locale%3Dko%26svcName%3Dmap_pcv5',
      },
      {
        name: '카페 파라다이스 (쉼터 & 디저트)',
        desc: '통유리 오션뷰에서 엄마 손맛 김치볶음밥 & 수제 디저트',
        isParadise: true,
        image: IMAGES.gravelTerrace,
        mapUrl: 'https://map.naver.com/p/entry/place/1175028249',
      },
    ],
    tip: '운전 중 시원한 맥주/음료나 과자, 담배가 필요할 때 해안도로의 든든한 휴식처가 되어드립니다.',
  },
];

export const INITIAL_REVIEWS: GuestReview[] = [
  {
    id: 'rev-1',
    author: '바다바람님 (광주)',
    city: '광주광역시',
    date: '2026-08-25',
    rating: 5,
    content: '백수해안도로 드라이브하다가 들렀는데, 자갈마당에 파라솔 펴놓고 바다 노을 보는데 진짜 황홀했어요! 야외로 음악 나오는 것도 감성 터지고 엄마표 수제돈가스가 웬만한 전문점보다 바삭하고 맛있네요 ㅎㅎ',
    tag: '노을맛집 & 돈가스최고',
    likes: 42,
  },
  {
    id: 'rev-2',
    author: '라이더김씨 (전주)',
    city: '전북 전주',
    date: '2026-08-20',
    rating: 5,
    content: '오토바이 타고 해안도로 돌다가 담배랑 시원한 캔음료 살 곳이 없어서 애먹었는데 여기 파라다이스 카페에서 마트처럼 다 팔아서 구세주 같았습니다. 사장님 부모님 너무 친절하시고 옥상 뷰가 대박입니다.',
    tag: '해안도로오아시스',
    likes: 38,
  },
  {
    id: 'rev-3',
    author: '선셋러버 (서울)',
    city: '서울 송파구',
    date: '2026-08-16',
    rating: 5,
    content: '우연히 들렀는데 직접 구운 수제 아몬드 튀일이랑 마들렌이 진짜 별미였어요! 견과류 튀일이 너무 고소하고 바삭해서 선물용으로 3봉지 더 사왔습니다. 통유리창으로 바다 보며 커피 마시기 너무 좋습니다.',
    tag: '수제디저트 & 오션뷰',
    likes: 29,
  },
  {
    id: 'rev-4',
    author: '주말캠퍼가족 (나주)',
    city: '전남 나주',
    date: '2026-08-10',
    rating: 5,
    content: '주차장도 넓어서 초보운전인 와이프도 편하게 주차했고 화장실도 깨끗해서 아이 데리고 오기 참 좋았어요. 해질녘 닭발볶음에 맥주 한잔 곁들이니 스트레스가 싹 날아가네요.',
    tag: '주차편함 & 청결화장실',
    likes: 24,
  },
];
