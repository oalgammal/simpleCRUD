import axios from "axios";


export interface FetchOptions {
    method?: string;
    body?: BodyInit | null;
  }

export const fetcher = async (
    options: FetchOptions = {},
  ): Promise<any> => {
    const headers = {
      'Content-Type': 'application/json',
    };
  
  
    // console.log(options)
    const response = await axios(`http://localhost:8088/users`, {
      ...options
    });
    


    if (response.status!==200 ) {
      const error = new Error('Network response was not ok');
      throw error;
    }
  

    return response.data;
  };
  
  export default fetcher;