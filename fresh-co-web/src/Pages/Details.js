import DetailsCard from '../Components/DetailsCard';



function BasicExample() {
  return (
    <div>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        <DetailsCard 
        Nombre={"Villa Bonita"}
        Locacion={"Monterrey, Mexico"}
        Descripcion={"Productos sembrados de calidad de la familia becerra"}
        ImagenUrl={"https://img.europapress.es/fotoweb/fotonoticia_20190730113811_420.jpg"}
        Rating={"4"}/>
    </div>
  );
}

export default BasicExample;