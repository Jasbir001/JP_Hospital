import DoctorsPreview from "../component/DoctorsPreview";
import Header from "../component/Header";
import { Main } from "../component/Main";
import Services from "../component/Services";

function Homepage()
{
    return(
        <>
           <Header/>
            <Main/>
            <Services/>
            <DoctorsPreview/>
        </>
    )
}


export default Homepage