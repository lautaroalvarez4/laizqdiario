document.addEventListener('DOMContentLoaded', function () {

  // ── DATOS CORRESPONSALES ──────────────────────────────────────────────────
  var corresponsales = {
    MM: {
      nombre: 'María Martínez', iniciales: 'MM', foto: '', ciudad: 'Ciudad de Buenos Aires',
      bio: 'Soy empleada administrativa y participo en una biblioteca popular de mi ciudad. Me gusta acercar historias y experiencias que reflejan la realidad de mi comunidad.',
      instagram: 'https://www.instagram.com/mariamartinez/',
      twitter: 'https://www.twitter.com/mariamartinez/',
      articulos: [
        { img: 'img/cultura2.png', titulo: 'Vecinas organizan un espacio de lectura gratuita para niños en el barrio', fecha: 'Hace 3 días' },
        { img: 'img/cultura1.png', titulo: 'La biblioteca popular cumple 10 años y lo celebra con una feria de libros', fecha: 'Hace 8 días' },
        { img: 'img/familia.png', titulo: 'Empleadas administrativas reclaman por mejoras en las condiciones laborales', fecha: 'Hace 15 días' },
        { img: 'img/digi.png', titulo: 'Cultura y comunidad: cómo los espacios públicos fortalecen el tejido barrial', fecha: 'Hace 22 días' }
      ]
    },
    LG: {
      nombre: 'Lorena González', iniciales: 'LG', foto: '', ciudad: 'Rosario',
      bio: 'Trabajo en educación y me interesa documentar las experiencias de estudiantes y docentes. Creo que las voces de quienes viven cada situación enriquecen el debate público.',
      instagram: 'https://www.instagram.com/lorenagonzalez/',
      twitter: 'https://www.twitter.com/lorenagonzalez/',
      articulos: [
        { img: 'img/noticia2cor.png', titulo: 'Docentes de escuelas secundarias reclaman por la falta de recursos pedagógicos', fecha: 'Hace 1 día' },
        { img: 'img/juventud1.png', titulo: 'Estudiantes organizan una jornada de debate sobre educación pública y financiamiento', fecha: 'Hace 5 días' },
        { img: 'img/juventud3.png', titulo: 'El ausentismo escolar sube y los maestros buscan alternativas colectivas', fecha: 'Hace 12 días' },
        { img: 'img/juventud4.png', titulo: 'Una escuela rural transforma su patio en huerta comunitaria', fecha: 'Hace 18 días' }
      ]
    },
    LL: {
      nombre: 'Lautaro Lopez', iniciales: 'LL', foto: '', ciudad: 'Córdoba',
      bio: 'Estudio Historia y participo en proyectos educativos y culturales. Me interesa contar lo que sucede en mi provincia desde una perspectiva cercana y comprometida.',
      instagram: 'https://www.instagram.com/lautarolopez/',
      twitter: 'https://www.twitter.com/lautarolopez/',
      articulos: [
        { img: 'img/cultura4.png', titulo: 'Jóvenes de la provincia recuperan la memoria histórica a través del teatro', fecha: 'Hace 2 días' },
        { img: 'img/cultura3.png', titulo: 'Un colectivo cultural lleva talleres gratuitos a los barrios periféricos', fecha: 'Hace 6 días' },
        { img: 'img/mundial.png', titulo: 'Estudiantes de historia debaten sobre los 40 años de democracia en Argentina', fecha: 'Hace 11 días' },
        { img: 'img/19j.png', titulo: 'Festivales culturales como forma de resistencia y encuentro comunitario', fecha: 'Hace 20 días' }
      ]
    },
    LF: {
      nombre: 'Luz Fernandez', iniciales: 'LF', foto: '', ciudad: 'Mendoza',
      bio: 'Trabajo como enfermera en un hospital público en Mendoza y me interesa visibilizar las problemáticas que atraviesan los trabajadores de la salud. Espero que contar lo que vivimos ayude a generar cambios.',
      instagram: 'https://www.instagram.com/luz.fernandez/',
      twitter: 'https://www.twitter.com/luz.fernandezz/',
      articulos: [
        { img: 'img/noticia3cor.png', titulo: 'Trabajadores de la salud denuncian el deterioro de las condiciones laborales en hospitales públicos', fecha: 'Hace 2 días' },
        { img: 'img/trabajadores.png', titulo: 'Mujeres trabajadoras compartieron experiencias sobre empleo y cuidados en un encuentro local', fecha: 'Hace 7 días' },
        { img: 'img/genero1.png', titulo: 'Organización y solidaridad: vecinos sostienen un comedor frente al aumento de la demanda', fecha: 'Hace 10 días' },
        { img: 'img/genero3.png', titulo: 'Atención médica más cerca: un hospital móvil recorrerá distintos puntos de la ciudad', fecha: 'Hace 2 días' }
      ]
    },
    PL: {
      nombre: 'Pepe Lopez', iniciales: 'PL', foto: '', ciudad: 'La Plata',
      bio: 'Hola! Soy Pepe Lopez, vivo en La Plata y colaboro compartiendo noticias y testimonios sobre educación, cultura y vida comunitaria. Me apasiona dar visibilidad a las voces de mi querida ciudad.',
      instagram: 'https://www.instagram.com/18pepelopez/',
      twitter: 'https://www.twitter.com/18pepelopez/',
      articulos: [
        { img: 'img/noticia1cor.png', titulo: 'Junto a José Montes se presentó el libro "El pibe de los Astilleros" en Berisso', fecha: 'Hace 2 días' }
      ]
    },
    JP: {
      nombre: 'Juan Pérez', iniciales: 'JP', foto: '', ciudad: 'Santa Fe',
      bio: 'Soy Juan Pérez, vivo en Santa Fé y colaboro cubriendo temas vinculados a educación, trabajo y organización estudiantil. Me interesa visibilizar las problemáticas y experiencias de mi comunidad!',
      instagram: 'https://www.instagram.com/juanperez88/',
      twitter: 'https://www.twitter.com/juanperez88tw/',
      articulos: [
        { img: 'img/noticiaprincipal.png', titulo: 'En Santa Fé ante el cierre de la fábrica Verónica los trabajadores realizan una importante concentración', fecha: 'Hace 2 días' }
      ]
    },
    IB: {
      nombre: 'Ignacio Blanco', iniciales: 'IB', foto: '', ciudad: 'La Plata',
      bio: 'Mi nombre es Ignacio, estudio Historia en la Universidad Nacional de La Plata y participo en proyectos educativos y culturales. Me interesa contar lo que sucede en mi provincia desde una perspectiva cercana y comprometida.',
      instagram: 'https://www.instagram.com/ignacioblanco/',
      twitter: 'https://www.twitter.com/ignacioblanco/',
      articulos: [
        { img: 'img/noticia4cor.png', titulo: 'Docentes de Berisso impulsan una jornada solidaria para sostener los comedores escolares', fecha: 'Hace 2 días' }
      ]
    }
  };

  // ── HELPERS ───────────────────────────────────────────────────────────────
  function $(id) { return document.getElementById(id); }

  // ── NOTIFICACIÓN DE COBERTURA EN EL ÍCONO DE USUARIO ────────────────────
  function actualizarNotifDot() {
    var notifDot = $('notifDot');
    if (!notifDot) return;
    var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');
    if (sesion && localStorage.getItem('notifCobertura_' + sesion.email) === '1') {
      notifDot.classList.add('activo');
    } else {
      notifDot.classList.remove('activo');
    }
  }

  function limpiarNotifDot() {
    var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');
    if (sesion) localStorage.removeItem('notifCobertura_' + sesion.email);
    var notifDot = $('notifDot');
    if (notifDot) notifDot.classList.remove('activo');
  }

  actualizarNotifDot();

  // ── MODAL "ENVIÁ TU NOTICIA" ──────────────────────────────────────────────
  var modalOverlay  = $('modalOverlay');
  var modalCerrar   = $('modalCerrar');
  var btnEnviar     = document.querySelector('.btn-enviar');

  document.addEventListener('click', function (e) {
    var link = e.target.closest('.banner-link');
    if (link) {
      e.preventDefault();
      if (modalOverlay) modalOverlay.classList.add('activo');
    }
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
      var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');

      // Si no hay sesión iniciada, pedimos login antes de poder enviar la noticia
      if (!sesion) {
        modalOverlay.classList.remove('activo');
        if (window.innerWidth <= 700 && $('bienvenidaOverlay')) {
          $('bienvenidaOverlay').classList.add('activo');
        } else if ($('authOverlay')) {
          $('authOverlay').classList.add('activo');
        }
        return;
      }

      var categoriaEl = $('noticiaCategoria');
      var mensajeEl   = $('noticiaMensaje');
      var tituloEl    = $('noticiaTitulo');
      var ciudadEl    = $('noticiaCiudad');
      var categoria   = categoriaEl && categoriaEl.value.trim() ? categoriaEl.value.trim() : 'Cobertura barrial';
      var mensaje     = mensajeEl ? mensajeEl.value.trim() : '';
      var titulo      = tituloEl && tituloEl.value.trim() ? tituloEl.value.trim() : categoria;
      var ciudad      = ciudadEl && ciudadEl.value.trim() ? ciudadEl.value.trim() : '';

      if (!mensaje) {
        mensajeEl.focus();
        return;
      }

      // Guardar la cobertura asociada al email del usuario logueado
      var fecha = new Date().toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' });
      var coberturas = JSON.parse(localStorage.getItem('coberturas') || '[]');
      coberturas.push({
        email: sesion.email,
        nombre: sesion.nombre,
        titulo: titulo,
        categoria: categoria,
        ciudad: ciudad,
        mensaje: mensaje,
        fecha: fecha,
        estado: 'Aprobada'
      });
      localStorage.setItem('coberturas', JSON.stringify(coberturas));
      localStorage.setItem('notifCobertura_' + sesion.email, '1');

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

  document.querySelectorAll('.menu-lista a').forEach(function (link) {
    link.addEventListener('click', cerrarMenu);
  });

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
        mostrarPanelMisCoberturas();
        perfilOverlay.classList.add('activo');
        limpiarNotifDot();
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
      mostrarPanelMisCoberturas();
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
      mostrarPanelMisCoberturas();
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
  function mostrarPanel(nombre) {
    var paneles = { coberturas: $('panelMisCoberturas'), seguidos: $('panelSeguidos'), corresponsales: $('panelCorresponsales') };
    var tabs    = { coberturas: $('tabMisCoberturas'), seguidos: $('tabSeguidos'), corresponsales: $('tabCorresponsales') };

    Object.keys(paneles).forEach(function (key) {
      if (paneles[key]) paneles[key].classList.toggle('oculto', key !== nombre);
      if (tabs[key])    tabs[key].classList.toggle('activo-tab', key === nombre);
    });

    if (nombre === 'seguidos')     actualizarContadorSeguidos();
    if (nombre === 'coberturas')   renderizarMisCoberturas();
  }

  function mostrarPanelSeguidos()   { mostrarPanel('seguidos'); }
  function mostrarPanelMisCoberturas() { mostrarPanel('coberturas'); }

  if ($('tabMisCoberturas'))  $('tabMisCoberturas').addEventListener('click', mostrarPanelMisCoberturas);
  if ($('tabSeguidos'))       $('tabSeguidos').addEventListener('click', mostrarPanelSeguidos);
  if ($('tabCorresponsales')) $('tabCorresponsales').addEventListener('click', function () { mostrarPanel('corresponsales'); });

  // ── MIS COBERTURAS ────────────────────────────────────────────────────────
  function renderizarMisCoberturas() {
    var lista  = $('coberturasLista');
    var vacio  = $('coberturasVacio');
    if (!lista) return;

    var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');
    var todas  = JSON.parse(localStorage.getItem('coberturas') || '[]');
    var mias   = sesion ? todas.filter(function (c) { return c.email === sesion.email; }) : [];

    lista.innerHTML = '';

    if (mias.length === 0) {
      if (vacio) vacio.classList.remove('oculto');
      return;
    }
    if (vacio) vacio.classList.add('oculto');

    mias.slice().reverse().forEach(function (c) {
      var item = document.createElement('div');
      item.className = 'cobertura-item';
      item.innerHTML =
        '<div class="cobertura-info">' +
          '<div class="cobertura-icono"><i class="fas fa-bullhorn"></i></div>' +
          '<div class="cobertura-texto">' +
            '<span class="cobertura-categoria">' + c.categoria + '</span>' +
            '<span class="cobertura-fecha">Enviada el ' + c.fecha + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="cobertura-estado"><span class="cobertura-punto"></span>Aprobada</div>' +
        '<button class="btn-ver-cobertura">Ver mi cobertura</button>';
      item.querySelector('.btn-ver-cobertura').addEventListener('click', function () {
        abrirMiCobertura(c);
      });
      lista.appendChild(item);
    });
  }

  // ── DETALLE DE MI COBERTURA ───────────────────────────────────────────────
  var miCoberturaOverlay = $('miCoberturaOverlay');
  if (!miCoberturaOverlay) {
    miCoberturaOverlay = document.createElement('div');
    miCoberturaOverlay.id = 'miCoberturaOverlay';
    document.body.appendChild(miCoberturaOverlay);
  }

  // Arma las 3 tarjetas de "Descubrí más coberturas de corresponsales"
  function construirDescubrirMasHTML(excludeId) {
    var ids = Object.keys(corresponsales).filter(function (k) { return k !== excludeId; });
    ids = ids.sort(function () { return 0.5 - Math.random(); }).slice(0, 3);

    return ids.map(function (id) {
      var cor = corresponsales[id];
      var art = cor.articulos[0];
      return (
        '<div class="descubrir-card cp-clickeable" data-id="' + id + '">' +
          '<img src="' + art.img + '" alt=""/>' +
          '<div class="descubrir-card-texto">' +
            '<span class="descubrir-etiqueta">Cobertura de corresponsal</span>' +
            '<h4>' + art.titulo + '</h4>' +
            '<span class="descubrir-ciudad">Desde ' + (cor.ciudad || '') + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  function abrirMiCobertura(c) {
    var titulo = c.titulo || 'Cobertura sin título';
    var nombre = c.nombre || 'Corresponsal';
    var iniciales = nombre.split(' ').map(function (p) { return p[0]; }).join('').substring(0, 2).toUpperCase();

    miCoberturaOverlay.innerHTML =
      '<header class="header">' +
        '<div class="header-main">' +
          '<div class="header-left">' +
            '<button id="miCoberturaVolver" class="noticia-completa-volver" style="margin-right:8px">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
            '</button>' +
            '<img src="img/laizquierdalogo.png" alt="La Izquierda Diario" class="logo-img"/>' +
          '</div>' +
        '</div>' +
      '</header>' +

      '<div class="mi-cobertura-contenido">' +
        '<span class="etiqueta-corresponsal">Cobertura de corresponsal</span>' +
        '<p class="mi-cobertura-meta">Desde ' + (c.ciudad || 'tu barrio') + ', ' + c.fecha + '</p>' +
        '<h1 class="mi-cobertura-titulo">' + titulo + '</h1>' +
        '<div class="mi-cobertura-cuerpo"><p>' + c.mensaje.replace(/\n/g, '</p><p>') + '</p></div>' +
      '</div>' +

      '<div class="cp-mini-perfil-wrap">' +
        '<div class="cp-mini-perfil">' +
          '<div class="corresponsal-avatar cp-avatar-grande cp-mini-avatar">' +
            '<div class="corresponsal-iniciales">' + iniciales + '</div>' +
            '<span class="corresponsal-badge"><i class="fas fa-bullhorn" style="color:white;font-size:11px;"></i></span>' +
          '</div>' +
          '<div class="cp-mini-info">' +
            '<h3 class="cp-mini-nombre">' + nombre + '</h3>' +
            '<p class="cp-mini-bio">Comparto noticias y testimonios que reflejan la realidad de mi ciudad. Me gusta recorrer mi barrio, conversar con los vecinos y dar visibilidad a las historias que forman parte de la vida cotidiana de la comunidad.</p>' +
          '</div>' +
          '<div class="cp-mini-botones">' +
            '<button class="btn-seguir" id="btnSeguirMiCobertura">Seguir cobertura</button>' +
            '<button class="btn-ver-perfil" id="btnVerPerfilPropio">Ver perfil</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<section class="seccion-noticias descubrir-mas-section">' +
        '<h2 class="seccion-titulo">Descubrí más coberturas de corresponsales</h2>' +
        '<div class="descubrir-mas-grid">' + construirDescubrirMasHTML() + '</div>' +
      '</section>' +

      '<section class="banner-mini">' +
        '<div class="banner-mini-img"><img src="img/megafono.png" alt="Megáfono"/></div>' +
        '<div class="banner-mini-texto">' +
          '<h2 class="banner-mini-titulo">Tu palabra importa</h2>' +
          '<p>¿Tenés algo para contar de tu trabajo, barrio, escuela o comunidad?<br/>Enviá tu noticia y sumate a nuestra red de corresponsales</p>' +
        '</div>' +
        '<a href="#" class="banner-link banner-mini-link">Envía tu noticia <i class="fas fa-chevron-right" style="font-size:11px;"></i></a>' +
      '</section>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    miCoberturaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('miCoberturaVolver').addEventListener('click', function () {
      miCoberturaOverlay.classList.remove('activo');
    });

    // Seguir cobertura (toggle visual)
    $('btnSeguirMiCobertura').addEventListener('click', function () {
      var siguiendo = this.classList.toggle('siguiendo');
      this.textContent = siguiendo ? 'Siguiendo cobertura' : 'Seguir cobertura';
    });

    // Ver perfil: vuelve a abrir la pantalla de perfil del usuario logueado
    $('btnVerPerfilPropio').addEventListener('click', function () {
      miCoberturaOverlay.classList.remove('activo');
      var elNombre = $('perfilNombre');
      if (elNombre) elNombre.textContent = nombre;
      mostrarPanelMisCoberturas();
      if (perfilOverlay) perfilOverlay.classList.add('activo');
      limpiarNotifDot();
    });

    // Tarjetas de "Descubrí más coberturas de corresponsales"
    miCoberturaOverlay.querySelectorAll('.descubrir-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-id');
        if (id && corresponsales[id]) {
          miCoberturaOverlay.classList.remove('activo');
          abrirPerfilCorresponsal(id);
        }
      });
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
      '</div>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

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

  // ── NOTICIA COMPLETA: Diputados repudian campaña de hostigamiento a Myriam Bregman ───
  function abrirNoticiaBregman() {
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
        '<img class="noticia-completa-img" src="img/miriam.png" alt="Diputados nacionales repudian la campaña de hostigamiento contra Myriam Bregman"/>' +
        '<div class="noticia-completa-texto">' +
          '<h1>Diputados nacionales repudian la campaña de hostigamiento contra Myriam Bregman</h1>' +
          '<p class="noticia-completa-desc">Diputados y diputadas de distintos bloques opositores presentaron un proyecto de resolución para expresar el repudio de la Cámara baja a la campaña de difamación, hostigamiento y violencia política y simbólica impulsada desde el medio La Derecha Diario contra la diputada nacional Myriam Bregman.</p>' +
          '<div class="noticia-completa-meta">' +
            '<span class="noticia-completa-fecha">10 de Junio de 2026</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div id="noticiaCuerpo" class="noticia-completa-cuerpo">' +
        '<p>Diputados y diputadas de distintos bloques opositores presentaron un proyecto de resolución para expresar el repudio de la Cámara baja a la campaña de difamación, hostigamiento y violencia política y simbólica impulsada desde el medio La Derecha Diario contra la diputada nacional Myriam Bregman.</p>' +
        '<p>La iniciativa, encabezada por Nicolás Del Caño y acompañada por legisladores y legisladoras de distintos bloques, denuncia que dicha campaña fue amplificada por funcionarios, voceros y referentes del oficialismo nacional, incluyendo al presidente Javier Milei, y que se basó en la reproducción de la imagen de Bregman golpeada y en la tergiversación deliberada de votaciones parlamentarias.</p>' +
        '<p>Según el proyecto, estas acciones tuvieron como objetivo instalar noticias falsas, promover discursos de odio y alentar la estigmatización pública de la dirigenta del PTS en el Frente de Izquierda Unidad, en un contexto marcado por el enorme rechazo y una masiva movilización nacional, el 3 de junio pasado, al cumplirse 11 años del Ni Una Menos en Argentina, y en reclamo de justicia ante los femicidios de Agostina Vega en Córdoba, Dulce María Beatriz Candia en Misiones y Noelia Carolina Romero en la provincia de Buenos Aires.</p>' +
        '<p>En este sentido, los fundamentos también destacan que la difusión de imágenes de Bregman golpeada constituye una expresión de violencia de género inadmisible y sostiene que no se trata únicamente de un ataque individual sino de un mecanismo basado en la desinformación, la incitación al odio, la intimidación de voces opositoras y la promoción de la estigmatización pública, particularmente de mujeres que participan activamente en la vida política, contra otras cientos de mujeres.</p>' +
        '<p>El proyecto lleva la firma de Nicolás Del Caño (PTS/FIT-U), Paula Penacca, Gabriela Estévez, Moira Lanesan Sancho, Natalia Zaracho, Adriana Serquis, María Jimena Lopez, Horacio Pietragalla, Carlos Daniel Castagneto, Jorge Neri Araujo Hernández, Juan Marino (UP), Yamila Ruiz (Innovación Federal), Mónica Fraade (Coalición Cívica), Esteban Paulón (Partido Socialista/Encuentro Federal), Néstor Pitrola y Romina del Plá (PO/FIT-U) advierte sobre la promoción de un clima de intimidación orientado a desalentar la movilización y la denuncia.</p>' +
        '<p>Asimismo, rechaza toda forma de violencia simbólica, política y de género, particularmente cuando se utilizan imágenes, mensajes o representaciones destinadas a la humillación, intimidación o disciplinamiento de mujeres, como se pretendió en este caso, y sostiene que la campaña fue impulsada por La Derecha Diario y amplificada por funcionarios y referentes del oficialismo nacional, como el propio Presidente, Patricia Bullrich y Luis Petri.</p>' +

        '<img class="mi-cobertura-imagen" src="img/noticiapoli.png" alt="Proyecto de resolución presentado en Diputados"/>' +
      '</div>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });
  }

  var noticiaBregman = $('noticiaBregman');
  if (noticiaBregman) {
    noticiaBregman.addEventListener('click', function (e) {
      e.preventDefault();
      abrirNoticiaBregman();
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
      '</div>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

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

  // ── NOTICIA COMPLETA: Cierre de la fábrica Verónica (corresponsal JP) ───
  function abrirNoticiaVeronica() {
    var jp = corresponsales.JP;

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

      '<div class="mi-cobertura-contenido">' +
        '<span class="etiqueta-corresponsal">Cobertura de corresponsal</span>' +
        '<p class="mi-cobertura-meta">Desde Santa Fé Argentina,  5 de Junio de 2026</p>' +
        '<h1 class="mi-cobertura-titulo">En Santa Fé ante el cierre de la fábrica Verónica los trabajadores realizan una importante concentración</h1>' +
        '<p class="mi-cobertura-bajada">La empresa lechera Verónica adeuda salarios, afectando a 700 trabajadores de Rafaela y la región. Los trabajadores continúan organizados y con medidas de lucha. Esta vez frente a la Secretaría de Trabajo.</p>' +
        '<img class="mi-cobertura-imagen" src="img/noticia1.1.png" alt="Trabajadores de Verónica se movilizan"/>' +
        '<hr class="mi-cobertura-divider"/>' +

        '<div class="mi-cobertura-cuerpo">' +
          '<p>El día de hoy, viernes 5 de junio, los trabajadores de Verónica realizaron una concentración frente a la Secretaría de Trabajo de la ciudad de Rafaela de la Provincia de Santa Fe. Encabezaron la movilización con un cartel que afirmaba "Cuando se escriba la historia de Verónica, se sepa que nunca bajamos los brazos."</p>' +
          '<p>Su reclamo por sueldos adeudados y el lock out de la empresa persiste hace varios meses.</p>' +

          '<blockquote class="noticia-cita">' +
            'Somos empleados de Verónica que hace seis meses que no cobramos y que en la Empresa no entra ni un litro de leche. Estamos abandonados, la empresa no nos da ningún tipo de respuesta. No venden, cierran, no se produce. Ese es el panorama que estamos sufriendo' +
            '<span class="noticia-cita-autor">-Declaró Ángel Villaroel, trabajador de la fábrica.</span>' +
          '</blockquote>' +

          '<p>Por otra parte, el mismo afirmó: "Hoy, después de haber tenido un mes de impasse, luego de habernos recibido la Legislatura, los ministros de Producción, de Trabajo y de Lechería y no tener respuestas, hoy empezamos la acción, que es empezar a tomar nuevas medidas".</p>' +
          '<p>Más de cien trabajadores se reunieron pidiendo que se le paguen los sueldos adeudados. "Concentramos en la Secretaría de Trabajo de Rafaela, después nos fuimos al gremio y a Tribunales. Así iniciamos nuestras acciones de vuelta para visibilizar nuestra situación. No recibimos respuesta, solo pudimos entregar un petitorio. El gremio está haciendo bastante pero todo lo está haciendo por la vía legal."</p>' +
          '<p>Para finalizar, agregó Villaroel: "Nosotros solicitamos la urgente intervención de un fiscal o de un juez que tome una resolución rápida tras el fallo a nuestro favor de primera instancia porque nosotros necesitamos comer. Eso es lo que hoy realizamos, La semana que viene nos vamos a reunir para ver qué pasos damos y cómo seguir."</p>' +
          '<p>Desde La Izquierda Diario Rafaela nos solidarizamos con el reclamo de los trabajadores en el marco del industricidio que está llevando adelante el gobierno de Milei y Pullaro. Seguiremos apoyando cada medida de lucha de los trabajadores.</p>' +
        '</div>' +

        '<h3 class="registros-titulo">Registros de la cobertura</h3>' +
        '<div class="registros-grid">' +
          '<img src="img/noticia1.2.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia1.3.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia1.4.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia1.5.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia1.6.png" alt="Registro de la cobertura"/>' +
        '</div>' +
      '</div>' +

      '<div class="cp-mini-perfil-wrap">' +
        '<div class="cp-mini-perfil">' +
          '<div class="corresponsal-avatar cp-avatar-grande cp-mini-avatar">' +
            '<div class="corresponsal-iniciales">' + jp.iniciales + '</div>' +
            '<span class="corresponsal-badge"><i class="fas fa-bullhorn" style="color:white;font-size:11px;"></i></span>' +
          '</div>' +
          '<div class="cp-mini-info">' +
            '<h3 class="cp-mini-nombre">' + jp.nombre + '</h3>' +
            '<p class="cp-mini-bio">' + jp.bio + '</p>' +
          '</div>' +
          '<div class="cp-mini-botones">' +
            '<button class="btn-seguir" id="btnSeguirVeronica">Seguir coberturas</button>' +
            '<button class="btn-ver-perfil" id="btnVerPerfilVeronica">Ver perfil</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<section class="seccion-noticias descubrir-mas-section">' +
        '<h2 class="seccion-titulo">Descubrí más coberturas de corresponsales</h2>' +
        '<div class="descubrir-mas-grid">' + construirDescubrirMasHTML('JP') + '</div>' +
      '</section>' +

      '<section class="banner-mini">' +
        '<div class="banner-mini-img"><img src="img/megafono.png" alt="Megáfono"/></div>' +
        '<div class="banner-mini-texto">' +
          '<h2 class="banner-mini-titulo">Tu palabra importa</h2>' +
          '<p>¿Tenés algo para contar de tu trabajo, barrio, escuela o comunidad?<br/>Enviá tu noticia y sumate a nuestra red de corresponsales</p>' +
        '</div>' +
        '<a href="#" class="banner-link banner-mini-link">Envía tu noticia <i class="fas fa-chevron-right" style="font-size:11px;"></i></a>' +
      '</section>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });

    // Seguir coberturas de Juan Pérez
    var seguidosActuales = JSON.parse(localStorage.getItem('seguidos') || '[]');
    var btnSeguirVer = $('btnSeguirVeronica');
    if (seguidosActuales.indexOf('JP') !== -1) {
      btnSeguirVer.textContent = 'Dejar de seguir';
      btnSeguirVer.classList.add('siguiendo');
    }
    btnSeguirVer.addEventListener('click', function () {
      var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');
      if (!sesion) {
        noticiaCompletaOverlay.classList.remove('activo');
        if (window.innerWidth <= 700 && $('bienvenidaOverlay')) {
          $('bienvenidaOverlay').classList.add('activo');
        } else if ($('authOverlay')) {
          $('authOverlay').classList.add('activo');
        }
        return;
      }
      var seguidos = JSON.parse(localStorage.getItem('seguidos') || '[]');
      var idx = seguidos.indexOf('JP');
      if (idx === -1) {
        seguidos.push('JP');
        this.textContent = 'Dejar de seguir';
        this.classList.add('siguiendo');
      } else {
        seguidos.splice(idx, 1);
        this.textContent = 'Seguir coberturas';
        this.classList.remove('siguiendo');
      }
      localStorage.setItem('seguidos', JSON.stringify(seguidos));
    });

    // Ver perfil completo de Juan Pérez
    $('btnVerPerfilVeronica').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
      abrirPerfilCorresponsal('JP');
    });

    // Tarjetas de "Descubrí más coberturas de corresponsales"
    noticiaCompletaOverlay.querySelectorAll('.descubrir-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-id');
        if (id && corresponsales[id]) {
          noticiaCompletaOverlay.classList.remove('activo');
          abrirPerfilCorresponsal(id);
        }
      });
    });
  }

  var noticiaVeronica = $('noticiaVeronica');
  if (noticiaVeronica) {
    noticiaVeronica.addEventListener('click', function (e) {
      if (e.target.closest('.cp-clickeable')) return;
      e.preventDefault();
      abrirNoticiaVeronica();
    });
  }

  // ── NOTICIA COMPLETA: "El pibe de los Astilleros" en Berisso (corresponsal PL) ───
  function abrirNoticiaAstilleros() {
    var pl = corresponsales.PL;

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

      '<div class="mi-cobertura-contenido">' +
        '<span class="etiqueta-corresponsal">Cobertura de corresponsal</span>' +
        '<p class="mi-cobertura-meta">Desde Provincia de Buenos Aires Argentina,  19 de Junio de 2026</p>' +
        '<h1 class="mi-cobertura-titulo">Junto a José Montes se presentó el libro "El pibe de los Astilleros" en Berisso</h1>' +
        '<p class="mi-cobertura-bajada">El 13 de junio se presentó en Rebelión Casa Socialista El Pibe de los Astilleros. Biografía de un obrero trotskista, junto a José Montes, autor del libro, dirigente y fundador del PTS; Juliana Yantorno, autora del libro, socióloga, becaria Conicet, docente UBA y Gastón Noval, autor del libro, profesor en Historia, investigador en IdIHCS UNLP.</p>' +
        '<img class="mi-cobertura-imagen" src="img/noticia2.1.png" alt="Presentación del libro El pibe de los Astilleros"/>' +
        '<hr class="mi-cobertura-divider"/>' +

        '<div class="mi-cobertura-cuerpo">' +
          '<p>El 13 de junio se presentó en Rebelión Casa Socialista El Pibe de los Astilleros. Biografía de un obrero trotskista, junto a José Montes, autor del libro, dirigente y fundador del PTS; Juliana Yantorno, autora del libro, socióloga, becaria Conicet, docente UBA y Gastón Noval, autor del libro, profesor en Historia, investigador en IdIHCS UNLP.</p>' +

          '<p>Durante la charla se recuperó la tradición del trotskismo en el movimiento obrero, el proceso de reconstrucción de todas las etapas históricas de lucha y resistencia por defender los organismos de base contra la burocracia sindical.</p>' +

          '<p>También se reflejaron las distintas instancias en las que la participación de amigos, trabajadores y camaradas del Negro Montes fueron parte de la realización de este libro con sus anécdotas, recuerdos y vivencias compartidas.</p>' +

          '<blockquote class="noticia-cita">' +
            'No conocía en profundidad la historia del Astillero. Me pareció muy valioso que este libro rescate la experiencia de quienes fueron protagonistas y que esas historias no se pierdan' +
            '<span class="noticia-cita-autor">-Martín G., trabajador metalúrgico de Berisso presente en el evento.</span>' +
          '</blockquote>' +

          '<p>La presentación también giró en torno a la necesidad de recuperar hoy las tradiciones de lucha y organización del Astillero y el objetivo de construir una fuerza política de la nueva clase trabajadora para dar una salida obrera a la crisis organizando comités en Berisso como en el resto del país.</p>' +
        '</div>' +

        '<h3 class="registros-titulo">Registros de la cobertura</h3>' +
        '<div class="registros-grid">' +
          '<img src="img/noticia2.2.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia2.3.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia2.4.png" alt="Registro de la cobertura"/>' +
        '</div>' +
      '</div>' +

      '<div class="cp-mini-perfil-wrap">' +
        '<div class="cp-mini-perfil">' +
          '<div class="corresponsal-avatar cp-avatar-grande cp-mini-avatar">' +
            '<div class="corresponsal-iniciales">' + pl.iniciales + '</div>' +
            '<span class="corresponsal-badge"><i class="fas fa-bullhorn" style="color:white;font-size:11px;"></i></span>' +
          '</div>' +
          '<div class="cp-mini-info">' +
            '<h3 class="cp-mini-nombre">' + pl.nombre + '</h3>' +
            '<p class="cp-mini-bio">' + pl.bio + '</p>' +
          '</div>' +
          '<div class="cp-mini-botones">' +
            '<button class="btn-seguir" id="btnSeguirAstilleros">Seguir coberturas</button>' +
            '<button class="btn-ver-perfil" id="btnVerPerfilAstilleros">Ver perfil</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<section class="seccion-noticias descubrir-mas-section">' +
        '<h2 class="seccion-titulo">Descubrí más coberturas de corresponsales</h2>' +
        '<div class="descubrir-mas-grid">' + construirDescubrirMasHTML('PL') + '</div>' +
      '</section>' +

      '<section class="banner-mini">' +
        '<div class="banner-mini-img"><img src="img/megafono.png" alt="Megáfono"/></div>' +
        '<div class="banner-mini-texto">' +
          '<h2 class="banner-mini-titulo">Tu palabra importa</h2>' +
          '<p>¿Tenés algo para contar de tu trabajo, barrio, escuela o comunidad?<br/>Enviá tu noticia y sumate a nuestra red de corresponsales</p>' +
        '</div>' +
        '<a href="#" class="banner-link banner-mini-link">Envía tu noticia <i class="fas fa-chevron-right" style="font-size:11px;"></i></a>' +
      '</section>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });

    // Seguir coberturas de Pepe Lopez
    var seguidosActuales = JSON.parse(localStorage.getItem('seguidos') || '[]');
    var btnSeguirAst = $('btnSeguirAstilleros');
    if (seguidosActuales.indexOf('PL') !== -1) {
      btnSeguirAst.textContent = 'Dejar de seguir';
      btnSeguirAst.classList.add('siguiendo');
    }
    btnSeguirAst.addEventListener('click', function () {
      var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');
      if (!sesion) {
        noticiaCompletaOverlay.classList.remove('activo');
        if (window.innerWidth <= 700 && $('bienvenidaOverlay')) {
          $('bienvenidaOverlay').classList.add('activo');
        } else if ($('authOverlay')) {
          $('authOverlay').classList.add('activo');
        }
        return;
      }
      var seguidos = JSON.parse(localStorage.getItem('seguidos') || '[]');
      var idx = seguidos.indexOf('PL');
      if (idx === -1) {
        seguidos.push('PL');
        this.textContent = 'Dejar de seguir';
        this.classList.add('siguiendo');
      } else {
        seguidos.splice(idx, 1);
        this.textContent = 'Seguir coberturas';
        this.classList.remove('siguiendo');
      }
      localStorage.setItem('seguidos', JSON.stringify(seguidos));
    });

    // Ver perfil completo de Pepe Lopez
    $('btnVerPerfilAstilleros').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
      abrirPerfilCorresponsal('PL');
    });

    // Tarjetas de "Descubrí más coberturas de corresponsales"
    noticiaCompletaOverlay.querySelectorAll('.descubrir-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-id');
        if (id && corresponsales[id]) {
          noticiaCompletaOverlay.classList.remove('activo');
          abrirPerfilCorresponsal(id);
        }
      });
    });
  }

  var noticiaAstilleros = $('noticiaAstilleros');
  if (noticiaAstilleros) {
    noticiaAstilleros.addEventListener('click', function (e) {
      if (e.target.closest('.cp-clickeable')) return;
      e.preventDefault();
      abrirNoticiaAstilleros();
    });
  }

  // ── NOTICIA COMPLETA: Jornada solidaria comedores escolares en Berisso (corresponsal IB) ───
  function abrirNoticiaBerisso() {
    var ib = corresponsales.IB;

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

      '<div class="mi-cobertura-contenido">' +
        '<span class="etiqueta-corresponsal">Cobertura de corresponsal</span>' +
        '<p class="mi-cobertura-meta">Desde La Plata Argentina,  8 de Junio de 2026</p>' +
        '<h1 class="mi-cobertura-titulo">Docentes de Berisso impulsan una jornada solidaria para sostener los comedores escolares</h1>' +
        '<p class="mi-cobertura-bajada">La comunidad educativa organizó una colecta de alimentos y útiles para acompañar a las familias ante el aumento de la demanda en las escuelas públicas.</p>' +
        '<img class="mi-cobertura-imagen" src="img/noticia3.1.png" alt="Colecta solidaria para comedores escolares en Berisso"/>' +
        '<hr class="mi-cobertura-divider"/>' +

        '<div class="mi-cobertura-cuerpo">' +
          '<p>Ante el aumento de la demanda en los comedores escolares de Berisso, docentes de distintas instituciones educativas organizaron una colecta solidaria de alimentos no perecederos, útiles escolares y productos de higiene. La iniciativa surgió de manera conjunta entre equipos docentes, familias y vecinos con el objetivo de acompañar a las escuelas que diariamente reciben a niños y niñas del barrio.</p>' +

          '<p>Durante la jornada, realizada en la Plaza Almafuerte, decenas de personas acercaron donaciones que luego fueron distribuidas entre diferentes establecimientos educativos de la ciudad. Además de la colecta, se llevaron a cabo actividades recreativas para los más chicos y un espacio de intercambio entre docentes sobre las necesidades que atraviesan las comunidades educativas.</p>' +

          '<blockquote class="noticia-cita">' +
            'Cada vez son más las familias que dependen del comedor escolar. Sentimos que organizarnos entre vecinos y docentes es una forma de dar una respuesta mientras seguimos reclamando mejores condiciones para nuestras escuelas' +
            '<span class="noticia-cita-autor">-Declaró Mariana, docente de primaria.</span>' +
          '</blockquote>' +

          '<p>Los organizadores destacaron que la convocatoria superó las expectativas y adelantaron que buscarán repetir este tipo de jornadas durante los próximos meses para continuar acompañando a las familias y fortalecer el trabajo comunitario que se desarrolla en los barrios.</p>' +
        '</div>' +

        '<h3 class="registros-titulo">Registros de la cobertura</h3>' +
        '<div class="registros-grid">' +
          '<img src="img/noticia3.2.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia3.3.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia3.4.png" alt="Registro de la cobertura"/>' +
          '<img src="img/noticia3.5.png" alt="Registro de la cobertura"/>' +
        '</div>' +
      '</div>' +

      '<div class="cp-mini-perfil-wrap">' +
        '<div class="cp-mini-perfil">' +
          '<div class="corresponsal-avatar cp-avatar-grande cp-mini-avatar">' +
            '<div class="corresponsal-iniciales">' + ib.iniciales + '</div>' +
            '<span class="corresponsal-badge"><i class="fas fa-bullhorn" style="color:white;font-size:11px;"></i></span>' +
          '</div>' +
          '<div class="cp-mini-info">' +
            '<h3 class="cp-mini-nombre">' + ib.nombre + '</h3>' +
            '<p class="cp-mini-bio">' + ib.bio + '</p>' +
          '</div>' +
          '<div class="cp-mini-botones">' +
            '<button class="btn-seguir" id="btnSeguirBerisso">Seguir coberturas</button>' +
            '<button class="btn-ver-perfil" id="btnVerPerfilBerisso">Ver perfil</button>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<section class="seccion-noticias descubrir-mas-section">' +
        '<h2 class="seccion-titulo">Descubrí más coberturas de corresponsales</h2>' +
        '<div class="descubrir-mas-grid">' + construirDescubrirMasHTML('IB') + '</div>' +
      '</section>' +

      '<section class="banner-mini">' +
        '<div class="banner-mini-img"><img src="img/megafono.png" alt="Megáfono"/></div>' +
        '<div class="banner-mini-texto">' +
          '<h2 class="banner-mini-titulo">Tu palabra importa</h2>' +
          '<p>¿Tenés algo para contar de tu trabajo, barrio, escuela o comunidad?<br/>Enviá tu noticia y sumate a nuestra red de corresponsales</p>' +
        '</div>' +
        '<a href="#" class="banner-link banner-mini-link">Envía tu noticia <i class="fas fa-chevron-right" style="font-size:11px;"></i></a>' +
      '</section>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });

    // Seguir coberturas de Ignacio Blanco
    var seguidosActualesIB = JSON.parse(localStorage.getItem('seguidos') || '[]');
    var btnSeguirBer = $('btnSeguirBerisso');
    if (seguidosActualesIB.indexOf('IB') !== -1) {
      btnSeguirBer.textContent = 'Dejar de seguir';
      btnSeguirBer.classList.add('siguiendo');
    }
    btnSeguirBer.addEventListener('click', function () {
      var sesion = JSON.parse(sessionStorage.getItem('sesionActiva') || 'null');
      if (!sesion) {
        noticiaCompletaOverlay.classList.remove('activo');
        if (window.innerWidth <= 700 && $('bienvenidaOverlay')) {
          $('bienvenidaOverlay').classList.add('activo');
        } else if ($('authOverlay')) {
          $('authOverlay').classList.add('activo');
        }
        return;
      }
      var seguidos = JSON.parse(localStorage.getItem('seguidos') || '[]');
      var idx = seguidos.indexOf('IB');
      if (idx === -1) {
        seguidos.push('IB');
        this.textContent = 'Dejar de seguir';
        this.classList.add('siguiendo');
      } else {
        seguidos.splice(idx, 1);
        this.textContent = 'Seguir coberturas';
        this.classList.remove('siguiendo');
      }
      localStorage.setItem('seguidos', JSON.stringify(seguidos));
    });

    // Ver perfil completo de Ignacio Blanco
    $('btnVerPerfilBerisso').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
      abrirPerfilCorresponsal('IB');
    });

    // Tarjetas de "Descubrí más coberturas de corresponsales"
    noticiaCompletaOverlay.querySelectorAll('.descubrir-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-id');
        if (id && corresponsales[id]) {
          noticiaCompletaOverlay.classList.remove('activo');
          abrirPerfilCorresponsal(id);
        }
      });
    });
  }

  // ── VER MÁS: RED DE CORRESPONSALES (listado completo) ────────────────────
  var verMasRedOverlay = $('verMasRedOverlay');
  if (!verMasRedOverlay) {
    verMasRedOverlay = document.createElement('div');
    verMasRedOverlay.id = 'verMasRedOverlay';
    document.body.appendChild(verMasRedOverlay);
  }

  // Contenido de ejemplo (placeholder) para las 10 coberturas del listado
  var idsCorresponsalesCiclo = ['PL', 'LG', 'LF', 'JP', 'MM', 'LL'];
  var noticiasRedPlaceholder = [
    { titulo: 'Docentes de Berisso impulsan una jornada solidaria para sostener los comedores escolares', desc: 'La comunidad educativa organizó una colecta de alimentos y útiles para acompañar a las familias ante el aumento de la demanda en las escuelas públicas.', tiempo: 3 },
    { titulo: 'Vecinos autoconvocados exigen la reparación de la red de agua potable en el barrio', desc: 'Hace más de un mes que varias cuadras del barrio no tienen agua corriente. Los vecinos se organizaron y presentaron un petitorio ante el municipio.', tiempo: 2 },
    { titulo: 'Docentes universitarios se movilizaron por la recomposición salarial y el presupuesto educativo', desc: 'Gremios docentes de distintas facultades marcharon exigiendo la reapertura de paritarias y el freno al ajuste presupuestario en la educación pública.', tiempo: 4 },
    { titulo: 'Trabajadoras de la salud reclaman insumos y mejoras edilicias en el hospital local', desc: 'Enfermeras y enfermeros denuncian falta de insumos básicos y el deterioro de la infraestructura hospitalaria en pleno invierno.', tiempo: 3 },
    { titulo: 'Estudiantes secundarios realizaron una jornada de debate sobre la reforma educativa', desc: 'Centros de estudiantes de distintas escuelas se reunieron para discutir los alcances de la reforma y organizar las próximas medidas.', tiempo: 5 },
    { titulo: 'Cooperativa de trabajo autogestionado cumple un nuevo aniversario en el barrio', desc: 'La cooperativa nació tras el cierre de una fábrica y hoy sostiene decenas de puestos de trabajo de manera autogestiva.', tiempo: 4 },
    { titulo: 'Vecinas de la zona sur organizan una feria solidaria frente al aumento de precios', desc: 'Ante la suba constante de los alimentos, un grupo de vecinas armó una feria de trueque e intercambio en la plaza del barrio.', tiempo: 2 },
    { titulo: 'Trabajadores municipales realizaron un abrazo simbólico por la reincorporación de despedidos', desc: 'Empleados municipales se concentraron frente al palacio comunal reclamando la vuelta al trabajo de sus compañeros cesanteados.', tiempo: 3 },
    { titulo: 'Jubilados y jubiladas marcharon nuevamente por la actualización de los haberes', desc: 'Como todas las semanas, los jubilados volvieron a movilizarse exigiendo una recomposición urgente de sus ingresos.', tiempo: 3 },
    { titulo: 'Familias de un barrio popular reclaman por la regularización de la conexión eléctrica', desc: 'Decenas de familias conviven con cortes de luz constantes y piden al municipio una solución definitiva al tendido eléctrico.', tiempo: 2 }
  ];

  var NOTICIAS_RED_VISIBLES = 4;

  function construirNoticiaRedItemHTML(n, i) {
    return (
      '<div class="noticia-red-item' + (i === 0 ? ' noticia-clickeable' : '') + '"' + (i === 0 ? ' id="noticiaRedBerisso"' : '') + '>' +
        '<img class="noticia-red-img" src="img/noticiared' + (i + 1) + '.png" alt="Noticia"/>' +
        '<div class="noticia-red-texto">' +
          '<h3 class="noticia-red-titulo">' + n.titulo + '</h3>' +
          '<p class="noticia-red-desc">' + n.desc + '</p>' +
          '<a href="#" class="noticia-red-leermas">Leer más (' + n.tiempo + ' min de lectura) <i class="fas fa-chevron-right" style="font-size:10px;"></i></a>' +
        '</div>' +
      '</div>' +
      '<hr class="noticia-red-divisor"/>'
    );
  }

  function renderizarListadoRed() {
    var contenedor = $('listadoRedNoticias');
    if (!contenedor) return;

    var html = '';
    for (var i = 0; i < NOTICIAS_RED_VISIBLES && i < noticiasRedPlaceholder.length; i++) {
      html += construirNoticiaRedItemHTML(noticiasRedPlaceholder[i], i);
    }
    contenedor.innerHTML = html;

    var itemBerisso = $('noticiaRedBerisso');
    if (itemBerisso) {
      itemBerisso.addEventListener('click', function (e) {
        e.preventDefault();
        verMasRedOverlay.classList.remove('activo');
        abrirNoticiaBerisso();
      });
    }
  }

  // Coberturas audiovisuales de ejemplo (placeholder)
  var coberturasAudiovisuales = [
    { img: 'img/audiovisual1.png', titulo: '¿Por qué trabajamos MÁS TIEMPO que en la Edad Media? (La trampa del tiempo libre)', corresponsal: 'Celeste Muriño' },
    { img: 'img/audiovisual2.png', titulo: 'Trabajadores del sector hablan sobre el peligro oculto del desguace nuclear en Argentina', corresponsal: 'Julio Perez' },
    { img: 'img/audiovisual3.png', titulo: 'Tras el terremoto en Venezuela: desidia gubernamental, neocolonialismo y solidaridad desde abajo', corresponsal: 'Pablo Lopez' }
  ];

  function construirCoberturasAudiovisualesHTML() {
    return coberturasAudiovisuales.map(function (v) {
      return (
        '<div class="audiovisual-card">' +
          '<div class="audiovisual-img-wrap">' +
            '<img src="' + v.img + '" alt=""/>' +
            '<span class="audiovisual-play"><i class="fas fa-play"></i></span>' +
          '</div>' +
          '<div class="audiovisual-texto">' +
            '<h4>' + v.titulo + '</h4>' +
            '<p class="audiovisual-corresponsal">Corresponsal ' + v.corresponsal + '</p>' +
            '<a href="#" class="btn-ver-youtube">Ver en Youtube</a>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }
  var coberturasDestacadaSemana = [
    { img: 'img/destacado1.png', titulo: 'Docentes realizaron una feria educativa con proyectos de escuelas públicas', meta: 'Hace 3 días' },
    { img: 'img/destacado2.png', titulo: 'En los Hornos organizaron jornada solidaria para mejorar la plaza del barrio', meta: 'Hace 1 semana' },
    { img: 'img/destacado3.png', titulo: 'Cooperativa local abrió un espacio gratuito de apoyo escolar para adolescentes', meta: 'Hace 1 semana' }
  ];

  function construirCorresponsalDestacadoHTML() {
    var pl = corresponsales.PL;

    var coberturasHTML = coberturasDestacadaSemana.map(function (c) {
      return (
        '<div class="destacado-cobertura-card">' +
          '<img src="' + c.img + '" alt=""/>' +
          '<div class="destacado-cobertura-texto">' +
            '<span class="destacado-cobertura-etiqueta">Cobertura de ' + pl.nombre + '</span>' +
            '<h4>' + c.titulo + '</h4>' +
            '<span class="noticia-meta">' + c.meta + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<section class="corresponsal-destacado" style="background-image:url(\'img/fondored2.png\')">' +
        '<div class="corresponsal-destacado-inner">' +
          '<p class="corresponsal-destacado-etiqueta">CORRESPONSAL DESTACADO DE LA SEMANA</p>' +

          '<div class="corresponsal-destacado-perfil">' +
            '<div class="corresponsal-destacado-avatar-wrap">' +
              '<div class="corresponsal-avatar corresponsal-destacado-avatar">' +
                '<div class="corresponsal-iniciales">' + pl.iniciales + '</div>' +
              '</div>' +
              '<span class="corresponsal-destacado-estrella"><i class="fas fa-star"></i></span>' +
            '</div>' +
            '<div class="corresponsal-destacado-info">' +
              '<h2 class="corresponsal-destacado-nombre">' + pl.nombre + '</h2>' +
              '<p class="corresponsal-destacado-bio">' + pl.bio + '</p>' +
              '<div class="corresponsal-destacado-datos">' +
                '<span>Desde ' + pl.ciudad + ', Argentina</span>' +
                '<span class="destacado-datos-separador">|</span>' +
                '<span>Corresponsal hace 1 año</span>' +
                '<span class="destacado-datos-separador">|</span>' +
                '<span>28 coberturas publicadas</span>' +
              '</div>' +
              '<button type="button" class="btn-ver-perfil-destacado" id="btnVerPerfilDestacado">Ver perfil</button>' +
            '</div>' +
          '</div>' +

          '<div class="destacado-cobertura-grid">' + coberturasHTML + '</div>' +
        '</div>' +
      '</section>'
    );
  }

  function abrirVerMasRed() {
    verMasRedOverlay.innerHTML =
      '<header class="header">' +
        '<div class="header-main">' +
          '<div class="header-left">' +
            '<button id="verMasRedVolver" class="noticia-completa-volver" style="margin-right:8px">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
            '</button>' +
            '<img src="img/laizquierdalogo.png" alt="La Izquierda Diario" class="logo-img"/>' +
          '</div>' +
        '</div>' +
      '</header>' +

      '<div class="ver-mas-red-hero" style="background-image:url(\'img/fondored.png\')">' +
        '<div class="ver-mas-red-hero-inner">' +
          '<h1 class="ver-mas-red-hero-titulo">RED DE CORRESPONSALES</h1>' +
          '<p class="ver-mas-red-hero-subtitulo">Historias contadas por quienes viven la realidad todos los días</p>' +
          '<p class="ver-mas-red-hero-desc">Más de 300 personas desde todo el país comparten sus coberturas, testimonios, imágenes y relatos de sus comunidades</p>' +
        '</div>' +
      '</div>' +

      '<section class="filtros-red">' +
        '<div class="filtro-grupo">' +
          '<h4 class="filtro-label">Temáticas</h4>' +
          '<div class="filtro-pills">' +
            ['Barrios', 'Trabajo', 'Salud', 'Educación', 'Ambiente', 'Cultura', 'Géneros', 'Comunidad'].map(function (t) {
              return '<button type="button" class="filtro-pill" data-grupo="tematicas">' + t + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +

        '<div class="filtro-grupo">' +
          '<h4 class="filtro-label">Voces de</h4>' +
          '<div class="filtro-pills">' +
            ['Vecinxs', 'Trabajadorxs', 'Estudiantes', 'Docentes', 'Jubilados', 'Cultura', 'Cooperativas', 'Pueblos originarios'].map(function (t) {
              return '<button type="button" class="filtro-pill" data-grupo="voces">' + t + '</button>';
            }).join('') +
          '</div>' +
        '</div>' +

        '<div class="filtro-grupo">' +
          '<h4 class="filtro-label">Cercanía</h4>' +
          '<div class="filtro-cercania-fila">' +
            '<div class="filtro-pills">' +
              ['Cerca tuyo', 'Nacional', 'Internacional'].map(function (t) {
                return '<button type="button" class="filtro-pill" data-grupo="cercania">' + t + '</button>';
              }).join('') +
            '</div>' +
            '<a href="#" class="filtro-limpiar" id="limpiarFiltrosRed">Limpiar filtros</a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="seccion-noticias">' +
        '<div id="listadoRedNoticias" class="listado-red-noticias"></div>' +
        '<div class="mostrar-mas-red-wrap" id="mostrarMasRedWrap">' +
          '<button type="button" class="btn-mostrar-mas-red" id="btnMostrarMasRed">Mostrar más noticias</button>' +
        '</div>' +
      '</section>' +

      construirCorresponsalDestacadoHTML() +

      '<section class="seccion-noticias coberturas-audiovisuales">' +
        '<div class="seccion-header">' +
          '<h2 class="seccion-titulo-audiovisual">Coberturas audiovisuales</h2>' +
        '</div>' +
        '<div class="audiovisual-grid">' + construirCoberturasAudiovisualesHTML() + '</div>' +
      '</section>' +

      '<section class="banner-mini">' +
        '<div class="banner-mini-img"><img src="img/megafono.png" alt="Megáfono"/></div>' +
        '<div class="banner-mini-texto">' +
          '<h2 class="banner-mini-titulo">Tu palabra importa</h2>' +
          '<p>¿Tenés algo para contar de tu trabajo, barrio, escuela o comunidad?<br/>Enviá tu noticia y sumate a nuestra red de corresponsales</p>' +
        '</div>' +
        '<a href="#" class="banner-link banner-mini-link">Envía tu noticia <i class="fas fa-chevron-right" style="font-size:11px;"></i></a>' +
      '</section>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    verMasRedOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('verMasRedVolver').addEventListener('click', function () {
      verMasRedOverlay.classList.remove('activo');
    });

    // Badges de corresponsal dentro del listado
    verMasRedOverlay.querySelectorAll('.cp-clickeable').forEach(function (badge) {
      badge.addEventListener('click', function (e) {
        e.preventDefault();
        var id = this.getAttribute('data-id');
        if (id && corresponsales[id]) abrirPerfilCorresponsal(id);
      });
    });

    // Filtros (Temáticas / Voces de / Cercanía)
    verMasRedOverlay.querySelectorAll('.filtro-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        this.classList.toggle('activo');
      });
    });

    var limpiarFiltrosBtn = $('limpiarFiltrosRed');
    if (limpiarFiltrosBtn) {
      limpiarFiltrosBtn.addEventListener('click', function (e) {
        e.preventDefault();
        verMasRedOverlay.querySelectorAll('.filtro-pill.activo').forEach(function (pill) {
          pill.classList.remove('activo');
        });
      });
    }

    // Listado de noticias: se muestran siempre las primeras 4
    renderizarListadoRed();
    // El botón "Mostrar más noticias" queda sin funcionalidad por ahora.

    // Corresponsal destacado de la semana: botón "Ver perfil"
    var btnVerPerfilDestacado = $('btnVerPerfilDestacado');
    if (btnVerPerfilDestacado) {
      btnVerPerfilDestacado.addEventListener('click', function () {
        verMasRedOverlay.classList.remove('activo');
        abrirPerfilCorresponsal('PL');
      });
    }
  }

  var verMasCorresponsales = $('verMasCorresponsales');
  if (verMasCorresponsales) {
    verMasCorresponsales.addEventListener('click', function (e) {
      e.preventDefault();
      abrirVerMasRed();
    });
  }

  // ── VER MÁS: GÉNEROS Y SEXUALIDADES (listado completo, con paginado) ─────
  var verMasGeneroOverlay = $('verMasGeneroOverlay');
  if (!verMasGeneroOverlay) {
    verMasGeneroOverlay = document.createElement('div');
    verMasGeneroOverlay.id = 'verMasGeneroOverlay';
    document.body.appendChild(verMasGeneroOverlay);
  }

  var noticiasGenero = [
    { titulo: 'Andrea D\'Atri cruzó a Claudia Muzzio ante su defensa de la natalidad y el ataque al feminismo', desc: 'La polémica se inició tras una crítica del periodista Luis Novaresio a una charla brindada por la vicejefa de Gobierno porteño sobre la caída de la natalidad.', tiempo: 2 },
    { titulo: 'Justicia  patriarcal y clasista: la Corte anuló la condena a Trapani y Rodríguez por abuso sexual', desc: 'En un fallo escandaloso, la Corte Suprema de Tucumán absolvió al empresario citrícola Franco Trapani y a Álvaro Rodríguez por el beneficio de la duda. La Justicia vuelve a demostrar que responde a los patrones y dueños de la provincia.', tiempo: 4 },
    { titulo: 'Lali y Miranda! hicieron vibrar a miles en el Madrid Orgullo 2026', desc: 'La artista argentina se presentó ante más de 25.000 personas en el escenario principal de Plaza de España por Madrid Orgullo 2026. En un contexto marcado por el avance de las políticas reaccionarias y los discursos de odio a ambos lados del Atlántico, el show combinó pop, la sorpresa de Miranda! y un fuerte mensaje de lucha.', tiempo: 2 },
    { titulo: 'Anti derechos: ¿A Clara Muzzio le pagan para atacar los derechos de infancias, adolescencias y personas LGTBIQ+?', desc: 'Como salida de una caverna, la vicejefa de Gobierno porteño volvió a cuestionar la Educación Sexual Integral (ESI), negando la diversidad sexo-genérica. Además, arremetió contra la Interrupción Voluntaria del Embarazo (IVE).', tiempo: 3 },
    { titulo: 'Mujeres en la emergencia sísmica en Venezuela: cuando la crisis la sostienen las mujeres', desc: 'El terremoto revela una crisis social donde el cuidado, la supervivencia y la reconstrucción recaen desproporcionadamente sobre las mujeres de los sectores populares.', tiempo: 3 },
    { titulo: 'Aborto legal en Jujuy: promotoras denunciaron violencia estatal y dificultades en el acceso', desc: 'Representantes de organizaciones feministas Socorro Rosa, Católicas por el derecho a Decidir, Espacio Feminista y Popular de San Pedro y Fuerza Colectiva Feminista, fueron recibidas por la Comisión de Género de la Legislatura.', tiempo: 5 },
    { titulo: 'Cañuelas se movilizó: cientos de personas en las calles por el #3j y por todas las que ya no están', desc: 'Una multitud se concentró en la Plaza San Martín. Carteles con las caras de las víctimas, la voz de madres en duelo y la bronca transformada en organización.', tiempo: 3 }
  ];

  var GENERO_VISIBLES_INICIAL = 4;

  var GENERO_IMGS_EXISTENTES = ['genero1.png', 'genero 2.png', 'genero3.png', 'genero 4.png'];

  function construirNoticiaGeneroItemHTML(n, i) {
    return (
      '<div class="noticia-red-item' + (i === 0 ? ' noticia-clickeable' : '') + '"' + (i === 0 ? ' id="noticiaRedAndrea"' : '') + '>' +
        '<img class="noticia-red-img" src="img/' + GENERO_IMGS_EXISTENTES[i % GENERO_IMGS_EXISTENTES.length] + '" alt="Noticia"/>' +
        '<div class="noticia-red-texto">' +
          '<h3 class="noticia-red-titulo">' + n.titulo + '</h3>' +
          '<p class="noticia-red-desc">' + n.desc + '</p>' +
          '<a href="#" class="noticia-red-leermas">Leer más (' + n.tiempo + ' min de lectura) <i class="fas fa-chevron-right" style="font-size:10px;"></i></a>' +
        '</div>' +
      '</div>' +
      '<hr class="noticia-red-divisor"/>'
    );
  }

  function renderizarListadoGenero(cantidad) {
    var contenedor = $('listadoGeneroNoticias');
    if (!contenedor) return;

    var html = '';
    for (var i = 0; i < cantidad && i < noticiasGenero.length; i++) {
      html += construirNoticiaGeneroItemHTML(noticiasGenero[i], i);
    }
    contenedor.innerHTML = html;

    var wrapBoton = $('mostrarMasGeneroWrap');
    if (wrapBoton) {
      wrapBoton.style.display = (cantidad >= noticiasGenero.length) ? 'none' : '';
    }

    var itemAndrea = $('noticiaRedAndrea');
    if (itemAndrea) {
      itemAndrea.addEventListener('click', function (e) {
        e.preventDefault();
        verMasGeneroOverlay.classList.remove('activo');
        abrirNoticiaAndrea();
      });
    }
  }

  function abrirVerMasGenero() {
    verMasGeneroOverlay.innerHTML =
      '<header class="header">' +
        '<div class="header-main">' +
          '<div class="header-left">' +
            '<button id="verMasGeneroVolver" class="noticia-completa-volver" style="margin-right:8px">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
            '</button>' +
            '<img src="img/laizquierdalogo.png" alt="La Izquierda Diario" class="logo-img"/>' +
          '</div>' +
        '</div>' +
      '</header>' +

      '<section class="seccion-noticias">' +
        '<div class="seccion-header">' +
          '<h2 class="seccion-titulo">GÉNEROS Y SEXUALIDADES</h2>' +
        '</div>' +
        '<div id="listadoGeneroNoticias" class="listado-red-noticias"></div>' +
        '<div class="mostrar-mas-red-wrap" id="mostrarMasGeneroWrap">' +
          '<button type="button" class="btn-mostrar-mas-red" id="btnMostrarMasGenero">Mostrar más noticias</button>' +
        '</div>' +
      '</section>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    verMasGeneroOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    renderizarListadoGenero(GENERO_VISIBLES_INICIAL);

    $('verMasGeneroVolver').addEventListener('click', function () {
      verMasGeneroOverlay.classList.remove('activo');
    });

    $('btnMostrarMasGenero').addEventListener('click', function () {
      renderizarListadoGenero(noticiasGenero.length);
    });
  }

  var verMasGenero = $('verMasGenero');
  if (verMasGenero) {
    verMasGenero.addEventListener('click', function (e) {
      e.preventDefault();
      abrirVerMasGenero();
    });
  }

  // ── NOTICIA COMPLETA: Andrea D'Atri cruzó a Claudia Muzzio ──────────────
  function abrirNoticiaAndrea() {
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
        '<img class="noticia-completa-img" src="img/genero1.png" alt="Andrea D\'Atri y Clara Muzzio"/>' +
        '<div class="noticia-completa-texto">' +
          '<h1>Andrea D\'Atri cruzó a Claudia Muzzio ante su defensa de la natalidad y el ataque al feminismo</h1>' +
          '<p class="noticia-completa-desc">La polémica se inició tras una crítica del periodista Luis Novaresio a una charla brindada por la vicejefa de Gobierno porteño sobre la caída de la natalidad. Muzzio defendió posiciones conservadoras sobre la maternidad y cuestionó al feminismo. Andrea D\'Atri, legisladora del PTS-Frente de Izquierda, le respondió con datos y una defensa de las conquistas del movimiento de mujeres.</p>' +
          '<div class="noticia-completa-meta">' +
            '<span class="noticia-completa-fecha">11 de Junio de 2026</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div id="noticiaCuerpo" class="noticia-completa-cuerpo">' +
        '<p>La polémica comenzó cuando el periodista Luis Novaresio cuestionó en redes sociales a Clara Muzzio por una charla titulada "Cómo las ideas equivocadas están despoblando al mundo", convocada en la Universidad del Salvador. "¿Vos suponías que la presidenta de la Legislatura de la Ciudad se ocupa de mejorar el tránsito, la limpieza, la seguridad? Qué ingenuo sos", ironizó Novaresio. La publicación abrió una discusión que derivó en un fuerte intercambio entre la vicejefa de Gobierno y presidenta de la Legislatura porteña y la legisladora del PTS en el Frente de Izquierda, Andrea D\'Atri.</p>' +

        '<img class="tweet-embed-img" src="img/genero1-tweet1.png" alt="Charla de Clara Muzzio: Cómo las ideas equivocadas están despoblando al mundo"/>' +

        '<p>Esta respuesta, con semejantes afirmaciones conservadoras y misóginas, despertó la inmediata reacción de Andrea D\'Atri, que además de legisladora es la fundadora de la agrupación feminista socialista Pan y Rosas. La legisladora señaló que la caída de la natalidad es un fenómeno real, pero cuestionó que se la explique como consecuencia de una supuesta agenda antifeminista. "En CABA, el promedio de edad de las mujeres que deciden tener su primer hijo es de 33 años. Esto es, categóricamente, un triunfo del feminismo sobre ideas patriarcales y oscurantistas", escribió. Para D\'Atri, que las mujeres puedan decidir cuándo ser madres constituye una ampliación de derechos y no una amenaza para la sociedad.</p>' +

        '<img class="tweet-embed-img" src="img/genero1-tweet2.png" alt="Intercambio en redes entre Andrea D\'Atri y Clara Muzzio"/>' +

        '<p>La referente feminista socialista también destacó que parte de la disminución de los nacimientos está asociada a conquistas impulsadas por el movimiento de mujeres. "Baja la tasa de natalidad porque se redujo drásticamente el embarazo adolescente no intencional", sostuvo. Agregó que eso fue posible gracias a la Educación Sexual Integral y a otras políticas públicas conquistadas mediante años de movilización. En el mismo sentido remarcó que "los embarazos en niñas de 10 a 12 años se redujeron cerca de un 70%" y celebró ese dato como un avance fundamental para la protección de las infancias.</p>' +

        '<p>Pero el aspecto más contundente de la respuesta de Andrea estuvo dirigido a las condiciones materiales que atraviesan millones de mujeres y familias trabajadoras. "Muchas mujeres señalan que les gustaría ser madres pero no lo son, o desean tener más hijos y no los tienen, por limitaciones económicas", afirmó. Y responsabilizó de esa situación a "las políticas de todos los gobiernos que, con inflación o ajuste, siguen hundiendo en la pobreza a las mayorías, condenándolas al pluriempleo, la desocupación, el endeudamiento perpetuo y la imposibilidad de planificar un futuro".</p>' +

        '<p>Mientras ajustan al pueblo trabajador, en especial a las mujeres, muchas lo piensan dos veces antes de poder ejercer la maternidad si se les exige que sean madres en esas condiciones. Una consecuencia directa de una visión reaccionaria y misógina.</p>' +

        '<p>El intercambio dejó expuestas dos visiones profundamente contrapuestas. Mientras Muzzio atribuye los cambios demográficos a las ideas feministas y reivindica una mirada tradicional sobre la familia, D\'Atri sostuvo que las conquistas del movimiento de mujeres ampliaron la libertad para decidir sobre la maternidad, y que el verdadero límite está en la precarización social y económica que atraviesa quien desea formar una familia, no en sus derechos conquistados. "El feminismo ha luchado ofreciendo la perspectiva de la libertad y la dignidad humana a las mujeres y las niñas. El capitalismo y sus personeros políticos son los que imponen restricciones patriarcales", concluyó.</p>' +
      '</div>' +

      '<footer class="footer">' +
        '<div class="footer-contenido">' +
          '<div class="footer-redes">' +
            '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
          '<div class="footer-links">' +
            '<a href="#">Política de privacidad</a>' +
            '<a href="#">Ayuda y soporte</a>' +
            '<a href="#">Opciones de cookies</a>' +
          '</div>' +
        '</div>' +
        '<p class="footer-copy">© 2026 La Izquierda Diario. Todos los derechos reservados.</p>' +
      '</footer>';

    noticiaCompletaOverlay.classList.add('activo');
    window.scrollTo(0, 0);

    $('noticiaVolverInicio').addEventListener('click', function () {
      noticiaCompletaOverlay.classList.remove('activo');
    });
  }

  var leerMasGenero = $('leerMasGenero');
  if (leerMasGenero) {
    leerMasGenero.addEventListener('click', function (e) {
      e.preventDefault();
      abrirNoticiaAndrea();
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