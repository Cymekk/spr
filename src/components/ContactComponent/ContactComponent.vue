<template>
	<ContactForm
		@handle-popup="handlePopup"
		@validate-mail="validateMail"
		v-model:name="name"
		v-model:email="email"
		v-model:title="title"
		v-model:message="message"
		:inputsVal="inputsVal"
		:emailVal="emailVal" />
	<teleport to="#message-confirmation">
		<MessageSendConfirmation
			:class="{ active: showPopup }"
			@handle-popup="handlePopup" />
	</teleport>
</template>
<script>
import { ref } from "vue"
import MessageSendConfirmation from "./MessageSendConfirmation.vue"
import ContactForm from "./ContactForm.vue"

export default {
	name: "ContactComponent",
	components: { MessageSendConfirmation, ContactForm },

	setup() {
		const regex = /^[^@]+@\w+(\.\w+)+\w$/
		let name = ref("")
		let email = ref("")
		let title = ref("")
		let message = ref("")
		let showPopup = ref(false)
		let errors = ref(0)
		let inputsVal = ref(true)
		let emailVal = ref(true)

		function handlePopup() {
			if (showPopup.value == false) {
				showPopup.value = true
			} else {
				showPopup.value = false
			}
		}

		function validateMail() {
			errors.value = 0
			if (!regex.test(email.value)) {
				errors.value++
				emailVal.value = false
			} else {
				emailVal.value = true
			}

			if (name.value === "" || title.value === "" || message.value === "") {
				errors.value++
				inputsVal.value = false
			} else {
				inputsVal.value = true
			}

			if (errors.value === 0) {
				handlePopup()
				emailVal.value = true
				inputsVal.value = true
				name.value = ""
				email.value = ""
				title.value = ""
				message.value = ""
			}
		}
		return {
			showPopup,
			handlePopup,
			name,
			email,
			message,
			title,
			validateMail,
			errors,
			inputsVal,
			emailVal,
		}
	},
}
</script>
<style lang="scss"></style>
