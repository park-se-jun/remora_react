import { MyFile } from "interfaces/MyTypes";

// import FormData from "form-data"; // [테스트] 테스트 할때만 포함

const MakeFormData = (Files: MyFile[]) => {
    const formData = new FormData();
    Files.forEach(file => {
        formData.append("originVideo", file);
        formData.append("needTranslate", `${file.translation}`);
    });
    // console.log(formData);
    return formData;
};
export default MakeFormData;
