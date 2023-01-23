const URLactual = window.location.pathname;

if (URLactual == "/somos-millam") {
    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = '<div class="nosotros-contenedor"> <div class="encabezado"> <h3>SOMOS MILLAM</h3> <h4>LO QUE LLEVAS PUESTO, ES EL REFLEJO DE QUIÉN ERES POR DENTRO</h4> <p> En un solo lugar encontrarás los accesorios que necesitas para reflejar quién eres. </p> <p>Una persona genuina por dentro y por fuera.</p> <p>Esto es más que una tienda de accesorios.</p> </div> <div class="seccion-uno"> <div class="quote"> <h3> "El estilo es saber quién eres, lo que quieres decir y que no te importe nada." </h3> <p>Gore Vidal</p> </div> <div class="potencial"> <span>SI QUIERES SACAR A RELUCIR TU POTENCIAL,</span> <span>TE INVITO A QUE NOS CONOZCAMOS MÁS POR AQUÍ</span> </div> </div> <div class="seccion-dos"> <div class="freddy"> <div class="img-freddy"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Freddy_240x240.jpg?v=1634577973" alt="img_fredy" /> <span>Freddy</span> <p>Apasionado de la moda, amante de la naturaleza y los viajes</p> </div> <div class="info-freddy"> <h4>¡Hola, soy Freddy!</h4> <p> Si alguna vez te preguntaste qué es lo que pueden contar las marcas, aquí te va mi historia. Porque <span class="span-black">todo comienza con un por qué…</span> </p> <p> Todo comenzó por la búsqueda de lo que parecía ser un simple gorro para llevarme a uno de mis viajes por la montaña. </p> <p> Pendiente de la <span class="span-black">moda</span> y el buen vestir, mi trabajo provocaba que esté al día sobre las tendencias <span class="span-black">urbanas</span> y <span class="span-black">lifestyle</span> en Chile. </p> <p> Cansado como tú de no poder encontrar en un solo lugar lo que necesitaba para verme por fuera como me sentía por dentro, en uno de mis tantos viajes, descubrí que debía arriesgarme si quería que personas como tú y como yo reflejáramos el <span class="span-red">poder</span>, la <span class="span-red">energía</span> y <span class="span-red">potencia</span> que se tiene para llevar adelante cualquier proyecto personal. </p> </div> </div> <div class="quote"> <h4>"ESO QUE TE HACE DIFERENTE AL RESTO…"</h4> <h4>CONFIANZA, EMPATÍA, HUMILDAD E IGUALDAD</h4> <p> El punto de partida es que te sientas bien, y va de la mano con encontrar el accesorio que te permita mostrar cómo te sientes por dentro. ¿Con ganas de sentirte una persona atrevida y confiada? Vas a conseguir lograr lo que te propongas. </p> <h4>"ES MÁS QUE SOLO LUCIR BIEN… ERES TÚ, COMIÉNDOTE EL MUNDO."</h4> </div> </div> <div class="seccion-tres"> <h4> DESDE 2017 PROMOVEMOS LA MODA Y EL ESTILO. ESCUCHAMOS LO QUE TENÍAS PARA DECIRNOS </h4> <p> En medio de un viaje me propuse un desafío: tener una tienda preparada para ti, donde puedas encontrar lo que buscas sin moverte de la esquina. Y gracias a la confianza depositada en la marca, un día mirando la fila de personas en la calle deseosas de entrar al local, entendimos que Millam es más que solo accesorios de moda, es el puente de conexión entre lo interno y lo externo de cada persona. </p> <p> ¿Es posible que un accesorio destaque la confianza y muestre el estilo que llevas? Sí, porque todo parte de la autoestima que traes y las metas que te propongas lograr. </p> <p> Ese largo camino que se recorre en un viaje de placer es el mismo que te invito a que realices contigo por dentro. Pregúntate hacia donde quieres ir con ese reloj que colocas en tus muñecas, ¿qué es lo que el mundo no sabe de ti aún? </p> <p> ¿Te has puesto a pensar si lo que eliges cada mañana de tu guardarropas, es fiel al mensaje que quieres darle a los demás y trabaja en sintonía con tus objetivos de vida? </p> <p> ¿Te preguntas alguna vez si eso refleja quién eres y la confianza que te tienes para lograr todo lo que te propones? </p> <h5> ESA ES LA PROPUESTA QUE TENEMOS EN MILLAM PARA TI. ATRÉVETE, VIVE Y PROVOCA. </h5> </div> <div class="seccion-cuatro"> <h4>CONOCE A MILLAM POR DENTRO</h4> <div class="staff-contenedor"> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Mari_240x240.jpg?v=1634665591" alt="" /> <span>Mari</span> <p>Alegre y extrovertida</p> <p>Transmite su personalidad a través del baile y la música.</p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Ros_240x240.jpg?v=1634665661" alt="" /> <span>Ros</span> <p>Curiosa y entusiasta</p> <p> La combinación perfecta entre una buena comida y amigos, sacan a relucir lo mejor de ella. </p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Lore_240x240.jpg?v=1634665735" alt="" /> <span>Lore</span> <p>Dedicada y apasionada camina las calles de Chile</p> <p>Desplegando su espíritu libre y desenfadado.</p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Angel_240x240.jpg?v=1634665779" alt="" /> <span>Ángel</span> <p>Comprometido y sin miedos a los cambios.</p> <p>El patinaje lo conecta con su personalidad atrevida y libre.</p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Janette_240x240.jpg?v=1634665856" alt="" /> <span>Jannette</span> <p>Soñadora y determinada.</p> <p> Donde haya un encuentro social, allí estará ella dando sus consejos y compartiendo una buena charla. </p> </div> </div> </div> <div class="seccion-cinco"> <h4>TE INVITAMOS A MOSTRARLE AL MUNDO QUIÉN ERES</h4> <h5>TE DAMOS LA BIENVENIDA A MILLAM</h5> <a href="/">¡Quiero reflejar mi propio YO!</a> </div> <div class="seccion-seis"> <span>SIGAMOS CONOCIÉNDONOS EN REDES SOCIALES</span> <div class="redes"> <a href="#">Facebook</a> <a href="#">Instagram</a> </div> </div> </div>';

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        main.innerHTML = '<div class="nosotros-contenedor"> <div class="encabezado"> <h3>SOMOS MILLAM</h3> <h4>LO QUE LLEVAS PUESTO, ES EL REFLEJO DE QUIÉN ERES POR DENTRO</h4> <p> En un solo lugar encontrarás los accesorios que necesitas para reflejar quién eres. </p> <p>Una persona genuina por dentro y por fuera.</p> <p>Esto es más que una tienda de accesorios.</p> </div> <div class="seccion-uno"> <div class="quote"> <h3> "El estilo es saber quién eres, lo que quieres decir y que no te importe nada." </h3> <p>Gore Vidal</p> </div> <div class="potencial"> <span>SI QUIERES SACAR A RELUCIR TU POTENCIAL,</span> <span>TE INVITO A QUE NOS CONOZCAMOS MÁS POR AQUÍ</span> </div> </div> <div class="seccion-dos"> <div class="freddy"> <div class="img-freddy"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Freddy_240x240.jpg?v=1634577973" alt="img_fredy" /> <span>Freddy</span> <p>Apasionado de la moda, amante de la naturaleza y los viajes</p> </div> <div class="info-freddy"> <h4>¡Hola, soy Freddy!</h4> <p> Si alguna vez te preguntaste qué es lo que pueden contar las marcas, aquí te va mi historia. Porque <span class="span-black">todo comienza con un por qué…</span> </p> <p> Todo comenzó por la búsqueda de lo que parecía ser un simple gorro para llevarme a uno de mis viajes por la montaña. </p> <p> Pendiente de la <span class="span-black">moda</span> y el buen vestir, mi trabajo provocaba que esté al día sobre las tendencias <span class="span-black">urbanas</span> y <span class="span-black">lifestyle</span> en Chile. </p> <p> Cansado como tú de no poder encontrar en un solo lugar lo que necesitaba para verme por fuera como me sentía por dentro, en uno de mis tantos viajes, descubrí que debía arriesgarme si quería que personas como tú y como yo reflejáramos el <span class="span-red">poder</span>, la <span class="span-red">energía</span> y <span class="span-red">potencia</span> que se tiene para llevar adelante cualquier proyecto personal. </p> </div> </div> <div class="quote"> <h4>"ESO QUE TE HACE DIFERENTE AL RESTO…"</h4> <h4>CONFIANZA, EMPATÍA, HUMILDAD E IGUALDAD</h4> <p> El punto de partida es que te sientas bien, y va de la mano con encontrar el accesorio que te permita mostrar cómo te sientes por dentro. ¿Con ganas de sentirte una persona atrevida y confiada? Vas a conseguir lograr lo que te propongas. </p> <h4>"ES MÁS QUE SOLO LUCIR BIEN… ERES TÚ, COMIÉNDOTE EL MUNDO."</h4> </div> </div> <div class="seccion-tres"> <h4> DESDE 2017 PROMOVEMOS LA MODA Y EL ESTILO. ESCUCHAMOS LO QUE TENÍAS PARA DECIRNOS </h4> <p> En medio de un viaje me propuse un desafío: tener una tienda preparada para ti, donde puedas encontrar lo que buscas sin moverte de la esquina. Y gracias a la confianza depositada en la marca, un día mirando la fila de personas en la calle deseosas de entrar al local, entendimos que Millam es más que solo accesorios de moda, es el puente de conexión entre lo interno y lo externo de cada persona. </p> <p> ¿Es posible que un accesorio destaque la confianza y muestre el estilo que llevas? Sí, porque todo parte de la autoestima que traes y las metas que te propongas lograr. </p> <p> Ese largo camino que se recorre en un viaje de placer es el mismo que te invito a que realices contigo por dentro. Pregúntate hacia donde quieres ir con ese reloj que colocas en tus muñecas, ¿qué es lo que el mundo no sabe de ti aún? </p> <p> ¿Te has puesto a pensar si lo que eliges cada mañana de tu guardarropas, es fiel al mensaje que quieres darle a los demás y trabaja en sintonía con tus objetivos de vida? </p> <p> ¿Te preguntas alguna vez si eso refleja quién eres y la confianza que te tienes para lograr todo lo que te propones? </p> <h5> ESA ES LA PROPUESTA QUE TENEMOS EN MILLAM PARA TI. ATRÉVETE, VIVE Y PROVOCA. </h5> </div> <div class="seccion-cuatro"> <h4>CONOCE A MILLAM POR DENTRO</h4> <div class="staff-contenedor"> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Mari_240x240.jpg?v=1634665591" alt="" /> <span>Mari</span> <p>Alegre y extrovertida</p> <p>Transmite su personalidad a través del baile y la música.</p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Ros_240x240.jpg?v=1634665661" alt="" /> <span>Ros</span> <p>Curiosa y entusiasta</p> <p> La combinación perfecta entre una buena comida y amigos, sacan a relucir lo mejor de ella. </p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Lore_240x240.jpg?v=1634665735" alt="" /> <span>Lore</span> <p>Dedicada y apasionada camina las calles de Chile</p> <p>Desplegando su espíritu libre y desenfadado.</p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Angel_240x240.jpg?v=1634665779" alt="" /> <span>Ángel</span> <p>Comprometido y sin miedos a los cambios.</p> <p>El patinaje lo conecta con su personalidad atrevida y libre.</p> </div> <div class="staff"> <img src="https://cdn.shopify.com/s/files/1/0603/6337/4784/files/Millam-accesorios-Janette_240x240.jpg?v=1634665856" alt="" /> <span>Jannette</span> <p>Soñadora y determinada.</p> <p> Donde haya un encuentro social, allí estará ella dando sus consejos y compartiendo una buena charla. </p> </div> </div> </div> <div class="seccion-cinco"> <h4>TE INVITAMOS A MOSTRARLE AL MUNDO QUIÉN ERES</h4> <h5>TE DAMOS LA BIENVENIDA A MILLAM</h5> <a href="/">¡Quiero reflejar mi propio YO!</a> </div> <div class="seccion-seis"> <span>SIGAMOS CONOCIÉNDONOS EN REDES SOCIALES</span> <div class="redes"> <a href="#">Facebook</a> <a href="#">Instagram</a> </div> </div> </div>';

        throw new Error("Error controlado");
    }
}