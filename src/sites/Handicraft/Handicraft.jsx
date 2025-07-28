import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



export default function Handicraft(){
    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="rekodzielo1.png" img2="rekodzielo2.jpg" img3="rekodzielo3.png" heading={["Rękodzieło"]}/>
            <Footer />
        </LenisWrapper>
    )
}