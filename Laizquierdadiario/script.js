document.addEventListener('DOMContentLoaded', function () {

  // ── DATOS CORRESPONSALES ──────────────────────────────────────────────────
  var corresponsales = {
    MM: {
      nombre: 'María Martínez', iniciales: 'MM', foto: '',
      bio: 'Soy empleada administrativa y participo en una biblioteca popular de mi ciudad. Me gusta acercar historias y experiencias que reflejan la realidad de mi comunidad.',
      instagram: 'https://www.instagram.com/mariamartinez/',
      twitter: 'https://www.twitter.com/mariamartinez/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'Vecinas organizan un espacio de lectura gratuita para niños en el barrio', fecha: 'Hace 3 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'La biblioteca popular cumple 10 años y lo celebra con una feria de libros', fecha: 'Hace 8 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Empleadas administrativas reclaman por mejoras en las condiciones laborales', fecha: 'Hace 15 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Cultura y comunidad: cómo los espacios públicos fortalecen el tejido barrial', fecha: 'Hace 22 días' }
      ]
    },
    LG: {
      nombre: 'Lorena González', iniciales: 'LG', foto: '',
      bio: 'Trabajo en educación y me interesa documentar las experiencias de estudiantes y docentes. Creo que las voces de quienes viven cada situación enriquecen el debate público.',
      instagram: 'https://www.instagram.com/lorenagonzalez/',
      twitter: 'https://www.twitter.com/lorenagonzalez/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'Docentes de escuelas secundarias reclaman por la falta de recursos pedagógicos', fecha: 'Hace 1 día' },
        { img: 'img/noticiaprincipal.png', titulo: 'Estudiantes organizan una jornada de debate sobre educación pública y financiamiento', fecha: 'Hace 5 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'El ausentismo escolar sube y los maestros buscan alternativas colectivas', fecha: 'Hace 12 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Una escuela rural transforma su patio en huerta comunitaria', fecha: 'Hace 18 días' }
      ]
    },
    LL: {
      nombre: 'Lautaro Lopez', iniciales: 'LL', foto: '',
      bio: 'Estudio Historia y participo en proyectos educativos y culturales. Me interesa contar lo que sucede en mi provincia desde una perspectiva cercana y comprometida.',
      instagram: 'https://www.instagram.com/lautarolopez/',
      twitter: 'https://www.twitter.com/lautarolopez/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'Jóvenes de la provincia recuperan la memoria histórica a través del teatro', fecha: 'Hace 2 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Un colectivo cultural lleva talleres gratuitos a los barrios periféricos', fecha: 'Hace 6 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Estudiantes de historia debaten sobre los 40 años de democracia en Argentina', fecha: 'Hace 11 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Festivales culturales como forma de resistencia y encuentro comunitario', fecha: 'Hace 20 días' }
      ]
    },
    LF: {
      nombre: 'Luz Fernandez', iniciales: 'LF', foto: '',
      bio: 'Trabajo como enfermera en un hospital público en Mendoza y me interesa visibilizar las problemáticas que atraviesan los trabajadores de la salud. Espero que contar lo que vivimos ayude a generar cambios.',
      instagram: 'https://www.instagram.com/luz.fernandez/',
      twitter: 'https://www.twitter.com/luz.fernandezz/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'Trabajadores de la salud denuncian el deterioro de las condiciones laborales en hospitales públicos', fecha: 'Hace 2 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Mujeres trabajadoras compartieron experiencias sobre empleo y cuidados en un encuentro local', fecha: 'Hace 7 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Organización y solidaridad: vecinos sostienen un comedor frente al aumento de la demanda', fecha: 'Hace 10 días' },
        { img: 'img/noticiaprincipal.png', titulo: 'Atención médica más cerca: un hospital móvil recorrerá distintos puntos de la ciudad', fecha: 'Hace 2 días' }
      ]
    },
    PL: {
      nombre: 'Pepe Lopez', iniciales: 'PL', foto: '',
      bio: 'Hola! Soy Pepe Lopez, vivo en La Plata y colaboro compartiendo noticias y testimonios sobre educación, cultura y vida comunitaria. Me apasiona dar visibilidad a las voces de mi querida ciudad.',
      instagram: 'https://www.instagram.com/18pepelopez/',
      twitter: 'https://www.twitter.com/18pepelopez/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'Junto a José Montes se presentó el libro "El pibe de los Astilleros" en Berisso', fecha: 'Hace 2 días' }
      ]
    },
    JP: {
      nombre: 'Juan Pérez', iniciales: 'JP', foto: '',
      bio: 'Soy Juan Pérez, vivo en Santa Fé y colaboro cubriendo temas vinculados a educación, trabajo y organización estudiantil. Me interesa visibilizar las problemáticas y experiencias de mi comunidad!',
      instagram: 'https://www.instagram.com/juanperez88/',
      twitter: 'https://www.twitter.com/juanperez88tw/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'En Santa Fé ante el cierre de la fábrica Verónica los trabajadores realizan una importante concentración', fecha: 'Hace 2 días' }
      ]
    }
  };

  // ── HELPERS ───────────────────────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }

  // ── MODAL "ENVIÁ TU NOTICIA" ──────────────────────────────────────────────
  var modalOverlay  = $('modalOverlay');
  var modalCerrar   = $('modalCerrar');
  var btnEnviar     = document.querySelector('.btn-enviar');

  document.querySelectorAll('.banner-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (modalOverlay) modalOverlay.classList.add('activo');
    });
  });

  if (modalCerrar) {
    modalCerrar.addEventListener('click', function () {
      modalOverlay.classList.remove('activo');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) modalOverlay.classList.remove('activo');
    });
  }

  if (btnEnviar) {
    btnEnviar.addEventListener('click', function () {
      // Mostrar mensaje de éxito
      var modal = modalOverlay.querySelector('.modal');
      modal.innerHTML =
        '<div class="exito-card">' +
          '<div class="exito-icono"><i class="fas fa-bullhorn"></i></div>' +
          '<h2 class="exito-titulo">¡Tu noticia fue enviada con éxito!</h2>' +
          '<p class="exito-desc">Gracias por compartir tu palabra con nosotros<br/>' +
          'Tu envío fue recibido correctamente y será revisado por nuestro equipo. Nos vamos a poner en contacto a través del correo electrónico que ingresaste</p>' +
          '<div class="exito-correo-box"><i class="fas fa-envelope"></i> Revisá tu casilla de correo</div>' +
          '<hr class="exito-divider"/>' +
          '<button id="exitoVolver" class="exito-volver">Volver al inicio</button>' +
        '</div>';
      $('exitoVolver').addEventListener('click', function () {
        modalOverlay.classList.remove('activo');
        location.reload();
      });
    });
  }

  // ── MENÚ LATERAL ─────────────────────────────────────────────────────────
  var menuLateral  = $('menuLateral');
  var menuOverlay  = $('menuOverlay');
  var menuCerrar   = $('menuCerrar');

  document.querySelectorAll('.menu-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      menuLateral.classList.add('activo');
      menuOverlay.classList.add('activo');
    });
  });

  function cerrarMenu() {
    menuLateral.classList.remove('activo');
    menuOverlay.classList.remove('activo');
  }
  if (menuCerrar)  menuCerrar.addEventListener('click', cerrarMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', cerrarMenu);

  // ── AUTENTICACIÓN ─────────────────────────────────────────────────────────
  var authOverlay      = $('authOverlay');
  var registroOverlay  = $('registroOverlay');
  var perfilOverlay    = $('perfilOverlay');
  var bienvenidaOverlay = $('bienvenidaOverlay');

  function cerrarAuth() {
    if (authOverlay)      authOverlay.classList.remove('activo');
    if (registroOverlay)  registroOverlay.classList.remove('activo');
    if (perfilOverlay)    perfilOverlay.classList.remove('activo');
    if (bienvenidaOverlay) bienvenidaOverlay.classList.remove('activo');
  }

  // Abrir login al hacer click en el botón de usuario
  document.querySelectorAll('.user-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sesion = JSON.parse(sessionStorage.getItem('sesionActiva'));
      if (sesion) {
        var el = $('perfilNombre');
        if (el) el.textContent = sesion.nombre;
        mostrarPanelSeguidos();
        perfilOverlay.classList.add('activo');
      } else if (window.innerWidth <= 700 && bienvenidaOverlay) {
        bienvenidaOverlay.classList.add('activo');
      } else {
        if (authOverlay) authOverlay.classList.add('activo');
      }
    });
  });

  if ($('authCerrar'))      $('authCerrar').addEventListener('click', cerrarAuth);
  if ($('registroCerrar'))  $('registroCerrar').addEventListener('click', cerrarAuth);
  if ($('perfilCerrar'))    $('perfilCerrar').addEventListener('click', cerrarAuth);
  if ($('bienvenidaCerrar')) $('bienvenidaCerrar').addEventListener('click', cerrarAuth);

  // Desde bienvenida, ir a login o registro
  if ($('bienvenidaIniciarSesion')) {
    $('bienvenidaIniciarSesion').addEventListener('click', function () {
      bienvenidaOverlay.classList.remove('activo');
      authOverlay.classList.add('activo');
    });
  }
  if ($('bienvenidaRegistrarme')) {
    $('bienvenidaRegistrarme').addEventListener('click', function () {
      bienvenidaOverlay.classList.remove('activo');
      registroOverlay.classList.add('activo');
    });
  }

  // Ir a registro
  if ($('irARegistro')) {
    $('irARegistro').addEventListener('click', function () {
      authOverlay.classList.remove('activo');
      registroOverlay.classList.add('activo');
    });
  }

  // Ir a login desde registro
  if ($('irALogin')) {
    $('irALogin').addEventListener('click', function () {
      registroOverlay.classList.remove('activo');
      authOverlay.classList.add('activo');
    });
  }

  // LOGIN
  if ($('btnLogin')) {
    $('btnLogin').addEventListener('click', function () {
      var email    = $('loginEmail').value.trim();
      var password = $('loginPassword').value.trim();
      var errorEl  = $('loginError');

      if (!email || !password) {
        errorEl.textContent = 'Por favor completá todos los campos.';
        return;
      }

      // Buscar usuario registrado
      var usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      var usuario  = usuarios.find(function (u) { return u.email === email && u.password === password; });

      if (!usuario) {
        errorEl.textContent = 'Email o contraseña incorrectos.';
        return;
      }

      errorEl.textContent = '';
      sessionStorage.setItem('sesionActiva', JSON.stringify({ nombre: usuario.nombre, email: usuario.email }));
      authOverlay.classList.remove('activo');
      var el = $('perfilNombre');
      if (el) el.textContent = usuario.nombre;
      mostrarPanelSeguidos();
      perfilOverlay.classList.add('activo');
    });
  }

  // REGISTRO
  if ($('btnRegistro')) {
    $('btnRegistro').addEventListener('click', function () {
      var nombre   = $('regNombre').value.trim();
      var email    = $('regEmail').value.trim();
      var password = $('regPassword').value.trim();
      var errorEl  = $('registroError');

      if (!nombre || !email || !password) {
        errorEl.textContent = 'Por favor completá todos los campos.';
        return;
      }

      var usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      if (usuarios.find(function (u) { return u.email === email; })) {
        errorEl.textContent = 'Ya existe una cuenta con ese email.';
        return;
      }

      usuarios.push({ nombre: nombre, email: email, password: password });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      errorEl.textContent = '';
      sessionStorage.setItem('sesionActiva', JSON.stringify({ nombre: nombre, email: email }));
      registroOverlay.classList.remove('activo');
      var el = $('perfilNombre');
      if (el) el.textContent = nombre;
      mostrarPanelSeguidos();
      perfilOverlay.classList.add('activo');
    });
  }

  // CERRAR SESIÓN
  if ($('btnCerrarSesion')) {
    $('btnCerrarSesion').addEventListener('click', function () {
      sessionStorage.removeItem('sesionActiva');
      perfilOverlay.classList.remove('activo');
    });
  }

  // Logo dentro del perfil vuelve al inicio
  if ($('logoVolverInicio')) {
    $('logoVolverInicio').addEventListener('click', function (e) {
      e.preventDefault();
      perfilOverlay.classList.remove('activo');
    });
  }

  // ── TABS DEL PERFIL ───────────────────────────────────────────────────────
  function mostrarPanelSeguidos() {
    var panelSeg  = $('panelSeguidos');
    var panelCor  = $('panelCorresponsales');
    var tabSeg    = $('tabSeguidos');
    var tabCor    = $('tabCorresponsales');
    if (panelSeg) panelSeg.classList.remove('oculto');
    if (panelCor) panelCor.classList.add('oculto');
    if (tabSeg)   tabSeg.classList.add('activo-tab');
    if (tabCor)   tabCor.classList.remove('activo-tab');
    actualizarContadorSeguidos();
  }

  if ($('tabSeguidos')) {
    $('tabSeguidos').addEventListener('click', mostrarPanelSeguidos);
  }

  if ($('tabCorresponsales')) {
    $('tabCorresponsales').addEventListener('click', function () {
      var panelSeg = $('panelSeguidos');
      var panelCor = $('panelCorresponsales');
      if (panelSeg) panelSeg.classList.add('oculto');
      if (panelCor) panelCor.classList.remove('oculto');
      $('tabSeguidos').classList.remove('activo-tab');
      $('tabCorresponsales').classList.add('activo-tab');
    });
  }

  function actualizarContadorSeguidos() {
    var seguidos = JSON.parse(localStorage.getItem('seguidos') || '[]');
    var el = $('contadorSeguidos');
    if (el) el.textContent = seguidos.length;

    // Renderizar la lista de seguidos en el panel
    var panelSeg = $('panelSeguidos');
    if (!panelSeg) return;

    var contador = panelSeg.querySelector('.perfil-contador');
    // Limpiar artículos previos
    var prev = panelSeg.querySelectorAll('.corresponsal-item-seguido');
    prev.forEach(function (el) { el.remove(); });

    seguidos.forEach(function (id) {
      var c = corresponsales[id];
      if (!c) return;
      var div = document.createElement('div');
      div.className = 'corresponsal-item corresponsal-item-seguido';
      div.innerHTML =
        '<div class="corresponsal-avatar">' +
          '<div class="corresponsal-iniciales">' + c.iniciales + '</div>' +
          '<span class="corresponsal-badge"><i class="fas fa-bullhorn" style="color:white;font-size:9px"></i></span>' +
        '</div>' +
        '<div class="corresponsal-info">' +
          '<h4>' + c.nombre + '</h4>' +
          '<p>' + c.bio + '</p>' +
        '</div>';
      div.style.cursor = 'pointer';
      div.addEventListener('click', function () {
        perfilOverlay.classList.remove('activo');
        abrirPerfilCorresponsal(id);
      });
      panelSeg.appendChild(div);
    });
  }

  // ── PERFIL DEL CORRESPONSAL ───────────────────────────────────────────────
  var perfilCorresponsalOverlay = $('perfilCorresponsalOverlay');

  // Crear el overlay dinámicamente si no existe en el HTML
  if (!perfilCorresponsalOverlay) {
    perfilCorresponsalOverlay = document.createElement('div');
    perfilCorresponsalOverlay.id = 'perfilCorresponsalOverlay';
    perfilCorresponsalOverlay.className = 'auth-overlay';
    document.body.appendChild(perfilCorresponsalOverlay);
  }

  function abrirPerfilCorresponsal(id) {
    var c = corresponsales[id];
    if (!c) return;

    var seguidos = JSON.parse(localStorage.getItem('seguidos') || '[]');
    var estaSiguiendo = seguidos.indexOf(id) !== -1;
    var btnTexto = estaSiguiendo ? 'Dejar de seguir' : 'Seguir coberturas';

    var articulosHTML = c.articulos.map(function (a) {
      return '<div class="corresponsal-noticia-item">' +
        '<img src="' + a.img + '" alt=""/>' +
        '<p class="corresponsal-noticia-titulo">' + a.titulo + '</p>' +
        '<span class="noticia-meta">' + a.fecha + '</span>' +
        '<a href="#" class="cp-leer-mas">Leer más</a>' +
      '</div>';
    }).join('');

    perfilCorresponsalOverlay.innerHTML =
      '<div class="perfil-corresponsal-contenido">' +

        '<!-- Header -->' +
        '<header class="header">' +
          '<div class="header-main">' +
            '<div class="header-left">' +
              '<button id="cpVolverBtn" class="menu-btn" style="margin-right:8px">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
              '</button>' +
              '<img src="img/laizquierdalogo.png" alt="La Izquierda Diario" class="logo-img"/>' +
            '</div>' +
          '</div>' +
        '</header>' +

        '<!-- Banda de color -->' +
        '<div class="cp-banda"></div>' +

        '<!-- Datos del corresponsal -->' +
        '<div class="cp-perfil-header">' +
          '<div class="corresponsal-avatar cp-avatar-grande">' +
            '<div class="corresponsal-iniciales">' + c.iniciales + '</div>' +
            '<span class="corresponsal-badge"><i class="fas fa-bullhorn" style="color:white;font-size:11px"></i></span>' +
          '</div>' +
          '<div class="cp-info-fila">' +
            '<h2 class="cp-nombre">' + c.nombre + '</h2>' +
            '<button id="btnSeguirCorresponsal" class="btn-seguir' + (estaSiguiendo ? ' siguiendo' : '') + '" data-id="' + id + '">' + btnTexto + '</button>' +
          '</div>' +
          '<p class="cp-bio">' + c.bio + '</p>' +
          '<div class="cp-redes">' +
            '<a href="' + c.instagram + '" target="_blank"><i class="fab fa-instagram"></i>' + c.instagram + '</a>' +
            '<a href="' + c.twitter + '" target="_blank"><i class="fab fa-twitter"></i>' + c.twitter + '</a>' +
          '</div>' +
        '</div>' +

        '<!-- Artículos -->' +
        '<div class="cp-articulos">' +
          articulosHTML +
        '</div>' +

        '<div class="cp-mostrar-mas-wrap">' +
          '<button class="btn-mostrar-mas" id="btnMostrarMasHistorias">Mostrar más historias</button>' +
        '</div>' +

      '</div>';

    perfilCorresponsalOverlay.classList.add('activo');

    // Botón volver
    $('cpVolverBtn').addEventListener('click', function () {
      perfilCorresponsalOverlay.classList.remove('activo');
    });

    // Botón seguir / dejar de seguir
    $('btnSeguirCorresponsal').addEventListener('click', function () {
      var sesion = JSON.parse(sessionStorage.getItem('sesionActiva'));
      if (!sesion) {
        perfilCorresponsalOverlay.classList.remove('activo');
        if (window.innerWidth <= 700 && bienvenidaOverlay) {
          bienvenidaOverlay.classList.add('activo');
        } else if (authOverlay) {
          authOverlay.classList.add('activo');
        }
        return;
      }
      var seguidos = JSON.parse(localStorage.getItem('seguidos') || '[]');
      var idx = seguidos.indexOf(id);
      if (idx === -1) {
        seguidos.push(id);
        this.textContent = 'Dejar de seguir';
        this.classList.add('siguiendo');
      } else {
        seguidos.splice(idx, 1);
        this.textContent = 'Seguir coberturas';
        this.classList.remove('siguiendo');
      }
      localStorage.setItem('seguidos', JSON.stringify(seguidos));
    });

    // Botón mostrar más historias (placeholder, sin paginación real por ahora)
    var btnMostrarMas = $('btnMostrarMasHistorias');
    if (btnMostrarMas) {
      btnMostrarMas.addEventListener('click', function () {
        this.textContent = 'No hay más historias';
        this.disabled = true;
      });
    }
  }

  // ── NOTICIA COMPLETA: Milei endeudamiento U$S 5.000M ────────────────────
  var noticiaCompletaOverlay = $('noticiaCompletaOverlay');
  if (!noticiaCompletaOverlay) {
    noticiaCompletaOverlay = document.createElement('div');
    noticiaCompletaOverlay.id = 'noticiaCompletaOverlay';
    document.body.appendChild(noticiaCompletaOverlay);
  }

  function abrirNoticiaDeudaMilei() {
    noticiaCompletaOverlay.innerHTML =
      '<header class="header">' +
        '<div class="header-main">' +
          '<div class="header-left">' +
            '<button id="noticiaVolverInicio" class="noticia-completa-volver" style="margin-right:8px">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
            '</button>' +
            '<img src="img/laizquierdalogo.png" alt="La Izquierda Diario" class="logo-img"/>' +
          '</div>' +
        '</div>' +
      '</header>' +

      '<div class="noticia-completa-grid">' +
        '<img class="noticia-completa-img" src="img/deuda.png" alt="Noticia"/>' +
        '<div class="noticia-completa-texto">' +
          '<h1>Milei autorizó a endeudarse por U$S 5.000 millones con jurisdicción extranjera antes del partido de Argentina</h1>' +
          '<p class="noticia-completa-desc">A través de su publicación en el Boletín Oficial este lunes, el gobierno oficializó la toma de deuda con organismos internacionales que ante cualquier litigio judicial se resolverán en tribunales de Nueva York. Milei y Caputo toman deuda para pagar deuda, retroalimentando un ciclo de atraso y dependencia, mientras mantienen un ajuste sobre las mayorías.</p>' +
          '<div class="noticia-completa-meta">' +
            '<span class="noticia-completa-fecha">22 de Junio de 2026</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div id="noticiaCuerpo" class="noticia-completa-cuerpo">' +
        '<p>Este lunes, a pocas horas del comienzo del partido de la selección argentina, el gobierno oficializó a través del decreto 478/2026 la habilitación para endeudarse con organismos internacionales por un monto de hasta u$s 5.000 millones. Esta medida -que lleva la firma de Adorni, Caputo y Milei- se enmarca en un plan de gobierno para conseguir financiamiento en dólares que se destinarán al pago de los vencimientos con los bonistas privados en julio, que asciende a US$4.400 millones. Caputo ya venía adelantando una estrategia de endeudamiento que incluye deuda con organismos multilaterales, bonos en dólares en el "mercado" local, REPOS y compra de reservas.</p>' +
        '<p>Esta entrega de soberanía al dejar en manos de tribunales extranjeros la resolución sobre eventualidades no sorprende de este gobierno ultra derechista. Se trata de una cláusula que comenzó a implementarse en la última dictadura genocida y que no ha sido cuestionada por ninguno de los gobiernos posteriores.</p>' +

        '<h3 class="noticia-cuerpo-subtitulo">Qué dice el decreto</h3>' +
        '<p>Según establece la norma, los acuerdos podrán incluir cláusulas de prórroga de jurisdicción a favor de tribunales de Nueva York y renuncia a oponer inmunidad de jurisdicción ante eventuales reclamos vinculados con los préstamos, es decir, se acepta los tribunales neoyorquinos y se renuncia al derecho internacional de soberanía a ser juzgado en otro país.</p>' +
        '<p>Sin embargo, Argentina no renuncia a la inmunidad de ejecución sobre bienes considerados estratégicos o protegidos por la legislación vigente, entre ellos las reservas y cuentas del Banco Central de la República Argentina (BCRA), los bienes de dominio público, los activos destinados a la prestación de servicios públicos esenciales, entre otros. Las Secretarías de Hacienda y Finanzas, podrán avanzar en la contratación de préstamos en dólares con "entidades financieras internacionales de reconocida trayectoria". Los mismos contarán con la garantía parcial de organismos multilaterales de crédito del Banco Mundial y el BID que se conocieron la semana pasada por unos US$3.200 millones. El Gobierno espera completar con otro aval por parte de la CAF, para obtener tasas menores que directamente desde Wall Street.</p>' +
        '<p>Según trascendidos que brindarían los multilaterales del BM, el plazo del crédito es de seis años, con un período de gracia de tres años.</p>' +

        '<img class="tweet-embed-img" src="img/decreto.png" alt="Tweet de Nicolás del Caño sobre el decreto"/>' +

        '<h3 class="noticia-cuerpo-subtitulo">Un gobierno que avanza con el endeudamiento externo como un pilar de este modelo</h3>' +
        '<p>La semana pasada se trató en la comisión de Presupuesto de la Cámara de Diputados un proyecto de pago a fondos buitres. El mismo que ya contaba con media sanción en Senadores, busca destinar millones de dólares a estos fondos usureros. Se trata de especuladores que compraron bonos al default de remate por la legislación vigente, entre ellos las reservas y obtener ganancias extraordinarias.</p>' +
        '<p>Según la consultora 1816, el Gobierno enfrenta vencimientos hasta 2027 por 30 mil millones de dólares. Hasta ahora y anuncios por venir habría conseguido USD 13.100 millones y le restarían conseguir USD 17.600 millones para cubrir los vencimientos hasta diciembre de 2027.</p>' +
        '<p>El plan consistiría en conseguir el financiamiento, patear la deuda para adelante con intereses por medio, y una renovación completa de los vencimientos en pesos.</p>' +

        '<table class="noticia-cuerpo-tabla">' +
          '<caption>Vencimientos anuales en USD de Tesoro y BCRA con sector privado y FMI (USD miles de millones)</caption>' +
          '<thead><tr><th>Cifras incluyendo capital e intereses</th><th>Resto 2026 (desde junio)</th><th>2027</th><th>TOTAL</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Glob y Bonares manos privadas</td><td>3,9</td><td>10,4</td><td>14,3</td></tr>' +
            '<tr><td>FMI (neto de desembolsos)</td><td>2,0</td><td>5,9</td><td>7,9</td></tr>' +
            '<tr><td>Club de Paris (CP)</td><td>0,2</td><td>0,3</td><td>0,5</td></tr>' +
            '<tr><td>Bopreales*</td><td>0,0</td><td>1,5</td><td>1,5</td></tr>' +
            '<tr><td>Repos BCRA</td><td>1,4</td><td>5,2</td><td>6,5</td></tr>' +
            '<tr><td>TOTAL</td><td>7,4</td><td>23,3</td><td>30,7</td></tr>' +
          '</tbody>' +
        '</table>' +

        '<p>La deuda ilegítima que se arrastra desde la dictadura, acrecentada últimamente con Macri y Milei después recurriendo al FMI, implica imponer planes de ajuste a las mayorías. También privatizando y saqueando los bienes comunes naturales del país.</p>' +
        '<p>Para cambiar el destino de decadencia infinita, el eterno retorno al sometimiento al Fondo y a los lobos de Wall Street es necesario tomar una decisión soberana de rechazo al pago de la deuda basada en la movilización popular. Liberarse de la dependencia del capital financiero internacional es fundamental para reorganizar la economía para que todos los recursos se orienten al desarrollo y a la atención de las necesidades sociales más urgentes.</p>' +
      '</div>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });
  }

  var noticiaDeudaMilei = $('noticiaDeudaMilei');
  if (noticiaDeudaMilei) {
    noticiaDeudaMilei.addEventListener('click', function () {
      abrirNoticiaDeudaMilei();
    });
  }

  // ── NOTICIA COMPLETA: Larga fila por trabajo de temporada ───────────────
  function abrirNoticiaFilaTrabajo() {
    noticiaCompletaOverlay.innerHTML =
      '<header class="header">' +
        '<div class="header-main">' +
          '<div class="header-left">' +
            '<button id="noticiaVolverInicio" class="noticia-completa-volver" style="margin-right:8px">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
            '</button>' +
            '<img src="img/laizquierdalogo.png" alt="La Izquierda Diario" class="logo-img"/>' +
          '</div>' +
        '</div>' +
      '</header>' +

      '<div class="noticia-completa-grid">' +
        '<img class="noticia-completa-img" src="img/juventud3.png" alt="Noticia"/>' +
        '<div class="noticia-completa-texto">' +
          '<h1>Larga fila por un trabajo de temporada ¿Quiénes dicen que los jóvenes no quieren trabajar?</h1>' +
          '<p class="noticia-completa-desc">En el día de ayer se viralizó la larga fila de postulantes para un trabajo de temporada en una reconocida librería de la capital. Un síntoma de la falta de empleo formal y de la gran cantidad de desocupados. Se cae la mentira "libertaria" de que los jóvenes no quieren trabajar.</p>' +
          '<div class="noticia-completa-meta">' +
            '<span class="noticia-completa-fecha">14 de Enero de 2026</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div id="noticiaCuerpo" class="noticia-completa-cuerpo">' +
        '<p>La larga fila de jóvenes en las puertas de la reconocida librería San Pablo, no es una casualidad. La misma había publicado esa fecha, como la única abierta la recepción de currículums, para mayores de 25 años con experiencia y para una labor por temporada, de máximo 3 meses. Tal como lo atestiguó una usuaria de tiktok</p>' +
        '<p><a href="https://www.tiktok.com/@luz.bustillo/video/7594695651003354386?is_from_webapp=1&sender_device=pc" target="_blank">https://www.tiktok.com/@luz.bustillo/video/7594695651003354386?is_from_webapp=1&sender_device=pc</a></p>' +
        '<p>En la provincia de Jujuy, según los datos del último informe del Mercado de Trabajo publicado por el Instituto Nacional de Estadísticas y Censos (Indec), en el aglomerado Jujuy-Palpalá, la tasa de desocupación se ubicó en 3,5% durante el segundo trimestre del año. En tanto, el empleo alcanzó al 47,5% de la población.</p>' +
        '<p>El informe también señala que 33 mil personas ocupadas demandan empleo en busca de mejores condiciones laborales, y que 12 mil trabajadores se encuentran subocupados. A su vez, hubo un incremento del cuentapropismo y la informalidad, evidenciado en la proliferación de ferias y vendedores ambulantes.</p>' +
        '<p>Así, en momentos en que, Javier Milei y los gobernadores impulsan su regresiva Reforma Laboral a pedido del FMI y los empresarios; estos paisajes de "ejércitos de reserva" de desocupados a la espera de una oportunidad laboral, desmienten a los libertarios sobre que los jóvenes o los desocupados no quieran trabajar.</p>' +
        '<p>Muchos, trabajan y aceptan trabajos, aún estando sometidos a condiciones informales y sin derechos, algo que el gobierno nacional quiere imponer a todos los trabajadores, una norma y sentido común de vivir resignados (y a las futuras generaciones) ante una crisis económica, salarios bajos y sin derechos. Una firme intención de convertirnos en esclavos, siendo la única salida, enfrentar y derrotar la reforma en las calles por un futuro con derechos laborales para todxs.</p>' +
      '</div>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });
  }

  var noticiaFilaTrabajo = $('noticiaFilaTrabajo');
  if (noticiaFilaTrabajo) {
    noticiaFilaTrabajo.addEventListener('click', function () {
      abrirNoticiaFilaTrabajo();
    });
  }

  // ── ASIGNAR CLICKS A LOS BADGES DE CORRESPONSALES ────────────────────────
  document.querySelectorAll('.cp-clickeable').forEach(function (badge) {
    badge.addEventListener('click', function (e) {
      e.preventDefault();
      var id = this.getAttribute('data-id');
      if (id && corresponsales[id]) abrirPerfilCorresponsal(id);
    });
  });

});