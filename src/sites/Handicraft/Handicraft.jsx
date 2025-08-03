import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import WorksContainer from "../../components/WorksContainer";
import WorkShowcase from "../../components/WorkShowcase";
import LgWorkShowCase from "../../components/LgWorkShowCase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import img1 from '../../assets/autorzy/OliwiaWłodarczykRękodzieło/img1.jpg'
import img2 from '../../assets/autorzy/OliwiaWłodarczykRękodzieło/img2.jpg'
import img3 from '../../assets/autorzy/OliwiaWłodarczykRękodzieło/img3.jpg'
import img4 from '../../assets/autorzy/OliwiaWłodarczykRękodzieło/img4.jpg'

import img5 from '../../assets/autorzy/KamilaJudkaRękodzieło/img1.jpg'
import img6 from '../../assets/autorzy/KamilaJudkaRękodzieło/img2.jpg'
import img7 from '../../assets/autorzy/KamilaJudkaRękodzieło/img3.jpg'
import img8 from '../../assets/autorzy/KamilaJudkaRękodzieło/img4.jpg'

import img9 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img1.jpeg'
import img10 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img2.jpg'
import img11 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img3.jpg'
import img12 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img4.jpg'
import img13 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img5.jpg'
import img14 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img6.jpg'
import img15 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img7.jpg'
import img16 from '../../assets/autorzy/AnnaSułkowskaRękodzieło/img8.jpg'

export default function Handicraft(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="rekodzielo1.png" img2="rekodzielo2.jpg" img3="rekodzielo3.png" heading={["Rękodzieło"]}/>
            
            <div className="block lg:hidden">
                <WorksContainer>
                    <WorkShowcase img={img9} author="Anna Sułkowska" left="4vw" />
                    <WorkShowcase img={img1} author="Oliwia Włodarczyk" right="10vw" />
                    <WorkShowcase img={img5} author="Kamila Judka" left="6vw" />
                    <WorkShowcase img={img10} author="Anna Sułkowska" right="7vw" />
                    <WorkShowcase img={img2} author="Oliwia Włodarczyk" left="8vw" />
                    <WorkShowcase img={img6} author="Kamila Judka" right="12vw" />
                    <WorkShowcase img={img11} author="Anna Sułkowska" left="5vw" />
                    <WorkShowcase img={img3} author="Oliwia Włodarczyk" right="11vw" />
                    <WorkShowcase img={img7} author="Kamila Judka" left="9vw" />
                    <WorkShowcase img={img12} author="Anna Sułkowska" right="6vw" />
                    <WorkShowcase img={img4} author="Oliwia Włodarczyk" left="13vw" />
                    <WorkShowcase img={img8} author="Kamila Judka" right="3vw" />
                    <WorkShowcase img={img13} author="Anna Sułkowska" left="7vw" />
                    <WorkShowcase img={img14} author="Anna Sułkowska" right="9vw" />
                    <WorkShowcase img={img15} author="Anna Sułkowska" left="5vw" />
                    <WorkShowcase img={img16} author="Anna Sułkowska" right="8vw" />
                </WorksContainer>
            </div>

            <div className="lg:block hidden mt-[25vw]">
                <WorksContainer>
                    <LgWorkShowCase img1={img5} author1="Kamila Judka" img2={img10} author2="Anna Sułkowska" />
                    <LgWorkShowCase img1={img2} author1="Oliwia Włodarczyk" img2={img6} author2="Kamila Judka" />
                    <LgWorkShowCase img1={img11} author1="Anna Sułkowska" img2={img3} author2="Oliwia Włodarczyk" />
                    <LgWorkShowCase img1={img7} author1="Kamila Judka" img2={img12} author2="Anna Sułkowska" />
                    <LgWorkShowCase img1={img4} author1="Oliwia Włodarczyk" img2={img8} author2="Kamila Judka" />
                    <LgWorkShowCase img1={img13} author1="Anna Sułkowska" img2={img14} author2="Anna Sułkowska" />
                    <LgWorkShowCase img1={img15} author1="Anna Sułkowska" img2={img16} author2="Anna Sułkowska" />
                    <LgWorkShowCase img1={img9} author1="Anna Sułkowska" img2={img1} author2="Oliwia Włodarczyk" />
                </WorksContainer>
            </div>

            <Footer />
        </LenisWrapper>
    )
}
