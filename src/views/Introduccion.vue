<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.mb-5
      .col-lg-6.mb-4.mb-md-0
        .cajon-b.color-secundario.p-3.mb-5
          p Apreciado aprendiz, bienvenido al desarrollo de este componente, donde obtendrá el conocimiento para entender y elaborar bioabono, teniendo en cuenta los protocolos establecidos y las técnicas que permiten su desarrollo, el cual está determinado por cinco partes. En la primera, se explora lo relacionado con los bioabonos; en la segunda, se realizan las medidas e inspección de los insumos para su elaboración; en la tercera, se muestra el proceso para la producción de bioabonos; en la cuarta, conoceremos sobre la homogeneización del producto y, finalmente, en la quinta, se abordará el tema sobre la verificación de la calidad en el proceso de producción de los bioabonos. 
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-lg-6
        img.img-a(src='@/assets/curso/temas/intro/img_1.png', alt='')

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ERQhd-HzDcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
  
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Debido a la saturada intensidad y a la demanda de las producciones agrícolas, no se anticipa la importancia de las interacciones que se llevan a cabo en el suelo. Solo el aporte de productos que son tomados en el transcurrir de la producción, afectan la calidad del suelo, como el sustrato, el cual perjudica a la microfauna encargada de la vida en él. Con base en la importancia del uso de prácticas ambientales adecuadas, se indican los requerimientos nutricionales necesarios para el suelo, a partir de la aplicación de bioabonos, además de sus tipos, su aplicación y todos los procesos relacionados en cuanto a su elaboración. De esta manera, es posible conocer el ciclo de su producción y los beneficios de su uso.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
