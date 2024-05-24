import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';

const SubiendoImagenes = (props) => {
    const [image, setImage] = useState("");
    const [Loading, setLoading] = useState(false);
    const { onImageUpload } = props;
    

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "userimg");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/da2p9oyoy/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        setImage(file.secure_url);
        localStorage.setItem("profileImage", file.secure_url);
        console.log(file.secure_url);
        setLoading(false);
        onImageUpload(file.secure_url);
    }
    return (<div>
        <Container>
            <h2>
                Subiendo Imagenes
            </h2>
            <FormGroup>
                <Input
                    type="file"
                    name="file"
                    placeholder="Subir imagen"
                    onChange={uploadImage}
                />
                {Loading ? (
                    <h3>Loading...</h3>
                ) : (
                    <img src={image} style={{ width: "200px" }} />
                )}
            </FormGroup>
        </Container>
    </div>);
}

export default SubiendoImagenes;