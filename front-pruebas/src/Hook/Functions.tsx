import Axios from 'axios';


export const axiosResposeDownload = (( url: string , id: string, fechaInit: number, fechaEnd: number ) => {
    let urlString = `${url}/${id}/${fechaInit}/${fechaEnd}`;
    console.log(urlString);
    // url send a file
    Axios.get(urlString, {responseType: 'blob'})
    .then((response) => {
     // response.data is the zip file
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.zip'); //or any other extension
        document.body.appendChild(link);
        link.click();
    })
    .catch((error) => {
        console.log(error);
    }
    );
});
