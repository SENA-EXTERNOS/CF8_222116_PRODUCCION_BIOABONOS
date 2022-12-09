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
        .cajon-b.color-secundario.p-3.mb-5.text-small
          p.mb-0 Apreciado aprendiz, bienvenido al desarrollo del componente formativo “Producción de bioabonos”. En los apartados a desarrollar, obtendrá el conocimiento para elaborar bioabono, teniendo en cuenta los protocolos establecidos y las técnicas que permiten su desarrollo. El desarrollo del componente está determinado por cinco partes. En la primera parte se explora lo relacionado con los bioabonos, en la segunda, las medidas e inspección a insumos para su elaboración. En un tercer apartado, se presenta la producción de bioabonos, luego, en cuarto lugar, la homogeneización del producto y, finalmente, en la quinta sección, se abordará la verificación de calidad del proceso de producción de los bioabonos. Está invitado a iniciar este recorrido observando el siguiente video de introducción.
      .col-lg-6
        img.img-a(src='@/assets/curso/temas/intro/img_1.png', alt='Texto que describa la imagen')

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

  
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Debido a la saturada intensidad y a la demanda de las producciones agrícolas, no se prevé la importancia de las interacciones que se llevan a cabo en el suelo. Así, solo el aporte de productos que son tomados en el transcurrir de la producción, afecta la calidad de suelo, como el sustrato, afectando la microfauna encargada de la vida en él. Con base en la importancia del uso de prácticas ambientales adecuadas, se indican los requerimientos nutricionales necesarios para el suelo a partir de la aplicación de bioabonos, además de sus tipos, su aplicación y todos los procesos relacionados en cuanto a su elaboración. De esta manera, es posible conocer el ciclo de su producción y los beneficios de su uso.
    
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
