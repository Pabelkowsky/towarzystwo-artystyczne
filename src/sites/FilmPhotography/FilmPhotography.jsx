import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import WorksContainer from "../../components/WorksContainer";
import WorkVideo from "../../components/WorkVideo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";




export default function FilmPhotography(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="foto1.png" img2="foto2.jpg" img3="foto3.png" heading={["Film i fotografia"]}/>
            <WorksContainer>

            </WorksContainer>
            <Footer />
        </LenisWrapper>
    )
}