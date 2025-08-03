import LenisWrapper from "../../components/LenisWrapper";
import WorksMain from "../../components/WorksMain";
import WorksContainer from "../../components/WorksContainer";
import WorkLiterature from "../../components/WorkLiterature";
import LgWorkLiterature from "../../components/LgWorkLiterature";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import literatureTexts from "../../assets/literatureTexts";

export default function Literature(){



    return(
        <LenisWrapper>
            <Navbar />
            <WorksMain img1="literatura1.jpg" img2="literatura2.png" img3="literatura3.png" heading={["Literatura"]}/>
            <WorksContainer>
                <div className="block lg:hidden">
                    <WorkLiterature left="5vw" title={literatureTexts[0].title} author={literatureTexts[0].author} text={literatureTexts[0].text} />      
                    <WorkLiterature right="12vw" title={literatureTexts[1].title} author={literatureTexts[1].author} text={literatureTexts[1].text} />  
                    <WorkLiterature left="9vw" title={literatureTexts[2].title} author={literatureTexts[2].author} text={literatureTexts[2].text} />  
                    <WorkLiterature right="7vw" title={literatureTexts[3].title} author={literatureTexts[3].author} text={literatureTexts[3].text} />  
                    <WorkLiterature left="13vw" title={literatureTexts[4].title} author={literatureTexts[4].author} text={literatureTexts[4].text} />  
                    <WorkLiterature right="6vw" title={literatureTexts[5].title} author={literatureTexts[5].author} text={literatureTexts[5].text} />  
                    <WorkLiterature left="4vw" title={literatureTexts[6].title} author={literatureTexts[6].author} text={literatureTexts[6].text} />  
                    <WorkLiterature right="14vw" title={literatureTexts[7].title} author={literatureTexts[7].author} text={literatureTexts[7].text} />  
                    <WorkLiterature left="10vw" title={literatureTexts[8].title} author={literatureTexts[8].author} text={literatureTexts[8].text} />  
                    <WorkLiterature right="8vw" title={literatureTexts[9].title} author={literatureTexts[9].author} text={literatureTexts[9].text} />  

                </div>  

                <div className="lg:block hidden mt-[25vw]">
                    <LgWorkLiterature 
                        title1={literatureTexts[0].title} author1={literatureTexts[0].author} text1={literatureTexts[0].text} 
                        title2={literatureTexts[1].title} author2={literatureTexts[1].author} text2={literatureTexts[1].text} 
                    />
                    <LgWorkLiterature 
                        title1={literatureTexts[2].title} author1={literatureTexts[2].author} text1={literatureTexts[2].text} 
                        title2={literatureTexts[3].title} author2={literatureTexts[3].author} text2={literatureTexts[3].text} 
                    />
                    <LgWorkLiterature 
                        title1={literatureTexts[4].title} author1={literatureTexts[4].author} text1={literatureTexts[4].text} 
                        title2={literatureTexts[5].title} author2={literatureTexts[5].author} text2={literatureTexts[5].text} 
                    />
                    <LgWorkLiterature 
                        title1={literatureTexts[6].title} author1={literatureTexts[6].author} text1={literatureTexts[6].text} 
                        title2={literatureTexts[7].title} author2={literatureTexts[7].author} text2={literatureTexts[7].text} 
                    />
                    <LgWorkLiterature 
                        title1={literatureTexts[8].title} author1={literatureTexts[8].author} text1={literatureTexts[8].text} 
                        title2={literatureTexts[9].title} author2={literatureTexts[9].author} text2={literatureTexts[9].text} 
                    />

                </div>  
            </WorksContainer>
            <Footer />
        </LenisWrapper>
    )
}
