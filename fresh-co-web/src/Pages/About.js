import Header from '../Components/Header';

function BasicExample() {
  return (
    <div>
        <Header/>
          <div class ="md:justify-center mb-6">
            <div class="text-start px-40 pt-8 "> 
              <h1> ¿Cómo Funciona?
              </h1>
              <div class ="flex flex-row flex space-x-28 space-y-14 px-12 pt-6">
                  <p class = "font-bold text-xl">No mas  <p class = "text-orange-800 inline-block"> desperdicios </p>
                  <p class=" font-normal">
                      Al comprar los comestibles antes de <br>
                      </br> ser cosechados, los agricultores <br>
                      </br>saben exactamente cuanto plantar y <br>
                      </br>no generar desperdicios.
                  </p>
                  </p>

                  <p class = "font-bold text-xl inline-block">Los <p class = "text-green-600 inline-block"> productores </p>
                  <p class=" font-normal">
                      Tienen problemas para tener un  <br>
                      </br> pago justo por sus cultivos, FreshCo <br>
                      </br> permite autoregular el precio del <br>
                      </br> mercado.
                  </p>
                  </p>
              </div>

              <div class ="flex flex-row flex space-x-28 space-y-14 px-24 ">
                  <p class = "font-bold text-xl"><p class = "text-6xl text-green-600 inline-block"> Tú </p> como actor principal
                  <p class=" font-normal">
                      Recibes el mejor precio del mercado y <br>
                      </br> ayudas a los granjeros a conseguir <br>
                      </br> precios justos, y a tener control sobre <br>
                      </br> la perdida de alimento
                  </p>
                  </p>

                  <p class = "font-bold text-xl inline-block"> Más <p class = "text-orange-800 inline-block"> Ganacias </p>
                  <p class=" font-normal">
                      Los productores tienen la garantía  <br>
                      </br> de que su consecha será consumida,  <br>
                      </br> aumentando la eficienia  y<br>
                      </br> reduciendo perdidas
                  </p>
                  </p>
              </div>

            </div>

          </div>
    </div>
  );
}

export default BasicExample;