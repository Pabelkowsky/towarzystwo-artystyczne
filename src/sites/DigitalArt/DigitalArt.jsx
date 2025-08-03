import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import WorksContainer from "../../components/WorksContainer";
import WorkShowcase from "../../components/WorkShowcase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function DigitalArt(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="cyfrowa1.png" img2="cyfrowa2.png" img3="cyfrowa3.png" heading={["Sztuka cyfrowa"]}/>
            <WorksContainer>
                            
            </WorksContainer>
            <Footer />
        </LenisWrapper>
    )
}