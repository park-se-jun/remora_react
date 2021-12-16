import TranslationToggleButton from "../UI/atoms/TranslationToggleButton";
import BasicButton from "../UI/atoms/BasicButton";
import RemoraHeader from "../UI/atoms/RemoraHeader";
import ExtractStepper from "../UI/atoms/ExtractStepper";

function Front() {
    return (
        <div className="ExtreactPage" style={{ padding: "1rem 0" }}>
            <h2>프론트페이지</h2>
            <RemoraHeader index={0} />
            <BasicButton text="123123123" />
            <br />
            <TranslationToggleButton />
            <br />
            <ExtractStepper />
        </div>
    );
}
export default Front;
