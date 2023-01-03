export default {
  global: {
    componenteFormativo: 'Producción de bioabonos',
    descripcionCurso:
      'Este componente contempla aspectos teóricos y técnicos sobre el bioabono, desglosando temáticas desde la selección de insumos y la preparación y el control de calidad, hasta las descripciones de su comportamiento como fertilizante del suelo. Igualmente, se relacionan las propiedades físicas, químicas y biológicas que lo integran, destacando, así, las ventajas en su producción y su aporte al medio ambiente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bioabonos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características nutricionales de los bioabonos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Efectos sanitarios de los bioabonos en los cultivos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Efectos del bioabono en el suelo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Medidas e inspección a insumos para la elaboración de bioabonos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Calidad de bioinsumos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Disposición adecuada',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Selección de cantidades y proporciones',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Control de variables ambientales',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Manejo adecuado de asepsia en todas las etapas de producción',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producción de bioabonos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Composición líquida de bioabonos y lixiviados',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Composición sólida de bioabonos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Enriquecimiento de bioabono a partir de minerales ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Homogeneización del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Separación de sólidos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Decantación o infiltración de contenidos líquidos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Control de procesos de fermentación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Verificación de calidad del proceso de producción de bioabono',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Estabilidad de bioabono',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Pruebas de análisis o medición de pH',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Prueba organoléptica',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Composición sólida de bioabonos',
      referencia:
        'Martínez, M., Pantoja, A. & Román, P. (2013). Manual del compostaje del agricultor. Organización de las Naciones Unidas para la alimentación y la agricultura. ',
      tipo: 'Manual',
      descarga: '/downloads/I3388S.pdf',
    },
    {
      tema: 'Medidas e inspección a insumos para la elaboración de bioabonos ',
      referencia:
        'Resolución 000698 de 2011. [Instituto Colombiano Agropecuario]. Por la cual  se establecen los requisitos para el registro de departamentos técnicos de ensayos de eficacia, productores e importadores de bioinsumos de uso agrícola y se dictan otras disposiciones. Febrero 4 de 2011.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/Normatividad/Normas-Ica/Resoluciones-Oficinas-Nacionales/2020/2020R68370/Resolucion-698-de-2011.pdf.aspx?lang=es-CO#:~:text=La%20presente%20Resoluci%C3%B3n%20se%20aplica,su%20comercializaci%C3%B3n%20o%20uso%20directo.',
    },
    {
      tema: 'Control de procesos de fermentación',
      referencia:
        'Ávila. P. (2017). ¿Cómo los abonos orgánicos recuperan la vida microbiana del suelo? Hortalizas.com. ',
      tipo: 'Artículo de divulgación',
      link:
        'https://www.hortalizas.com/proteccion-de-cultivos/como-los-abonos-organicos-recuperan-la-vida-microbiana-del-suelo/',
    },
    {
      tema: 'Medidas e inspección a insumos para la elaboración de bioabonos ',
      referencia:
        'Resolución 004754 de 2011. [Instituto Colombiano Agropecuario]. Por la cual se establecen los requisitos para la ampliación de uso de bioinsumos y plaguicidas químicos de uso agrícola en cultivos menores y se dictan otras disposiciones. Diciembre 7 de 2011.',
      tipo: 'Resolución',
      descarga: '/downloads/2011R4754.pdf',
    },
  ],
  glosario: [
    { termino: 'Biota:', significado: 'conjunto de seres vivos.' },
    {
      termino: 'Bioinsumo',
      significado:
        'producto de procedencia biológica que se utiliza en la elaboración de bioabonos.',
    },
    {
      termino: 'Compost',
      significado:
        'técnica que integra diferentes compuestos orgánicos para la producción de abonos.',
    },
    {
      termino: 'Disgregar',
      significado:
        'hace referencia a la separación de las partículas que componen un todo.',
    },
    {
      termino: 'Fermentación',
      significado:
        'proceso que utiliza microorganismos para transformar la materia.',
    },
    {
      termino: 'Fitosanitario',
      significado: 'está relacionado con ‘fito’ planta y ‘sanitario’, sanidad.',
    },
    {
      termino: 'Organoléptico',
      significado: 'hace referencia a los órganos sensoriales.',
    },
    {
      termino: 'Sobrenadante',
      significado:
        'hace referencia a un contenido suspendido sobre un líquido.',
    },
    {
      termino: 'Subproducto',
      significado: 'residuo utilizable resultado de un procedimiento anterior.',
    },
    {
      termino: 'Tamizar',
      significado:
        'acción que separa partículas, de diferentes tamaños, a través de herramientas como el tamiz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Dussan, S., Miranda, D. y Villegas, D. (2016). Efecto de la deficiencia de N, P, K, Mg, Ca y B sobre la acumulación y distribución de la masa seca en plantas de guayaba. Revista Colombiana de Ciencias Hortícolas, 10. 40-52.',
      link: 'http://dx.doi.org/10.17584/rcch.2016v10i1.4277',
    },

    {
      referencia:
        'Instituto Colombiano Agropecuario (2004, febrero 27). Resolución 00375. Por la cual se dictan las disposiciones sobre Registro y Control de los Bioinsumos y Extractos Vegetales de uso agrícola en Colombia.',
      link:
        'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/resoluciones-derogadas/resolucion-375-de-2004.aspx',
    },

    {
      referencia:
        'Instituto Colombiano Agropecuario (2020, mayo 27). Resolución 068370. Por medio de la cual se establecen los requisitos para el registro de productor, productor por contrato, envasador, importador y departamentos técnicos de ensayos de eficacia agronómica de Bioinsumos.',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Agricola/Servicios/Fertilizantes-y-Bio-insumos-Agricolas/Resolucion-068370-del-27-de-mayo-de-2020.pdf.aspx?lang=es-CO',
    },

    {
      referencia:
        'Ochoa, R. & Ochoa, V. (2019). Aplicación de microorganismos y sus beneficios en suelos para la producción agrícola. [Tesis de pregrado. Universidad Nacional Abierta y a Distancia]. Repositorio Institucional UNAD.',
      link:
        'https://repository.unad.edu.co/jspui/bitstream/10596/25714/1/%20%09rdochoam.pdf',
    },

    {
      referencia:
        'Real Academia Española (2014). Diccionario de la lengua española, 23.ª ed. RAE.',
      link: 'https://dle-rae-es.webpkgcache.com/doc/-/s/dle.rae.es/lixiviado',
    },

    {
      referencia:
        'Tencio, C. (2017). Guía de elaboración y aplicación de bioinsumos para una producción agrícola sostenible. Ministerio de Agricultura y Ganadería de Costa Rica.',
      link: 'http://www.mag.go.cr/bibliotecavirtual/F08-10924.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
