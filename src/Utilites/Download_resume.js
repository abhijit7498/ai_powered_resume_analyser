import CustomAxios from "./CustomAxios";

export const Download_resume = async (Id, filename) => {
  try {
    const response = await CustomAxios.get(`/api/resume/download/${Id}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Failed to download resume", error);
    alert("Could not download resume.");
  }
};
