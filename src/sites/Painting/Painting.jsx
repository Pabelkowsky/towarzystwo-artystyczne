import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



export default function Painting(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="malarstwo1.jpg" img2="malarstwo2.jpg" img3="malarstwo3.jpg" heading={["Malarstwo"]}/>
            <Footer />
        </LenisWrapper>
    )
}