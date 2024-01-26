import axios from 'axios';

export function useProductFunctions(){
    const handleAddProduct = async (productDetails) => {
        try {
          let product = productDetails;
          const thumbnail = document.getElementById("file-input");
      
          if (thumbnail && thumbnail.files.length > 0) {
            const formData = new FormData();
            formData.append('product', thumbnail.files[0]);
      
            const response = await axios.post('http://localhost:4000/uploadImg', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            const responseData = response.data;
            if(responseData.sucess){
              product.image=responseData.image_url;
              const addProductRes = await axios.post('http://localhost:4000/allProductsAdd', product).then((res)=>{
                alert("Product Added");
                console.log('Server Response:', res.data);
              });
            }else{
              alert("Request Failed! Please Try Again.")
            }
            // Use responseData as needed
            
          } else {
            console.error('No file selected');
            alert("Request Failed! Selecting a file is IMPORTANT!!! Please Try Again.");
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      return {handleAddProduct}
}