import React from "react";
import { CircularProgress, Typography } from "@mui/material";
// import MyProgress from "../atoms/MyProgress";
import sendingFiles from "modules/SendingFile";
import { useDispatch, useStoreState } from "components/store/Store";
import { MyResult, SucessOrFail } from "interfaces/MyTypes";
import { useNavigate } from "react-router";

export default function SendingStep() {
    /*  submit 관련 status     */
    const { fileList } = useStoreState();
    const [loadingIsEnd, setLoadingIsEnd] = React.useState(false);
    const [loadingIs, setLoadingIs] = React.useState<SucessOrFail>(null);
    // const [error, setError] = React.useState(null);

    const dispatch = useDispatch();
    const setResponse = (value: Array<MyResult>) => {
        dispatch({ type: "SET_RESULT", resultList: value });
    };
    const navigate = useNavigate();
    return (
        <>
            {loadingIsEnd ? (
                navigate(`${loadingIs}`, { replace: true })
            ) : (
                <>
                    {() => {
                        console.log("파일전송 실행");
                        dispatch({ type: "SET_STEP", step: 1 });
                        sendingFiles(
                            fileList,
                            result => {
                                setResponse(result.data);
                                setLoadingIs("success");
                                setLoadingIsEnd(true);
                            },
                            err => {
                                // setError(err);
                                console.log(err);
                                setLoadingIs("fail");
                                setLoadingIsEnd(true);
                            },
                        );
                    }}

                    <CircularProgress />
                    <Typography variant="h6">
                        파일을 전송중 입니다...
                    </Typography>
                </>
            )}
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
