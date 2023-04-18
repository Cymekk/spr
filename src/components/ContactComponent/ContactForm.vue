<template>
	<div class="wrapper">
		<div class="contact">
			<div class="contact__form">
				<h2 class="title">kontakt</h2>
				<input
					type="text"
					placeholder="Imie i nazwisko:"
					@input="e => $emit('update:name', e.target.value)"
					:value="name" />
				<input
					type="text"
					placeholder="Adres email"
					@input="e => $emit('update:email', e.target.value)"
					:value="email" />
				<input
					type="text"
					placeholder="Temat wiadomości"
					@input="e => $emit('update:title', e.target.value)"
					:value="title" />
				<textarea
					type="text"
					placeholder="Wiadomość"
					@input="e => $emit('update:message', e.target.value)"
					:value="message" />
				<span class="error" v-show="!inputsVal"
					>Wszystkie pola muszą być wypełnione.</span
				>
				<span class="error" v-show="!emailVal">niepoprawny adres e-mail.</span>
				<button class="send" @click="validateMail">Wyślij</button>
				<span
					>Wypełnienie formularza oznacza, że podane w nim dane osobowe będą
					przetwarzane w celu udzielenia odpowiedzi.</span
				>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ContactForm",

	props: {
		name: {
			type: String,
		},
		email: {
			type: String,
		},

		title: {
			type: String,
		},

		message: {
			type: String,
		},

		inputsVal: {
			type: Boolean,
		},

		emailVal: {
			type: Boolean,
		},
	},
	emits: ["handle-popup", "validate-mail"],

	setup(props, { emit }) {
		function resize(e) {
			e.target.style.height = "auto"
			e.target.style.height = `${e.target.scrollHeight}px`
		}
		function handlePopup() {
			emit("handle-popup")
		}

		function validateMail() {
			emit("validate-mail")
		}

		return { handlePopup, resize, validateMail }
	},
}
</script>
<style lang="scss" scoped>
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

.contact {
	width: 100%;
	min-height: 80svh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&__form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90%;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 0 1em;
		border-radius: 10px;

		.title {
			text-transform: uppercase;
			color: #c5ecfd;
			margin: 1rem 0;
		}

		input,
		textarea {
			width: 100%;
			margin-bottom: 1rem;
			padding: 5px;
			outline: none;
			border: none;
			background: none;
			color: #c5ecfd;
			border-bottom: 2px solid #c5ecfd;

			&::placeholder {
				color: #c5ecfd;
			}
		}

		textarea {
			width: 100%;
			height: 100px;
		}

		.send {
			background-color: #39b7dd;
			width: 50%;
			padding: 1em;
			border: none;
			border-radius: 5px;
			text-transform: uppercase;
			cursor: pointer;
			color: #fff;
			margin: 1em;
		}

		.error {
			font-size: 0.9rem;
			font-weight: bold;
			margin: 0.5em;
			color: rgb(253, 62, 62);
		}

		span {
			color: #c5ecfd;
			font-size: 0.6rem;
			margin-bottom: 1em;
			text-align: center;
		}
	}
}

@media (min-width: 576px) {
	.contact {
		&__form {
			span {
				margin-bottom: 1.5em;
				font-size: 0.7rem;
			}
		}
	}
}

@media (min-width: 776px) {
	.contact {
		&__form {
			width: 80%;
			.send {
				width: 35%;
			}

			span {
				margin-bottom: 1.5em;
				font-size: 0.7rem;
			}
		}
	}
}

@media (min-width: 992px) {
	.contact {
		&__form {
			padding: 0 2em;

			input,
			textarea {
				font-size: 0.9rem;
			}
			.send {
				width: 30%;
			}
		}
	}
}

@media (min-width: 1200px) {
	.contact {
		&__form {
			width: 70%;

			input,
			textarea {
				margin-bottom: 1.5em;
				font-size: 1rem;
			}
			.send {
				width: 25%;
			}
		}
	}
}
</style>
