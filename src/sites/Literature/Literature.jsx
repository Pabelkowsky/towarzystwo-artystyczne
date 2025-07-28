import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default function Literature(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="literatura1.jpg" img2="literatura2.png" img3="literatura3.png" heading={["Literatura"]}/>
            <Footer />
        </LenisWrapper>
    )
}