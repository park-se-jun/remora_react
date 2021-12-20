import PageTemplate from "../templates/PageTemplate";
import RemoraFooter from "../UI/molecules/RemoraFooter";
import RemoraHeader from "../UI/molecules/RemoraHeader";
import AboutContent from "../UI/organisms/AboutContent";

function About() {
    return (
        <PageTemplate
            header={<RemoraHeader index={1} />}
            content={<AboutContent />}
            footer={<RemoraFooter />}
        />
    );
}
export default About;
