import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import WorksContainer from "../../components/WorksContainer";
import WorkMusic from "../../components/WorkMusic";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";




export default function Music(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="muzyka1.jpg" img2="muzyka2.jpg" img3="muzyka4.jpg" heading={["Muzyka"]}/>
            <WorksContainer>

            </WorksContainer>
            <Footer />
        </LenisWrapper>
    )
}