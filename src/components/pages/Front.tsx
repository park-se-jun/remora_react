import PageTemplate from "../templates/PageTemplate";
import RemoraFooter from "../UI/molecules/RemoraFooter";
import RemoraHeader from "../UI/molecules/RemoraHeader";
import FrontContent from "../UI/organisms/FrontContent";

function Front() {
    return (
        <PageTemplate
            header={<RemoraHeader index={0} />}
            content={<FrontContent />}
            footer={<RemoraFooter />}
        />
    );
}
export default Front;
