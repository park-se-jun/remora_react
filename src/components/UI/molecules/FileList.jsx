import PropTypes from "prop-types";
import FileInfo from "../atoms/FileInfo";

// function UploadStep() {}
// function TranslationStep() {}
// function ExtractStep() {}
// function ResultStep() {}
export default function FileList({
    Files: array,
    onTranslate,
    TranslationDisabled: isDisabled,
}) {
    return (
        <>
            {array.map(function callback(file) {
                return (
                    <FileInfo
                        file={file}
                        disabled={isDisabled}
                        onTranslate={onTranslate}
                    />
                );
            })}
        </>
    );
}
FileList.propTypes = {
    Files: PropTypes.arrayOf(PropTypes.any).isRequired,
    TranslationDisabled: PropTypes.bool,
    onTranslate: PropTypes.func,
};
FileList.defaultProps = {
    TranslationDisabled: false,
    onTranslate: () => console.log("onTranslate : 안붙어있음"),
};
