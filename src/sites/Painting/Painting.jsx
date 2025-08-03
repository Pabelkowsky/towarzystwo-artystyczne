import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import WorksContainer from "../../components/WorksContainer";
import WorkShowcase from "../../components/WorkShowcase";
import LgWorkShowCase from "../../components/LgWorkShowCase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import img1 from '../../assets/autorzy/KamilaJudkaMalarstwo/img1.jpg'
import img2 from '../../assets/autorzy/KamilaJudkaMalarstwo/img2.jpg'
import img3 from '../../assets/autorzy/KamilaJudkaMalarstwo/img3.jpg'
import img4 from '../../assets/autorzy/KamilaJudkaMalarstwo/img4.jpg'
import img5 from '../../assets/autorzy/KamilaJudkaMalarstwo/img5.jpg'

import img6 from '../../assets/autorzy/JuliaGórkaMalarstwo/img1.jpeg'
import img7 from '../../assets/autorzy/JuliaGórkaMalarstwo/img2.jpeg'
import img8 from '../../assets/autorzy/JuliaGórkaMalarstwo/img3.jpeg'
import img9 from '../../assets/autorzy/JuliaGórkaMalarstwo/img4.jpeg'
import img10 from '../../assets/autorzy/JuliaGórkaMalarstwo/img5.jpeg'

export default function Painting(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="malarstwo1.jpg" img2="malarstwo2.jpg" img3="malarstwo3.jpg" heading={["Malarstwo"]}/>
            
            <div className="lg:hidden block">
                <WorksContainer>
                    <WorkShowcase img={img6} author="Julia Górka" left="5vw" />
                    <WorkShowcase img={img1} author="Kamila Judka" right="10vw" />
                    <WorkShowcase img={img7} author="Julia Górka" left="8vw" />
                    <WorkShowcase img={img2} author="Kamila Judka" right="6vw" />
                    <WorkShowcase img={img8} author="Julia Górka" left="12vw" />
                    <WorkShowcase img={img3} author="Kamila Judka" right="4vw" />
                    <WorkShowcase img={img9} author="Julia Górka" left="7vw" />
                    <WorkShowcase img={img4} author="Kamila Judka" right="9vw" />
                    <WorkShowcase img={img10} author="Julia Górka" left="13vw" />
                    <WorkShowcase img={img5} author="Kamila Judka" right="5vw" />
                </WorksContainer>
            </div>

            <div className="lg:block hidden mt-[20vw]">
                <WorksContainer>
                    <LgWorkShowCase img1={img6} author1="Julia Górka" img2={img1} author2="Kamila Judka" />
                    <LgWorkShowCase img1={img8} author1="Julia Górka" img2={img3} author2="Kamila Judka" />
                    <LgWorkShowCase img1={img9} author1="Julia Górka" img2={img4} author2="Kamila Judka" />
                    <LgWorkShowCase img1={img10} author1="Julia Górka" img2={img5} author2="Kamila Judka" />
                    <LgWorkShowCase img1={img7} author1="Julia Górka" img2={img2} author2="Kamila Judka" />
                </WorksContainer>
            </div>

            <Footer />
        </LenisWrapper>
    )
}
