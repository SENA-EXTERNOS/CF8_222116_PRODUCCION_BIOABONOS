<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Producción de bioabonos

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5.text-center
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema_3/img_1.svg', alt='Texto que describa la imagen')
          
        h3.text-center Clasificación de bioabonos
        p.mb-0 Los bioabonos pueden pertenecer a diferentes categorías o clasificaciones. Al ser fertilizantes del suelo, proceden, inicialmente, de los bioinsumos, que pueden ser subproductos de cultivos que, en su interacción con los microorganismos y mineralización, conforman el bioabono. 

    
      .col-md.tarjeta.color-adicional-1.p-5.text-center.text-white
        .row.justify-content-center.mb-4
          .col-5
            figure
              img.img-a(src='@/assets/curso/temas/tema_3/img_2.svg', alt='Texto que describa la imagen')
          
        h3.text-center Composición nutricional
        p.mb-0 En el proceso, y al finalizar la producción, los estudios y pruebas microbiológicas permiten analizar la composición nutricional que contiene el bioabono, y, así, determinar en qué tipo de suelo o a qué tipo de deficiencia va ir dirigido.

      .col-md.tarjeta.color-primario.p-5.text-center
        .row.justify-content-center.mb-4
          .col-5
            img.img-a(src='@/assets/curso/temas/tema_3/img_3.svg', alt='Texto que describa la imagen')
          
        h3.text-center Producción de bioabono
        p.mb-0 Otro aspecto relevante en cuanto a la producción del bioabono, hace referencia al tipo de su presentación, sea líquido o sólido. Dependiendo de esto, se llevan a cabo procedimientos y técnicas propias para su elaboración, proceso de maduración, y almacenamiento final.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido.mt-5
      h2 3.1 Composición líquida de bioabonos y lixiviados

    p.mb-5 En el reconocimiento de la producción de bioabonos, un aspecto destacado está relacionado con la composición líquida de bioabonos y lixiviados. Observe el siguiente video, allí se presentan aspectos importantes referentes a este tema.

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador
    #t_3_2.titulo-segundo.color-acento-contenido.mt-5
      h2 3.2 Composición sólida de bioabonos

    p.mb-5 Reconociendo la composición líquida de bioabonos y lixiviados, en este apartado, se presenta todo lo relacionado con la composición sólida de bioabonos.

    .bg_3.p-4.mb-5 
      SlyderB(:datos="datosSlyder")

    .row.mb-5
      .col-lg-5.mb-4.mb-md-0
        .cajon-b.color-secundario.p-3.mb-5
          p.mb-0 Aprendiz, puede profundizar sobre las fases del compostaje consultando el documento “Manual de compostaje del agricultor”, encontrado en el material complementario. 
      .col-lg-7
        img.img-a(src='@/assets/curso/temas/tema_3/img_8.png', alt='Texto que describa la imagen')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido.mt-5
      h2 3.3 Enriquecimiento de bioabono a partir de minerales 

    .row.mb-5
      .col-lg-5.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_3/img_9.png', alt='Texto que describa la imagen')
      .col-lg-7
        .cajon-b.color-secundario.p-3
          p.mb-0 Al implementarse un cultivo para producción, la transición de uno a otro, continuamente, genera en el suelo la escasez de minerales indispensables para el desarrollo del material vegetal a producir. Por esta razón, es de gran importancia proveer, periódicamente, los minerales absorbidos en el crecimiento y desarrollo de las plantas, pues la no absorción de alguno de estos, en los diferentes estadios de desarrollo, genera deficiencias que implican productos de baja calidad.
        p Para realizar los aportes nutricionales mediante el suministro de bioabonos, se determinan, en su elaboración, bioinsumos que contengan la mineralización apropiada para las especies o tipos de cultivo, por ejemplo, el hierro actúa en los procesos fotosintéticos y en la fijación del nitrógeno. Así, cada uno de los minerales mencionados anteriormente, interviene, de forma particular, tal como se observa en la siguiente infografía. Así, el bioabono se enriquece mediante la aplicación de sueros, roca fosfórica, carbonato de calcio, cenizas y otros insumos que contienen los minerales requeridos.

    .fondo-3.p-4
      .row.justify-content-center
        .col-lg-10
          ImagenInfografica.color-acento-contenido.mb-5
            template(v-slot:imagen)
              figure
                img.img-a(src='@/assets/curso/temas/tema_3/img_10.svg', alt='Texto que describa la imagen')

            .tarjeta.tar_im.p-3(x="45%" y="3%" numero="1")
              p.mb-0 Componente fundamental de carbohidratos, proteínas, lípidos y aminoácidos. 
            .tarjeta.tar_im.p-3(x="34%" y="16%" numero="2")
              p.mb-0 Metabolismo importante en el balance iónico. Agente reductor en reacciones de energía a nivel celular.
            .tarjeta.tar_im.p-3(x="28%" y="30%" numero="3")
              p.mb-0 Componente de todos los compuestos orgánicos.
            .tarjeta.tar_im.p-3(x="26%" y="45%" numero="4")
              p.mb-0 Componente de proteínas, aminoácidos y ácidos nucleicos.
            .tarjeta.tar_im.p-3(x="28%" y="60%" numero="5")
              p.mb-0 Transferencia de energía y metabolismo de proteínas.
            .tarjeta.tar_im.p-3(x="34%" y="75%" numero="6")
              p.mb-0 Importante en la fotosíntesis, transporte de fotosintatos y reserva de almidones.
            .tarjeta.tar_im.p-3(x="45%" y="89%" numero="7")
              p.mb-0 División celular, mantiene la integridad de las membranas. Es importante en la formación y desarrollo uniforme del fruto.
            .tarjeta.tar_im.p-3(x="55%" y="89%" numero="8")
              p.mb-0 Componente de la molécula de clorofila y cofactor de reacciones enzimáticas. Incrementa la producción de azúcares.
            .tarjeta.tar_im.p-3(x="66%" y="75%" numero="9")
              p.mb-0 Transfiere energía a la planta.
            .tarjeta.tar_im.p-3(x="72%" y="60%" numero="10")
              p.mb-0 Componente de varias sustancias (hormonas), que permiten el desarrollo de las plantas.
            .tarjeta.tar_im.p-3(x="74%" y="45%" numero="11")
              p.mb-0 Formación de proteínas. Transferencia de energía. Crecimiento de la raíz y de puntos aéreos.
            .tarjeta.tar_im.p-3(x="72%" y="30%" numero="12")
              p.mb-0 Transporte de electrones, germinación del polen y crecimiento del tubo de polen.
            .tarjeta.tar_im.p-3(x="66%" y="16%" numero="13")
              p.mb-0 Junto con el boro, cumple un papel importante en la formación de los frutos y el transporte de electrones.
            .tarjeta.tar_im.p-3(x="55%" y="3%" numero="14")
              p.mb-0 Metabolismo de carbohidratos en la síntesis de la pared celular.

    





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'Los bioabonos de tipo sólido, por lo general, pasan por un proceso de descomposición de la materia orgánica que, en sus etapas iniciales, requiere la presencia del oxígeno. En estas etapas, las poblaciones de microorganismos, presentes en la materia prima, procesan lentamente el contenido y, así, su elaboración es adaptable a muchos tipos de ambientes o variaciones climáticas. No obstante, pueden verse afectados por variables como la temperatura, la acidez, el pH, la aireación y la humedad.',
        imagen: require('@/assets/curso/temas/tema_3/img_4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Para este tipo de bioabonos es importante resaltar que, a medida que avanza el proceso de elaboración, el tamaño de las partículas debe ser intermedio, pues compactaciones de partículas muy pequeñas en su estructura pueden favorecer procesos anaerobios, lo que altera el resultado. Los bioabonos inician una fase de estabilización, o enfriamiento, a partir de la interacción de los componentes, donde la actividad microbiana alcanza altos niveles de temperatura que se deben controlar. Al procesarse en mayor cantidad y velocidad, la fuente energética disminuye, avanzando, con ello, en la maduración mediante la participación de diferentes tipos de biota, dando continuidad a la fermentación de una forma lenta que, posteriormente, produce el abono.',
        imagen: require('@/assets/curso/temas/tema_3/img_5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La composición del bioabono incluye mezclas homogéneas de ingredientes seleccionados para el procesamiento, por ejemplo, de nutrientes como el nitrógeno, el fósforo, el potasio, el calcio, el magnesio, el cobre, el zinc, el hierro, entre otros, los cuales se obtienen mediante la utilización de una amplia variedad de bioinsumos como melaza, jugos de caña, salvado de arroz, cascarillas, tierra, estiércoles de animales, levaduras, etc. El aporte de líquidos al bioabono sólido puede proceder de bioabonos líquidos, que aportan al enriquecimiento mineral del producto final.',
        imagen: require('@/assets/curso/temas/tema_3/img_6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Es importante prestar atención a aspectos del bioabono, por ejemplo, al exceso de humedad, a insumos viejos o desproporcionados, a la presencia de residuos químicos, como herbicidas, en los residuos de cosechas, a la poca homogeneidad en la mezcla y al mal almacenamiento y disposición final. Todo esto afecta la actividad biológica del preparado y, por ende, su calidad en la nutrición de los suelos para los cultivos.',
        imagen: require('@/assets/curso/temas/tema_3/img_7.png'),
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
