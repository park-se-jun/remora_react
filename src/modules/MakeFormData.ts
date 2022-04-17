import { MyFile } from "interfaces/MyTypes";
import FormData from "form-data";

const MakeFormData = (Files: MyFile[]) => {
    const formData = new FormData();
    Files.forEach(file => {
        formData.append("originVideo", file);
        formData.append("needTranslate", `${file.translation}`);
    });
    return formData;
};
export default MakeFormData;
