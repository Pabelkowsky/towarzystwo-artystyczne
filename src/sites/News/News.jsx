import LenisWrapper from "../../components/LenisWrapper";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Main from "./Main";
import NewsItem from "./NewsItem";
import NewsContainer from "./NewsContainer";

import newsTexts from "../../assets/newsTexts";

export default function News(){
    return(
        <LenisWrapper>
            <Navbar />
            <Main />
            <NewsContainer>
                <NewsItem title="Będziemy na Leśnym Fest!" date="02.08.2025" text={newsTexts[0]}/>
            </NewsContainer>
            <Footer />
        </LenisWrapper>
    )
}