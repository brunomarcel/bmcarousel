<h1>bmcarousel</h1>

Plugin jQuery para carousel de imagens com controle parametrizado.


<h2>Primeiros passos</h2> 
<h3>Incluindo no html</h3>
<div class="highlight highlight-js"><pre><span class="err">...
  <span class="o">&lt;</span><span class="nx">script</span> <span class="nx">type</span><span class="o">=</span><span class="s2">"text/javascript"</span> <span class="nx">src</span><span class="o">=</span><span class="s2">"http://code.jquery.com/jquery-2.0.3.min.js"</span><span class="o">&gt;</span>
  <span class="o">&lt;</span><span class="nx">script</span> <span class="nx">type</span><span class="o">=</span><span class="s2">"text/javascript"</span> <span class="nx">src</span><span class="o">=</span><span class="s2">"libs/bmcarousel.min.js"</span><span class="o">&gt;&lt;</span><span class="err">/script&gt;</span>
<span class="o">&lt;</span><span class="err">/body&gt;</span></pre></div>
<h3>html</h3>
<pre><span class="o">&lt;</span><span>ul class="ulCarousel"</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-1.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-2.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-3.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-4.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-5.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-6.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
	<span class="o">&lt;</span><span>li</span><span class="o">&gt;</span><span class="o">&lt;</span><span>img src="imgs/img-7.jpg"</span><span class="o"> /&gt;</span><span class="o">&lt;/</span><span>li</span><span class="o">&gt;</span>
<span class="o">&lt;/</span><span>ul</span><span class="o">&gt;</span></pre>



<h3>css</h3>
<pre>.ulCarousel > li{
	float: left; /* ou display: inline; */
	list-style: none;
	display: none
}</pre>

<h2>Iniciando o script</h2> 
<pre>
<code>$(function(){
	// Inicia o Carousel
	bmcarousel.start({
		container   : $('.ulCarousel'),		// seletor do carousel
		visible     : 2,      				// quantas imagens que ficarão visíveis, por default é 3
		space		: 10,     				// espaço em "px" entre as imagens, por default é 10
		left		: 'prev',   			// seta para esqueda, pode ser usada a tag "img", por default é o texto left
		right		: 'next',   			// seta para direita, pode ser usada a tag "img", por default é o texto right
		qtdScroll   : 1 					// quantidade de imagens por scroll.
	});
})</code>
</pre>

<h2>Usando mais de 1 carousel na mesma página.</h2> 
<pre>
<code>$(function(){
	// Inicia o Carousel
	bmcarousel.start({
		container   : $('.ulCarousel'),		// seletor do carousel
		visible     : 2,      				// quantas imagens que ficarão visíveis, por default é 3
		space		: 10,     				// espaço em "px" entre as imagens, por default é 10
		left		: 'prev',   			// seta para esqueda, pode ser usada a tag "img", por default é o texto left
		right		: 'next',   			// seta para direita, pode ser usada a tag "img", por default é o texto right
		qtdScroll   : 1 					// quantidade de imagens por scroll.
	});
	
	// Inicia o segundo Carousel
	bmcarousel.start({
		container   : $('.ulCarousel2'),		// seletor do segundo carousel
		visible     : 5,      				// quantas imagens que ficarão visíveis, por default é 3
		space		: 20,     				// espaço em "px" entre as imagens, por default é 10
		left		: 'prev',   			// seta para esqueda, pode ser usada a tag "img", por default é o texto left
		right		: 'next',   			// seta para direita, pode ser usada a tag "img", por default é o texto right
		qtdScroll   : 3 					// quantidade de imagens por scroll.
	});
})</code>
</pre>

<h2>Evento reload</h2> 
"reload: true" refaz toda a formatação do carousel mudando quantidade de imagens exibidas, quantidade de imagens por scroll e ajusta o espaçamento entre as imagens.

<strong>Exemplo:</strong>
<pre>
<code>// Refaz o Carousel
bmcarousel.start({
	container   : $('.ulCarousel'),
	visible     : 4,      				
	space		: 5,     			
	qtdScroll   : 1,
	<strong>reload      : true</strong>
});</code>
</pre>

<a href="https://rawgithub.com/brunomarcel/bmcarousel/master/index.html" target="_blank">Ver o bmcarousel funcionando com mais de 1 carousel na página.</a>
