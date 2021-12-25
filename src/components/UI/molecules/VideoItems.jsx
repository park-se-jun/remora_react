import PropTypes from "prop-types";
import FileComponent from "../atoms/FileComponent";

// function UploadStep() {}
// function TranslationStep() {}
// function ExtractStep() {}
// function ResultStep() {}
export default function VideoItems({
    Files: array,
    TranslationDisabled: isDisabled,
}) {
    // return array.map(file => <FileComponent fileName={file.name} />);
    return (
        <>
            {array.map(file => (
                <FileComponent fileName={file.name} disabled={isDisabled} />
            ))}
        </>
    );
}
VideoItems.propTypes = {
    Files: PropTypes.arrayOf(PropTypes.any).isRequired,
    TranslationDisabled: PropTypes.bool,
};
VideoItems.defaultProps = {
    TranslationDisabled: false,
};
