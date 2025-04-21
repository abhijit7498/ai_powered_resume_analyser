import { toast } from "react-toastify";
import CustomAxios from "./CustomAxios";

const handleDeleteResume = async (id, setLoading) => {
  try {
    const confirm=window.confirm("Are you sure you want to delete this resume")
    if(!confirm) return;
    setLoading(true);
    const response = await CustomAxios.delete(`/api/resume/deleteresume/${id}`);

    if (response.status === 200) {
      toast.success("Resume deleted successfully");
    } else {
      toast.warning("Unexpected response from server");
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete resume");
  } finally {
    setLoading(false);
  }
};

export default handleDeleteResume;
