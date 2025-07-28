import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



export default function Music(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="muzyka1.jpg" img2="muzyka2.jpg" img3="muzyka3.jpg" heading={["Muzyka"]}/>
            <Footer />
        </LenisWrapper>
    )
}