const MakeFormData = Files => {
    const formData = new FormData();
    Files.forEach(file => {
        formData.append("originVideo", file);
        formData.append("needTranslate", file.translation);
    });
    return formData;
};
export default MakeFormData;
