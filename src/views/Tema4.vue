<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Homogeneización del producto
    
    p.mb-5 Una vez reconocidos los elementos destacados, sobre la producción del bioabono, describiremos la homogeneización del producto.

    .fondo-4.p-4
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p La homogeneización del bioabono, es parte indispensable del procedimiento en su elaboración. En esta etapa, se conjugan los distintos bioinsumos que, en diferentes estructuras y proporciones, aportan al proceso de fermentación, cuidando que, en este proceso, no se afecte la función de los microorganismos que allí intervienen. Sea en la preparación de bioabonos líquidos o sólidos, esta homogeneidad permite suministrar, de manera adecuada, los nutrientes, evitando un desequilibrio en el total del contenido, permitiendo, así, la aireación o disgregación de partículas, para obtener relaciones de tipo bioquímicas. 
        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema_4/img_1.png', alt='')

        .row.align-items-center.justify-content-center
          .col-md-5.mb-4.mb-md-0
            p Algunas formas de llevar a cabo la homogeneización, se da con la mezcla alternada de bioinsumos organizados en montículos separados, a los cuales se les adiciona la humedad correspondiente a cada capa y, así, finalmente, se integran hasta obtener una pila completa. Otra forma es mezclar, sin discriminar, los bioinsumos, y, al final, en la pila completa, adicionar los líquidos que proveen humedad.
        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema_4/img_2.png', alt='')

    p.mb-5 En el recorrido de la homogeneización del producto se presenta, en primera medida, todo lo relacionado con la separación de sólidos.

    .bg_1.p-5.mb-5
      SlyderB(:datos="datosSlyder")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_6.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Se procede a la decantación del bioabono para separar el contenido de materia prima que ha empezado el proceso de fermentación del bioabono líquido que será el producto final. No obstante, este debe ser filtrado como último paso en su elaboración, obteniendo, con ella, densidad y pureza en su contenido, al tiempo que se evitan partículas que se comporten de manera inapropiada en la aplicación, o que generen reprocesos en el método físico de aplicación con la utilización de maquinarias. Así mismo, es importante tener el material líquido filtrado para poder realizar diferentes pruebas de calidad, las cuales pueden estar asociadas a pruebas organolépticas o a análisis de laboratorio, microbiológicos o químicos.

    .fondo-3.p-4.mb-5
      .row.align-items-center.mb-5
        .col-lg-5.mb-4.mb-md-0
          p En relación con la homogeneización del producto, se presenta a continuación, todo lo relacionado con el control de procesos de fermentación.
        .col-lg-7
          img(src='@/assets/curso/temas/tema_4/img_7.png', alt='')

      .row.justify-content-center.mb-5
        .col-lg-8
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-secundario.p-5.text-center
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema_4/img_8.svg', alt='')
                
              p.mb-0 Este proceso de control, se logra cuando se obtienen respuestas como la no formación de gases tóxicos durante las etapas del proceso, o, como es el caso, al momento de generarse la pudrición en el contenido, por aumentos de variables, como la humedad. Igualmente, es preciso que la fermentación esté controlada cuando la descomposición de la materia orgánica, a través de los microorganismos, esté presente, evitando que se generen momentos de actividad anaerobia, lo que eliminaría el contenido biótico del mismo.           
            .col-md.tarjeta.color-primario.p-5.text-center
              .row.justify-content-center.mb-4
                .col-6
                  figure
                    img(src='@/assets/curso/temas/tema_4/img_9.svg', alt='')
                
              p.mb-0 Como parte del proceso de elaboración del bioabono, la fermentación, como práctica seleccionada en su desarrollo, debe prever el control de las variables químicas, físicas y biológicas, para garantizar, desde el principio hasta el final, la obtención de un bioabono de gran calidad. 

    separador

    .cajon.color-primario.p-4
      p.mb-0 Para complementar la información sobre fermentación en bioabonos, lo invitamos a consultar el artículo “Cómo los abonos orgánicos recuperan la vida microbiana del suelo”, el cual se encuentra en el material complementario. 
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'Durante todo el proceso de elaboración de bioabonos, se da la separación de sólidos, bien sea en la colecta de las materias primas que lo constituyen, o en el proceso de separación de capas, antes de la homogeneización. Esta práctica de separación, continúa cuando el producto se encuentra terminado, pues, en la agricultura, es común utilizar proporciones definidas para la aplicación individual, o al cultivo en general, de bioabonos.',
        imagen: require('@/assets/curso/temas/tema_4/img_4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'De esta manera, cuando el producto se encuentra en el estado ideal y, dado que, por lo general, se elaboran grandes cantidades, se procede a su empaque y almacenamiento. Si el bioabono se encuentra en partículas muy grandes al momento de la aplicación, tarda más en ser asimilado por las plantas. Por esta razón, el bioabono se selecciona pasando por herramientas de tamizaje y, de esta manera, se filtra el bioabono más fino para, así, procesar la estructura de los que aún presenten un grosor o tamaño mayor.',
        imagen: require('@/assets/curso/temas/tema_4/img_5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
