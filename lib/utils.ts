import axios from 'axios';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




const uploadDataonCloudinary = async (datatoUpload: any) => {
  try {
    if (datatoUpload != null) {
      let formdata = new FormData();
      formdata.append("file", datatoUpload[0]);
      formdata.append("upload_preset", "l7srcaxs");
      const response = await axios.post("https://api.cloudinary.com/v1_1/drqhibhiv/upload", formdata,);
      return response.data.url;
    }
    else {
      throw new Error("No File selected");
    }
  } catch (error) {
    console.log(error);
  }
}
export default uploadDataonCloudinary

