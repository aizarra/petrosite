import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManifiestoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="font-body">Volver</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 pt-24 pb-20">
        {/* Title */}
        <div className="mb-12 border-l-4 border-protest-red pl-6">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wider leading-tight mb-4">
            Manifiesto por la Soberanía Petrolera de Venezuela
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/70 italic">
            Un llamado a la nación en defensa de nuestro futuro
          </p>
        </div>

        {/* Manifesto content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-white/90 leading-relaxed mb-8">
            A los venezolanos de todas las generaciones, de todas las regiones, de todas las convicciones políticas:
          </p>

          <p className="text-white/90 leading-relaxed mb-8">
            Nos dirigimos a ustedes en un momento de extrema gravedad para el destino de nuestra República. Mientras escribimos estas líneas, se consuma en la Asamblea Nacional la entrega del principal recurso estratégico de Venezuela: nuestro petróleo. Sin debate público, sin consulta popular, sin transparencia, y en abierta violación de la Constitución, se aprueba una reforma que desmantela casi un siglo de soberanía petrolera construida por generaciones de venezolanos.
          </p>

          <p className="text-white/90 leading-relaxed mb-12">
            No hablamos desde una trinchera ideológica. Hablamos desde Venezuela. Desde el único lugar donde deberíamos pararnos todos cuando está en juego el patrimonio de nuestros hijos.
          </p>

          {/* Section I */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            I. Lo que está en juego
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            El petróleo no es un commodity más. Es el recurso que definió nuestra historia moderna, que financió nuestras escuelas y hospitales, que pavimentó nuestras carreteras, que nos dio un lugar en el mundo. Es, sobre todo, el único activo estratégico que nos queda para reconstruir el país que hemos perdido.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            La reforma a la Ley Orgánica de Hidrocarburos propuesta no es un ajuste para aumentar nuestra competitividad. Es una capitulación. Transfiere a manos privadas —nacionales y extranjeras— el control efectivo de la industria petrolera. Reduce PDVSA a una agencia administradora de contratos. Saca las disputas de los tribunales venezolanos para someterlas a árbitros internacionales. Recorta a la mitad las regalías que recibe la nación. Legaliza en secreto contratos que violan la Constitución vigente.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Todo esto ocurre sin que el pueblo venezolano haya sido consultado. Sin que la Asamblea Nacional haya deliberado en serio. Sin que nadie haya explicado a la nación quiénes son los beneficiarios de estos contratos, qué áreas se están entregando, bajo qué condiciones.
          </p>

          <p className="text-protest-red text-xl font-semibold mb-12">
            Nos están robando el futuro a puertas cerradas.
          </p>

          {/* Section II */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            II. La herencia que traicionan
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Venezuela construyó durante casi cien años una tradición de pensamiento petrolero sin equivalente en América Latina. Esa tradición no pertenece a un partido ni a una ideología. Pertenece a la nación.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            <strong className="text-white">Gumersindo Torres</strong>, ministro bajo la dictadura de Gómez, fue el primero en defender el interés nacional frente a las petroleras extranjeras. Propuso regalías justas, reversión de instalaciones al Estado, y fue derrocado por ello. Pero sus ideas sobrevivieron.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            <strong className="text-white">Arturo Uslar Pietri</strong> lanzó en 1936 el llamado a "sembrar el petróleo": transformar la riqueza efímera del subsuelo en desarrollo permanente. Advirtió que sin esa siembra nos convertiríamos en "un inmenso parásito del petróleo, nadando en una abundancia momentánea y corruptora".
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            <strong className="text-white">Juan Pablo Pérez Alfonzo</strong>, fundador de la OPEP, llamó al petróleo "el excremento del diablo" y dedicó su vida a defender que Venezuela controlara su producción y capturara su renta. Fue él quien advirtió que "una rendija que se les abra a las transnacionales será aprovechada para convertirla en puerta abierta".
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            <strong className="text-white">Rómulo Betancourt</strong> estableció el fifty-fifty —reparto equitativo de ganancias entre el Estado y las compañías— y cerró la puerta a nuevas concesiones. Su política petrolera, continuada por gobiernos de distintos signos, preparó el camino hacia la nacionalización.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            <strong className="text-white">Carlos Andrés Pérez</strong> nacionalizó la industria en 1976. Ese día, al izar la bandera en el pozo Zumaque I, proclamó: "Ahora empezamos en el orden económico lo que en el pasado fue en el orden político y militar".
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            <strong className="text-white">Hugo Chávez</strong> revirtió la apertura de los años 90, recuperó el control estatal y elevó la participación fiscal. La Constitución de 1999 —aprobada por el pueblo en referéndum— reservó al Estado la actividad petrolera y prohibió la privatización de PDVSA.
          </p>

          <p className="text-white/90 leading-relaxed mb-12">
            Conservadores, socialdemócratas, socialistas. Hombres de ideas muy distintas que coincidieron en lo fundamental: el petróleo es de Venezuela y debe servir a los venezolanos. Esa es la herencia que hoy se traiciona.
          </p>

          {/* Section III */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            III. Lo que dice la Constitución que juran defender
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            La Constitución de la República Bolivariana de Venezuela es inequívoca:
          </p>

          <div className="bg-white/5 border-l-4 border-protest-red p-6 mb-6">
            <p className="text-white/90 mb-4">
              <strong className="text-white">Artículo 302</strong>: "El Estado se reserva, mediante la ley orgánica respectiva (...) la actividad petrolera y otras industrias, explotaciones, servicios y bienes de interés público y de carácter estratégico".
            </p>
            <p className="text-white/90 mb-4">
              <strong className="text-white">Artículo 303</strong>: "Por razones de soberanía económica, política y de estrategia nacional, el Estado conservará la totalidad de las acciones de Petróleos de Venezuela, S.A."
            </p>
            <p className="text-white/90 mb-4">
              <strong className="text-white">Artículo 150</strong>: Los contratos de interés público nacional "requerirán la aprobación de la Asamblea Nacional".
            </p>
            <p className="text-white/90">
              <strong className="text-white">Artículo 151</strong>: "En los contratos de interés público (...) se considerará incorporada, aun cuando no estuviere expresa, una cláusula según la cual las dudas y controversias que puedan suscitarse (...) serán decididas por los tribunales competentes de la República".
            </p>
          </div>

          <p className="text-white/90 leading-relaxed mb-6">
            La reforma viola cada uno de estos artículos:
          </p>

          <ul className="list-none space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-protest-red flex-shrink-0 mt-2"></span>
              <span className="text-white/90">Transfiere las actividades primarias reservadas al Estado a empresas privadas (violación del Art. 302).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-protest-red flex-shrink-0 mt-2"></span>
              <span className="text-white/90">Reduce a PDVSA a un cascarón mientras los privados operan, comercializan y capturan la renta (violación del Art. 303).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-protest-red flex-shrink-0 mt-2"></span>
              <span className="text-white/90">Elimina la aprobación de la Asamblea Nacional, que ahora solo "será notificada" (violación del Art. 150).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-protest-red flex-shrink-0 mt-2"></span>
              <span className="text-white/90">Introduce el arbitraje internacional para disputas petroleras (violación del Art. 151).</span>
            </li>
          </ul>

          <p className="text-white font-semibold mb-12">
            No se puede reformar una ley a costa de la Constitución.
          </p>

          {/* Section IV */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            IV. Los números de la entrega
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            La reforma no solo viola la Constitución. Entrega miles de millones de dólares que pertenecen a los venezolanos.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Las regalías —el pago que recibe la nación por la extracción de su petróleo— se reducen del 30% al 20% para los contratos privados y al 15% para las empresas mixtas. Con los niveles de producción y precios actuales, esto significa una pérdida de aproximadamente <strong className="text-protest-red">7.445 millones de dólares anuales</strong> en ingresos fiscales.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Para dimensionarlo: esa cifra equivale a más de 20 veces el presupuesto del Ministerio de Salud. Podría financiar la reconstrucción del sistema eléctrico nacional. Podría pagar becas universitarias para todos los estudiantes del país durante una década.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Ese dinero no desaparece. Se transfiere de las arcas públicas a los bolsillos de las compañías petroleras privadas —nacionales y extranjeras— que operarán bajo el nuevo régimen.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            ¿Quiénes son esas compañías? ¿Bajo qué términos operan? ¿Quiénes son los socios locales? No lo sabemos. Los Contratos de Participación Productiva creados bajo la Ley Antibloqueo fueron firmados en secreto, sin licitación pública, sin supervisión parlamentaria, sin rendición de cuentas.
          </p>

          <p className="text-white/90 leading-relaxed mb-12">
            La reforma de hoy legaliza retroactivamente esa opacidad.
          </p>

          {/* Section V */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            V. El regreso al modelo que ya fracasó
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Quienes impulsan esta reforma la presentan como "modernización". La historia dice otra cosa.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Venezuela ya vivió este experimento. Se llamó <strong className="text-white">Apertura Petrolera</strong> y se implementó en los años 90. Sus defensores prometieron inversión, eficiencia, desarrollo. Lo que entregaron fue una reducción drástica del ingreso fiscal —del 45% al 17% del total de ingresos del Estado—, pérdida de control sobre la producción, y una PDVSA que operaba como "Estado dentro del Estado" al servicio de intereses que no eran los de la nación.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Antes de eso, Venezuela vivió las <strong className="text-white">concesiones leoninas</strong> del gomecismo: territorio entregado a transnacionales por migajas, riqueza extraída sin beneficio para el pueblo, un país convertido en factoría de potencias extranjeras.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            La reforma actual combina lo peor de ambos modelos. Como las concesiones gomecistas, entrega el recurso sin transparencia ni control democrático. Como la apertura de los 90, reduce la participación fiscal y subordina el interés nacional al interés corporativo.
          </p>

          <p className="text-white font-semibold mb-12">
            Estamos retrocediendo cien años.
          </p>

          {/* Section VI */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            VI. Soberanía o protectorado
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            La reforma petrolera no ocurre en el vacío. Ocurre en un contexto donde Venezuela ha perdido capacidad de decisión sobre su propio destino.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            No pretendemos aquí juzgar ese contexto en su totalidad. Pero sí señalar lo obvio: un país que entrega el control de su industria estratégica, que somete sus disputas a tribunales extranjeros, que cede la comercialización de su principal producto de exportación, no es un país soberano.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Es un país tutelado.
          </p>

          <p className="text-white/90 leading-relaxed mb-12">
            Los venezolanos hemos pasado por muchas crisis. Hemos sobrevivido dictaduras, golpes, colapsos económicos, éxodos masivos. Pero siempre mantuvimos algo: la idea de que este país nos pertenece. Que su destino lo decidimos nosotros. Esa idea es lo que está en juego hoy. La posibilidad misma de que Venezuela siga existiendo como nación. No un gobierno, no un partido, no una ideología.
          </p>

          {/* Section VII */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            VII. El futuro de nuestros hijos
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Quienes firmamos este manifiesto tenemos edades, historias y convicciones distintas. Algunos luchamos por la nacionalización de 1976. Otros crecimos bajo la bonanza petrolera. Otros nacieron en la crisis y solo conocen la escasez.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Pero todos compartimos algo: hijos, nietos, sobrinos. Jóvenes venezolanos que merecen heredar un país, no un territorio saqueado.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            El petróleo en el subsuelo es finito. Cada barril extraído hoy es un barril que no estará mañana. Por eso cada generación tiene la responsabilidad de administrar ese recurso pensando en las que vienen.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            La generación que hoy gobierna ha decidido entregar ese recurso en condiciones que ni siquiera conocemos, a beneficiarios que operan en la sombra, bajo términos que violan la Constitución. Ha decidido hipotecar el futuro para resolver el presente —su presente, no el nuestro.
          </p>

          <p className="text-white font-semibold mb-12">
            No lo aceptamos.
          </p>

          {/* Section VIII */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            VIII. Lo que exigimos
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Ante la gravedad de lo que ocurre, los firmantes de este manifiesto exigimos:
          </p>

          <div className="space-y-6 mb-12">
            <div className="bg-white/5 p-6 border-l-4 border-protest-red">
              <h3 className="text-white font-semibold mb-2">1. Derogación inmediata de la reforma a la Ley Orgánica de Hidrocarburos.</h3>
              <p className="text-white/80">Una ley que viola la Constitución es nula de pleno derecho. No puede producir efectos jurídicos válidos. Exigimos su derogación y la reversión de cualquier acto administrativo derivado de ella.</p>
            </div>

            <div className="bg-white/5 p-6 border-l-4 border-protest-red">
              <h3 className="text-white font-semibold mb-2">2. Publicación íntegra de todos los contratos petroleros firmados bajo la Ley Antibloqueo.</h3>
              <p className="text-white/80">El pueblo venezolano tiene derecho a saber quiénes son los beneficiarios de los Contratos de Participación Productiva, qué áreas se han entregado, bajo qué términos, y cuál es la participación real del Estado. La opacidad es incompatible con la soberanía.</p>
            </div>

            <div className="bg-white/5 p-6 border-l-4 border-protest-red">
              <h3 className="text-white font-semibold mb-2">3. Relegitimación de la institucionalidad.</h3>
              <p className="text-white/80">Venezuela no puede seguir siendo gobernada por instituciones que no representan a nadie. Exigimos un proceso de relegitimación que devuelva a los venezolanos el derecho a elegir a quienes toman decisiones sobre nuestro patrimonio común. Sin legitimidad popular, ningún gobierno tiene autoridad moral para entregar los recursos de la nación.</p>
            </div>

            <div className="bg-white/5 p-6 border-l-4 border-protest-red">
              <h3 className="text-white font-semibold mb-2">4. Debate nacional sobre el futuro petrolero.</h3>
              <p className="text-white/80">Cualquier modificación al régimen de hidrocarburos debe ser producto de un debate amplio, informado y democrático. Los venezolanos debemos decidir colectivamente cómo administrar nuestro principal recurso estratégico. Esa decisión no puede tomarse en despachos cerrados ni imponerse por decreto.</p>
            </div>

            <div className="bg-white/5 p-6 border-l-4 border-protest-red">
              <h3 className="text-white font-semibold mb-2">5. Defensa de la jurisdicción venezolana.</h3>
              <p className="text-white/80">Las disputas sobre nuestro petróleo deben resolverse en tribunales venezolanos, bajo leyes venezolanas. Someter la industria petrolera a arbitraje internacional es renunciar a la soberanía jurídica. Exigimos el respeto irrestricto del artículo 151 de la Constitución.</p>
            </div>
          </div>

          {/* Section IX */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            IX. Un llamado a la unidad nacional
          </h2>

          <p className="text-xl text-white font-semibold mb-6">
            Este manifiesto no es de izquierda ni de derecha. No es chavista ni antichavista. No es oficialista ni opositor.
          </p>

          <p className="text-xl text-protest-red font-semibold mb-6">
            Es venezolano.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Convocamos a todos los que creen que Venezuela merece un futuro: trabajadores petroleros que conocen la industria desde adentro, profesionales y técnicos que la construyeron, académicos que la han estudiado, empresarios que entienden que no hay economía sana sin Estado soberano, jóvenes que se niegan a heredar un país vaciado, venezolanos en el exterior que sueñan con volver a una patria digna.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Convocamos a quienes apoyaron a Chávez y a quienes lo combatieron. A quienes votaron por Maduro y a quienes votaron contra él. A quienes creen en el socialismo y a quienes creen en el mercado. Las diferencias que nos separan son reales, pero son menos importantes que lo que nos une: el derecho de Venezuela a decidir su propio destino.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Gumersindo Torres era un médico conservador. Uslar Pietri era un intelectual liberal. Betancourt era socialdemócrata. Pérez Alfonzo era nacionalista radical. Chávez era socialista. Ninguno habría firmado las ideas del otro. Pero todos habrían rechazado la entrega que hoy se consuma.
          </p>

          <p className="text-white font-semibold mb-12">
            Si ellos pudieron coincidir en lo fundamental desde posiciones tan distintas, nosotros también podemos.
          </p>

          {/* Section X */}
          <h2 className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide mt-16 mb-6">
            X. El momento es ahora
          </h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Sabemos que muchos venezolanos están agotados. Décadas de crisis, polarización y desesperanza han erosionado la voluntad de lucha. Sabemos que muchos han dejado de creer que algo puede cambiar.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Pero la historia no perdona la pasividad. Cada generación enfrenta momentos donde el silencio es complicidad. Este es uno de esos momentos.
          </p>

          <p className="text-white/90 leading-relaxed mb-6">
            Si dejamos pasar esta reforma sin resistencia, habremos entregado algo que nuestros bisabuelos, abuelos y padres defendieron durante un siglo. Habremos fallado a quienes vienen después de nosotros. Habremos demostrado que el pueblo venezolano puede ser despojado sin consecuencias.
          </p>

          <p className="text-white font-semibold text-xl mb-12">
            No podemos permitirlo.
          </p>

          {/* Signature section */}
          <div className="border-t border-white/20 pt-12 mt-16">
            <h2 className="font-heading text-2xl md:text-3xl text-white uppercase tracking-wide mb-6">
              Firma y adhesión
            </h2>

            <p className="text-white/90 leading-relaxed mb-6">
              Este manifiesto está abierto a la firma de todos los venezolanos —dentro y fuera del país— que compartan sus principios.
            </p>

            <p className="text-white/90 leading-relaxed mb-6">
              No pedimos que renuncien a sus convicciones políticas. Solo que reconozcan algo que debería ser obvio: el petróleo de Venezuela pertenece a los venezolanos, y ningún gobierno —sea cual sea su signo— tiene derecho a entregarlo sin nuestro consentimiento.
            </p>

            <p className="text-white/90 leading-relaxed mb-12">
              Firmar este manifiesto es un acto de soberanía ciudadana. Es decir: aquí estamos, no aceptamos, no olvidaremos.
            </p>

            {/* Closing */}
            <div className="text-center space-y-4 py-12 border-t border-b border-white/20">
              <p className="font-heading text-xl md:text-2xl text-white uppercase tracking-wide">
                Por la soberanía petrolera.
              </p>
              <p className="font-heading text-xl md:text-2xl text-white uppercase tracking-wide">
                Por el futuro de nuestros hijos.
              </p>
              <p className="font-heading text-2xl md:text-3xl text-protest-red uppercase tracking-wide font-bold">
                Por Venezuela.
              </p>
            </div>
          </div>
        </article>

        {/* Back button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="font-body">Volver al inicio</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ManifiestoPage;
