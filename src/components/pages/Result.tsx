import PageTemplate from "components/templates/PageTemplate";
import RemoraFooter from "components/UI/molecules/RemoraFooter";
import RemoraHeader from "components/UI/molecules/RemoraHeader";
import ResultContent from "components/UI/organisms/ResultContent";

function Result() {
    return (
        <PageTemplate
            header={<RemoraHeader index={2} />}
            content={<ResultContent />}
            footer={<RemoraFooter />}
        />
    );
}
export default Result;
