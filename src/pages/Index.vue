<template>
  <Layout>
    <div class="nav_barre">
        <g-image alt="Example image" src="~/lo.png" width="120" height="50" />
    </div>
   

<h2>Les dernièrs événements de la NWS</h2>
    <div class="content">
     <g-image alt="Example image" src="~/jpo.png" width="679" height="1116" />
    </div>

    <h2>Les dernières Actualités des Alumnis</h2>
    <div class="card">
     <g-image alt="Example image" src="~/alumnis.jpg" width="679" height="1116" />
    </div>


    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
body{
  background: lightgrey;
}
.nav_barre{
  background:lightgrey;
}
.content{

  border-width: 679px solid grey;
  background: grey;
}
</style>
