
function Gallery() {  
    const images = [  
        "src/img/gallery-1.png",  
        "src/img/gallery-2.png",  
        "src/img/gallery-3.png",  
        "src/img/gallery-4.png"  
        
    ];  


    return (  
        <section style={{ display: "flex", gap: "30px", justifyContent: "center", marginTop: "20px" }}>  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{ width: "10%" }} />  
            ))}  
        </section>  
    );  
}  


export default Gallery;  