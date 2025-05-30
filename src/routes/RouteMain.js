
import {Routes, Route, Navigate} from "react-router-dom";
import Layout from "../layouts/Layout";
import PrivateRoute from "./PrivateRoute";

import Main from "../pages/main/Main";

import Login from "../pages/Login";

import Sell from "../pages/Sell";
import Register from "../pages/Register";

import Notice from "../pages/Notice";
import NoticeView from "../pages/NoticeView";
// import Guide from "../pages/Guide";


import ExhibiGallery from "../pages/exhibition/ExhibiGallery";
import GuideGallery from "../pages/guide/GuideGallery";
import JejuFestival from "../pages/main/Popular";
import ThemeGallery from "../pages/theme/ThemeGallery";
import MusicalGallery from "../pages/stage/MusicalGallery";
import MusicGallery from "../pages/stage/MusicGallery";
import GuideDetail from "../pages/guide/GuideDetail";
import PlayGallery from "../pages/stage/PlayGallery";
import KorMusic from "../pages/stage/KorMusic";
import AllSearch from "../pages/main/AllSearch";
import MainMenu from "../pages/main/MainMenu";
import NobelGallery from "../pages/nobel/NobelGallery";
import RecommendGallery from "../pages/recommend/RecommendGallery";
import PopularDetail from "../pages/popular/PopularDetail";
import LibrarianRecommendGallery from "../pages/librarianRecommend/LibrarianRecommendGallery";
import NewDetail from "../pages/bookfore/NewDetail";
import ChildrenGallery from "../pages/children/ChildrenGallery";

console.log("Main:", typeof Main);
console.log("Login:", typeof Login);
console.log("Sell:", typeof Sell);
console.log("Register:", typeof Register);
console.log("Notice:", typeof Notice);
console.log("NoticeView:", typeof NoticeView);
console.log("Guide:", typeof Guide);
console.log("LibrarianRecommendGallery:", typeof ExhibiGallery);
console.log("GuideGallery:", typeof GuideGallery);
console.log("JejuFestival:", typeof JejuFestival);
console.log("ThemeGallery:", typeof ThemeGallery);
console.log("MusicalGallery:", typeof MusicalGallery);
console.log("MusicGallery:", typeof MusicGallery);
console.log("GuideDetail:", typeof GuideDetail);
console.log("PlayGallery:", typeof PlayGallery);
console.log("KorMusic:", typeof KorMusic);
console.log("AllSearch:", typeof AllSearch);
console.log("MainMenu:", typeof MainMenu);

export default function RouteMain() {
    return (
        <Routes>

            <Route element={<Layout />}>{/* (공통 레이아웃) */}

                {/* 공개 페이지 */}

                {/* 메인 */}
                <Route path="/" element={<Main />} />
                <Route path="/mainSearch" element={<AllSearch />} />
                <Route path="/mainMenu" element={<MainMenu />} />

                {/*가이드*/}
                <Route path="/guide/gallery" element={<GuideGallery/>} />
                {/*테마*/}
                <Route path="/theme/gallery" element={<ThemeGallery/>} />

                {/*교육-전시*/}
                <Route path="/art/gallery" element={<ExhibiGallery/>} />

                {/*이달의 추천 도서*/}
                <Route path="/recommend/gallery" element={<RecommendGallery/>} />

                {/*인기도서*/}
                <Route path="/popular/detail" element={<PopularDetail />} />

                {/*어린이 동화구연*/}
                <Route path="/children/gallery" element={<ChildrenGallery />} />

                {/*사서 추천 도서*/}
                <Route path="/bookfore/librarianRecommend/gallery" element={<LibrarianRecommendGallery/>} />

                {/*추천 신작*/}
                <Route path="/bookfore/new/gallery" element={<NewDetail />} />

                {/*도서관 찾기*/}
                <Route path="/bookfore/school/gallery" element={<LibrarianRecommendGallery/>} />

                {/*노벨*/}
                <Route path="/nobel/gallery" element={<NobelGallery/>} />
                {/*<Route path="/nobel/gallery:code" element={<NobelDetail/>} />*/}

                {/*연극*/}
                <Route path="/stage/gallery/play" element={<PlayGallery/>} />

                {/*국악*/}
                <Route path="/stage/gallery/korMusic" element={<KorMusic/>} />

                {/*연주회*/}
                <Route path="/stage/gallery/music" element={<MusicGallery/>} />

                {/*축제/행사*/}
                <Route path="/festival/gallery" element={<JejuFestival/>} />

                <Route path="/notice" element={<Notice />} />{/* 공지 */}
                <Route path="/notice/:id" element={<NoticeView />} />{/* 공지 뷰 */ }

                {/*<Route path="/guide" element={<Guide/>} />/!* 이용가이드 *!/*/}

                <Route path="/login" element={<Login />} />{/* 로그인 */}
                <Route path="/register" element={<Register />} />{/* 회원가입 */}




                {/*  로그인한 사용자만 접근 가능 */}
                <Route element={<PrivateRoute />}>
                    <Route path="/sell" element={<Sell />} />{/* 동전팔기 */}


                </Route>

            </Route>
        </Routes>
    );
}

{/*<Route path="/rest" element={<Rest />} />*/}
