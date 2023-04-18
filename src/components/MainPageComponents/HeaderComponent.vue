<template>
	<header class="header">
			<div class="hero-img">
				<img src="../../assets/SPR.jpg" alt="" />
				<div class="shadow"></div>
				<ul>
					<li>S</li>
					<li>P</li>
					<li>R</li>
					<li>G</li>
					<li>O</li>
					<li>K</li>
					<li>i</li>
					<li>S</li>
					<li>K</li>
					<li>ą</li>
					<li>t</li>
					<li>y</li>
					<li>W</li>
					<li>r</li>
					<li>o</li>
					<li>c</li>
					<li>ł</li>
					<li>a</li>
					<li>w</li>
					<li>s</li>
					<li>k</li>
					<li>i</li>
					<li>e</li>
				</ul>
			</div>
	</header>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.hero-img {
	position: relative;
	width: 100%;
	background-color: tomato;

	img {
		display: block;
		width: 100%;
	}

	.shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.3);
	}

	ul {
		display: flex;
		flex-direction: row;
		list-style: none;
		color: #fff;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1.5rem;

		li {
			opacity: 0;
			animation: showLetter 0.5s forwards;
		}

		li:nth-child(1) {
			animation-delay: 0.1s;
		}
		li:nth-child(2) {
			animation-delay: 0.2s;
		}
		li:nth-child(3) {
			animation-delay: 0.3s;
			padding-right: 0.3em;
		}
		li:nth-child(4) {
			animation-delay: 0.4s;
		}
		li:nth-child(5) {
			animation-delay: 0.5s;
		}
		li:nth-child(6) {
			animation-delay: 0.6s;
		}
		li:nth-child(7) {
			animation-delay: 0.7s;
		}
		li:nth-child(8) {
			animation-delay: 0.8s;
			padding-right: 0.3em;
		}
		li:nth-child(9) {
			animation-delay: 0.9s;
		}
		li:nth-child(10) {
			animation-delay: 1s;
		}
		li:nth-child(11) {
			animation-delay: 1.1s;
		}
		li:nth-child(12) {
			animation-delay: 1.2s;
			padding-right: 0.3em;
		}
		li:nth-child(13) {
			animation-delay: 1.3s;
		}
		li:nth-child(14) {
			animation-delay: 1.4s;
		}
		li:nth-child(15) {
			animation-delay: 1.5s;
		}
		li:nth-child(16) {
			animation-delay: 1.6s;
		}
		li:nth-child(17) {
			animation-delay: 1.7s;
		}
		li:nth-child(18) {
			animation-delay: 1.8s;
		}
		li:nth-child(19) {
			animation-delay: 1.9s;
		}
		li:nth-child(20) {
			animation-delay: 2s;
		}
		li:nth-child(21) {
			animation-delay: 2.1s;
		}
		li:nth-child(22) {
			animation-delay: 2.2s;
		}
		li:nth-child(23) {
			animation-delay: 2.3s;
		}
	}
}

@keyframes showLetter {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@media(min-width: 768px){
	.hero-img{
		ul
		{
			li{
				font-size: 1.8rem;
			}
		}
	}
}
@media(min-width: 992px){
	.hero-img{
		ul
		{
			li{
				font-size: 2rem;
			}
		}
	}
}
@media(min-width: 1200px){
	.hero-img{
		ul
		{
			li{
				font-size: 2.5rem;
			}
		}
	}
}
</style>
