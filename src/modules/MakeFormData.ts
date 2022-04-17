import { MyFile } from "interfaces/MyTypes";
/* 테서트를 위한 임포트 */
// import FormData from "form-data";

const MakeFormData = (Files: MyFile[]) => {
    const formData = new FormData();
    Files.forEach(file => {
        formData.append("originVideo", file);
        formData.append("needTranslate", `${file.translation}`);
    });
    console.log(formData);
    return formData;
};
export default MakeFormData;
