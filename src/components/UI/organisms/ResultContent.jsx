// import PropTypes from "prop-types";
import { useLocation } from "react-router";

function ResultContent() {
    const location = useLocation();
    const res = location.state;

    return res ? <>res 있음</> : <>res 없음</>;
}
export default ResultContent;
// ResultContent.propTypes = {
//     resultList: PropTypes.arrayOf(
//         PropTypes.shape({
//             success: PropTypes.bool,
//             message: PropTypes.string,
//             code: PropTypes.number,
//             originResultText: PropTypes.arrayOf(PropTypes.string),
//             translatedResultText: PropTypes.arrayOf(PropTypes.string),
//             keyword: PropTypes.arrayOf(PropTypes.string),
//             needTranslation: PropTypes.bool,
//         }),
//     ),
// };
// ResultContent.defaultProps = {
//     resultList: null,
// };
