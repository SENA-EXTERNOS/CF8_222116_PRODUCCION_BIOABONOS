<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Medidas e inspección a insumos para la elaboración de bioabonos

    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-md-0
        .cajon.color-acento-botones.p-4.mb-4.text-small
          p Todos los productos empleados en la agricultura están regidos por normas que regulan sus diferentes estancias. En temas de producción, los bioinsumos, la comercialización, su uso y su disposición adecuada, se encuentra regulada por la Resolución 00375 de 2004, en la cual se dictan disposiciones sobre el registro y el control de bioinsumos u otros extractos vegetales de uso agrícola en el país, con el fin de tener un registro y control de todo lo requerido en su elaboración.
          p.mb-0 Este tipo de seguimiento es de gran importancia, dado que la producción agrícola se relaciona, directamente, con la alimentación y, por consiguiente, con la salud del ambiente y del consumidor.
      .col-lg-5
        img.img-a(src='@/assets/curso/temas/tema_2/img_1.png', alt='Texto que describa la imagen')

    p.mb-5 Para mayor información sobre el marco regulatorio de bioinsumos en Colombia, puede revisar los siguientes documentos en el material complementario.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5.text-center
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema_2/img_2.svg', alt='Texto que describa la imagen')
          
        h3.text-center Resolución 000698 de 2011.
        p.mb-0 Por medio de la cual se establecen los requisitos para el registro de departamentos técnicos de ensayos de eficacia y los requisitos para el registro y control de las personas que produzcan, produzcan por contrato, importen y/o realicen ensayos de eficacia, así como para el registro de los bioinsumos de uso agrícola.

    
      .col-md.tarjeta.color-primario.p-5.text-center
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema_2/img_3.svg', alt='Texto que describa la imagen')
          
        h3.text-center Resolución 004754 de 2011.
        p Por medio de la cual se establecen los requisitos para la ampliación de uso de bioinsumos y plaguicidas químicos de uso agrícola en cultivos menores. 
        p.mb-0 Igualmente, en esta resolución, se realiza el agrupamiento de cultivos menores y se permite efectuar la prueba de eficacia solo a uno de los cultivos, extendiéndose el resultado para los demás.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Calidad de bioinsumos

    p.mb-5 Dando continuidad a lo relacionado con las medidas y la inspección de insumos para la elaboración de bioabonos, se presentan, en este apartado, elementos destacados a considerar en lo que refiere a la calidad de los bioinsumos.

    .row.align-items-center
      .col-lg-5.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_4.png', alt='Texto que describa la imagen')
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Para determinar la calidad de los bioabonos, se realizan pruebas que definen la pureza de los implementos que se emplean en su elaboración, además del conteo establecido en números, bien sea de hongos o de bacterias, los cuales pueden determinar el tipo de reacciones que ofrecen en el proceso de compostaje, o de las características de las acciones enzimáticas.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | El desarrollo de todas las prácticas relacionadas con la calidad de los bioinsumos, están reguladas por el Instituto Colombiano Agropecuario (ICA) con la Resolución 068370 de 2020, en ella se define los bioinsumos como: <br><br>Producto que se emplea con fines de manejo integrado de plagas o en la mejora de la productividad de los cultivos y el suelo, elaborado de forma masiva a partir de microorganismos vivos, virus, microorganismos, productos de ocurrencia natural o productos bioquímicos. (ICA, 2020) 
          li 
            .lista-ol--cuadro__vineta
              span 3
            p Igualmente, a través de esta norma, se da claridad sobre aquellos productos que no se consideran bioinsumos, por ejemplo:<br><br>los antibióticos, las toxinas <em>(β-exotoxina de Bacillus thuringensis)</em>, los organismos genéticamente modificados <em>(OGM)</em> y los bioinsumos descritos como extremada y altamente tóxicos por el Instituto Nacional de Salud […] o aquellos productos que sean catalogados como patógenos a humanos, plantas o animales. (ICA, 2020)
          li 
            .lista-ol--cuadro__vineta
              span 4
            | En síntesis, esta resolución reglamenta los bioinsumos destinados a la producción de bioabonos, con la finalidad de incrementar los estándares de calidad de su producción e, igualmente, con miras a obtener una producción limpia y garante de inocuidad en todos sus niveles de aplicación.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Disposición adecuada

    .fondo-3.p-5.mb-5
      p.mb-5 Además de la calidad de los bioinsumos, es necesario reconocer la disposición adecuada para su desarrollo.

      SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_6.svg' alt='AvatarTop')
          p.text-center Dentro de los procedimientos que implica el uso de bioinsumos, resaltan aspectos como su recepción y acopio. 

        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_7.svg' alt='AvatarTop')
          p.text-center Estos procedimientos permiten no solo el seguimiento a su acumulación, oferta y suministro según requerido en el cultivo, también garantiza la calidad durante todo el proceso de utilización.

        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_8.svg' alt='AvatarTop')
          p.text-center El acondicionamiento de los bioinsumos hace referencia a la instalación de almacenamiento y mantenimiento de variables que puedan afectar su presentación y calidad, por ejemplo, la humedad.

        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_9.svg' alt='AvatarTop')
          p.text-center.mb-0 Un acondicionamiento, dependiendo de las condiciones ambientales, del lugar e independiente del tipo de bioabono, bien sea este en presentación líquido o sólido, requiere de espacios que permita buena condición de limpieza, ambientes secos, aireados y sin contacto directo con la luz solar.
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_10.svg' alt='AvatarTop')
          p.text-center Cuando se requieren realizar mezclas para su aplicación, es importante contar con la ambientación necesaria para, así, dar uso correcto a todo el producto.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido.mt-5
      h2 2.3 Selección de cantidades y proporciones

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_2/img_11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la elaboración de bioabonos se debe tener en cuenta las mezclas de los insumos requeridos en su elaboración, haciendo uso cuantificado de las proporciones indicadas para una cantidad total. Alcanzar este producto implica determinar características cualitativas, como la coloración en cada uno de los procedimientos que se realicen, o las densidades alcanzadas con el suministro líquido apropiado. Así, tanto las aplicaciones líquidas como sólidas, están sujetas al tipo de bioabono y a sus componentes, y, para su elaboración, se podrán manipular capas o materiales sólidos como subproductos animales, entre los cuales se destaca estiércol, material vegetal en descomposición, residuos de cosechas (tallos, hojas, frutos entre otros), y algunos elementos como ceniza, sales minerales y agua no clorada.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido.mt-5
      h2 2.4 Control de variables ambientales 

    p.mb-5 Las características o variables agroclimáticas, se encuentran estrechamente relacionadas con el proceso de elaboración del bioabono, su periodo de maduración y su posterior mantenimiento.

    .fondo-1.p-4
      SlyderA(tipo="b")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Dentro de las variables a controlar en el desarrollo de los bioabonos se tienen la humedad relativa (Hr), la cual define que no son apropiados los ambientes con una alta saturación de agua, o, por el contrario, con un alto estrés a raíz de ambientes secos. Esto implica que, si la humedad es muy baja, no se continúan los procesos de transformación de la materia orgánica, y si, por el contrario, la Hr es alta, querrá decir que hay mayor disponibilidad de oxígeno en procedimientos que deberán ser anaerobios, afectando el desarrollo del bioabono.
        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema_2/img_12.png', alt='Texto que describa la imagen')

        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Otra variable a tener en cuenta, y que es necesario controlar de manera adecuada en el proceso de producción de bioabono, es el equilibrio entre la temperatura y el tiempo de duración del proceso llevado a cabo en la descomposición, o transformación del material, a través de los microorganismos. La temperatura no debe ser muy alta, si lo llegara a ser, la actividad metabólica de los microorganismos podría llevarse a cabo sin terminar los procesos que dan finalidad al producto, pero, cuando es muy baja, no habría una actividad microbiana activa y se detendría la transformación.
        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema_2/img_13.png', alt='Texto que describa la imagen')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El pH, sin duda, se relaciona con el tipo de materia o bioinsumos y su composición ácida, o básica, se altera en la medida que avanzan los procesos de transformación. Así, se inicia con una acidez alta, aunque el ideal de este tipo de biopreparados es alcanzar una acidez neutra. Igualmente, es necesario tener control sobre variables como la radiación y la precipitación, ya que la exposición directa de estas puede alterar los procesos de transformación del bioabono en sus diferentes etapas.
        
          .col-md-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema_2/img_14.png', alt='Texto que describa la imagen')

    separador
    #t_2_5.titulo-segundo.color-acento-contenido.mt-5
      h2 2.5 Manejo adecuado de asepsia en todas las etapas de producción

    .fondo-3.p-4
      .row.align-items-center.mb-5
        .col-lg-5.mb-4.mb-md-0
          p Dado que la elaboración de bioabonos conlleva la utilización de diferentes insumos de tipo biológico, se deben tener en cuenta los siguientes elementos.
        .col-lg-7
          img(src='@/assets/curso/temas/tema_2/img_15.png', alt='Texto que describa la imagen')

      SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_16.svg' alt='AvatarTop')
          p.text-center.mb-0 Definición de la estructura de la biofábrica, la cual se debe encontrar completamente limpia.
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_17.svg' alt='AvatarTop')
          p.text-center.mb-0 Evitar el contacto con contaminantes, bien sean aguas con residuos fecales, subproductos vegetales que contengan residuos químicos, u otros elementos que alteren el resultado del bioabono en el proceso de producción.
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_18.svg' alt='AvatarTop')
          p.text-center.mb-0 La asepsia del procedimiento se relaciona con el agua destinada a las funciones que se deben realizar, por ejemplo, la portabilidad, el almacenamiento, los drenajes y las reservas. Estas funciones deben realizarse con el mayor grado de higiene y limpieza.
        .tarjeta.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_2/img_19.svg' alt='AvatarTop')
          p.text-center.mb-0 El lugar destinado para la elaboración del bioabono debe controlar las visitas de animales de tipo doméstico y salvajes. Todos los controles evitan la contaminación del producto final.



    



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
