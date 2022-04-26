import PageTemplate from "../templates/PageTemplate";
import RemoraFooter from "../UI/molecules/RemoraFooter";
import RemoraHeader from "../UI/molecules/RemoraHeader";
import ExtractContent from "../UI/organisms/ExtractContent";

function Extract() {
    return (
        <PageTemplate
            header={<RemoraHeader index={2} />}
            content={<ExtractContent />}
            footer={<RemoraFooter />}
        />
    );
}
export default Extract;
