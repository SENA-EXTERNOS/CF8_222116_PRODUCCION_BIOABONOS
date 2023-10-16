export default {
  global: {
    componenteFormativo: 'Producción de bioabonos',
    descripcionCurso:
      'Este componente contempla aspectos teóricos y técnicos sobre el bioabono, al diferenciar temáticas desde la selección de insumos y la preparación y el control de calidad, hasta la descripción de su comportamiento como fertilizante del suelo. Igualmente, se relacionan las propiedades físicas, químicas y biológicas que lo integran, destacando, así, las ventajas en su producción y su aporte al medio ambiente.',
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
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Medidas e inspección a insumos para la elaboración de bioabonos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Producción de bioabonos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Homogeneización del producto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Verificación de calidad del proceso de producción de bioabono',
        desarrolloContenidos: true,
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
      tema: 'Bioabonos',
      referencia:
        'Martínez, M., Pantoja, A. & Román, P. (2013). <i>Manual del compostaje del agricultor</i>. Organización de las Naciones Unidas para la alimentación y la agricultura.',
      tipo: 'Manual',
      descarga: '/downloads/I3388S.pdf',
    },
    {
      tema: 'Medidas e inspección a insumos para la elaboración de bioabonos',
      referencia:
        'Resolución 000698 de 2011. [Instituto Colombiano Agropecuario]. Por la cual  se establecen los requisitos para el registro de departamentos técnicos de ensayos de eficacia, productores e importadores de bioinsumos de uso agrícola y se dictan otras disposiciones. Febrero 4 de 2011.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/Normatividad/Normas-Ica/Resoluciones-Oficinas-Nacionales/2020/2020R68370/Resolucion-698-de-2011.pdf.aspx?lang=es-CO#:~:text=La%20presente%20Resoluci%C3%B3n%20se%20aplica,su%20comercializaci%C3%B3n%20o%20uso%20directo.',
    },
    {
      tema: 'Medidas e inspección a insumos para la elaboración de bioabonos',
      referencia:
        'Resolución 004754 de 2011. [Instituto Colombiano Agropecuario]. Por la cual se establecen los requisitos para la ampliación de uso de bioinsumos y plaguicidas químicos de uso agrícola en cultivos menores y se dictan otras disposiciones. Diciembre 7 de 2011.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/fce8ae88-f7df-4105-b71c-0c52ced85d0b/2011R4754.aspx#:~:text=Establecer%20los%20requisitos%20para%20la,uso%20agr%C3%ADcola%20en%20cultivos%20menores',
    },
    {
      tema: 'Homogeneización del producto',
      referencia:
        'Garro, J. (2016). <em>El suelo y los abonos orgánicos.</em> Instituto Nacional de Innovación y Transferencia en Tecnología Agropecuaria.',
      tipo: 'Libro',
      link: 'https://www.mag.go.cr/bibliotecavirtual/F04-10872.pdf',
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
        'Dussan, S., Miranda, D. y Villegas, D. (2016). Efecto de la deficiencia de N, P, K, Mg, Ca y B sobre la acumulación y distribución de la masa seca en plantas de guayaba. <i>Revista Colombiana de Ciencias Hortícolas<i>, 10, p. 40-52.',
      link: 'http://www.scielo.org.co/pdf/rcch/v10n1/v10n1a4.pdf',
    },

    {
      referencia:
        'Instituto Colombiano Agropecuario. (2004). <i>Resolución 00375. Por la cual se dictan las disposiciones sobre Registro y Control de los Bioinsumos y Extractos Vegetales de uso agrícola en Colombia</i>.',
      link:
        'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/resoluciones-derogadas/resolucion-375-de-2004.aspx',
    },

    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). <i>Resolución 068370. Por medio de la cual se establecen los requisitos para el registro de productor, productor por contrato, envasador, importador y departamentos técnicos de ensayos de eficacia agronómica de Bioinsumos</i>.',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Agricola/Servicios/Fertilizantes-y-Bio-insumos-Agricolas/Resolucion-068370-del-27-de-mayo-de-2020.pdf.aspx?lang=es-CO',
    },

    {
      referencia:
        'Ochoa, R. & Ochoa, V. (2019). <i>Aplicación de microorganismos y sus beneficios en suelos para la producción agrícola</i>. [Tesis de pregrado. Universidad Nacional Abierta y a Distancia]. Repositorio Institucional UNAD.',
      link:
        'https://repository.unad.edu.co/jspui/bitstream/10596/25714/1/%20%09rdochoam.pdf',
    },

    {
      referencia:
        'Tencio, C. (2017). <i>Guía de elaboración y aplicación de bioinsumos para una producción agrícola sostenible</i>. Ministerio de Agricultura y Ganadería de Costa Rica.',
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
