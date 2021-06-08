<template>
<Layout>
 <div class="nav_barre">
        <g-image alt="Example image" src="~/lo.png" width="120" height="50" />
          <g-link class="nav__link" to="/"><g-image alt="Example image" src="~/home.png" width="53" height="53" /></g-link>
           <g-link class="nav__link" to="/alumnis/"> <g-image alt="Example image" src="~/profie.png" width="53" height="53" /></g-link>
         <g-link class="nav__link" to="/calendar/"> <g-image alt="Example image" src="~/calendar.png" width="53" height="53" /></g-link>
   </div>
    
        <div class="title-seconde">
                    <h2>Les dernièrs événements de la NWS</h2>
         </div>
                    <br>
        <div class="content">
                    <g-image alt="Example image" src="~/jpo.png" width="1116" height="379" />
        </div>
                    <br>
         <div class="title-third">
                <h2>Les dernières Actualités des Alumnis</h2>
          </div>
             <br>
            <div class="card">
                 <g-image alt="Example image" src="~/alumnis.jpg" width="1116" height="379" />
             </div>
    <footer class="footer">
            <p class="home-links">
            <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
            <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
             </p>
    </footer>
</Layout>

</template>

<script>
export default {
  metaInfo: {
    title: 'alumnis'
  }
}
</script>
