import { AxiosResponse } from "axios";
import { MyFile } from "interfaces/MyTypes";
import defaultClient from "./DefaultClient";
import MakeFormData from "./MakeFormData";

export default function sendingFiles(
    files: Array<MyFile>,
    successCallback?:
        | ((value: AxiosResponse<any, any>) => void | PromiseLike<void>)
        | null
        | undefined,
    failCallback?:
        | ((reason: any) => void | PromiseLike<void>)
        | null
        | undefined,
) {
    const formData = MakeFormData(files);
    defaultClient
        .post("/upload", formData)
        .then(result => {
            console.log(result);
            console.log(result.data);
            if (typeof successCallback === "function") {
                successCallback(result);
            }
        })
        .catch(err => {
            console.log(err);
            if (typeof failCallback === "function") failCallback(err);
        });
}
