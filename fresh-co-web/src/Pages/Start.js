import Header from '../Components/Header';

function BasicExample() {
  return (
    
    <div>
        <Header/>
        <center>
            <div class ="flex flex-row md:flex md:justify-center mb-6">
                <div class="font-light text-start px-40 pt-20 space-y-8"> 
                    <h1> La comida más <br>
                    </br>fresca al alcance de 
                    <h1 class="font-bold">Todos</h1>
                    </h1>

                    <p class=" font-normal">
                            Ayuda a evitar el desperdicio de comida pre-comprando <br>
                            </br>los cultivos de cientos de granjeros.
                        </p>

                    <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Comprar</button>
                    </div>
                    <div>
                    <img src="https://img.freepik.com/free-vector/road-cycling-concept-illustration_114360-9201.jpg?w=740&t=st=1664107978~exp=1664108578~hmac=af1636c4c901b06a0208795b11e631e2e3ee15b8c0a9cda6c9060c197d0701c9"/>
                    </div>
            </div>
        </center>
    </div>
  );
}

export default BasicExample;