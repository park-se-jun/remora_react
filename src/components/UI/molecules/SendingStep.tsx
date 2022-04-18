import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useStoreState } from "store/Store";
import { useResultStoreState } from "store/ResultSotre";
import MyProgress from "../atoms/MyProgress";

export default function SendingStep() {
    const navigate = useNavigate();
    /*  submit 관련 status     */
    const { resultList, error } = useResultStoreState();
    const { progress } = useStoreState();

    if (resultList !== undefined) {
        navigate("success", { replace: true });
    } else if (error !== undefined) {
        navigate("error", { replace: true });
    }
    return (
        <>
            <Box margin="auto">
                <CircularProgress />
            </Box>

            <Typography align="center" variant="h6">
                파일을 전송중 입니다...
            </Typography>
            <MyProgress value={progress} />
        </>
    );
}

/*  progress 관련 status     */
// const [progress, setProgress] = React.useState(0);
// const [timerId, setTimerId] = React.useState(null);

// const timer = () => {
//     setProgress(oldProgress => {
//         if (oldProgress < 98) {
//             const diff = 100 - oldProgress;
//             const inc = diff / (10 + oldProgress * (1 + oldProgress / 100));
//             return oldProgress + inc;
//         }
//         return oldProgress;
//     });
//     setTimerId(setTimeout(timer, 50));
// };
// const setupClient = () => {
//     defaultClient.interceptors.request.use(
//         config => {
//             setProgress(0);
//             timer();
//             return config;
//         },
//         err => {
//             return Promise.reject(err);
//         },
//     );

//     defaultClient.interceptors.response.use(
//         res => {
//             // 응답 인터셉터
//             if (timerId) {
//                 clearTimeout(timerId);
//                 setTimerId(null);
//             }
//             setProgress(100);
//             return res;
//         },
//         err => {
//             setProgress(100);
//             return Promise.reject(err);
//         },
//     );
// };
