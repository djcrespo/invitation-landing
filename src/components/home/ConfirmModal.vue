<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="modelValue" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" aria-modal="true"
        role="dialog">
        <!-- Overlay de fondo -->
        <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" aria-hidden="true"
          @click="handleOverlayClick"></div>

        <!-- Contenedor del modal -->
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <transition name="modal-scale">
            <div v-if="modelValue"
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full"
              :class="modalWidth">
              <!-- Header -->
              <div v-if="$slots.header || title" class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center w-full">
                    <h3 v-if="title" class="text-base gidole-regular font-semibold leading-6 text-gray-900"
                      id="modal-title">
                      {{ title }}
                    </h3>
                    <slot name="header"></slot>
                  </div>
                </div>
              </div>

              <!-- Contenido -->
              <div class="bg-white px-4 py-3 sm:px-6 max-h-[70vh] overflow-y-auto">
                <p class="p-4 w-full text-center gidole-regular">Agradecemos que puedan acompañarnos a este día tan
                  especial para nosotros, pero igual entendemos que por alguna situación no puedan asistir, le pedimos
                  que responda lo más pronto posible para separar espacios.</p>
              </div>

              <div class="bg-white px-4 py-3 sm:px-6 max-h-[70vh] overflow-y-auto">
                <textarea
                  v-if="!isLoading"
                  v-model="message"
                  :maxlength="500"
                  ref="textarea"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-700 focus:border-blue-700 resize-none overflow-hidden transition-colors duration-300"
                  placeholder="Escribe tu mensaje aquí..."
                  rows="3"
                />
                <div v-else class="w-full h-16 text-center">
                  <svg aria-hidden="true" role="status" class="inline w-[20px] h-[20px] text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg>
                </div>
              </div>

              <!-- Footer -->
              <div class="bg-gray-50 px-4 py-3 grid grid-cols-2 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-red-500 sm:mt-0 sm:w-auto"
                  style="cursor: pointer;" @click="closeModal(false)">
                  <svg v-if="isLoading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg>
                  <p v-else>Desafortunadamente no</p>
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-green-500 sm:mt-0 sm:w-auto"
                  style="cursor: pointer;" @click="closeModal(true)">
                  <svg v-if="isLoading" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                  </svg>
                  <p v-else>Claro que si!</p>
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'BaseModal',
  props: {
    id: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: [Object, Function],
      default: null
    },
    iconBackground: {
      type: String,
      default: 'bg-blue-100'
    },
    iconColor: {
      type: String,
      default: 'text-blue-600'
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: true
    },
    closeOnEscape: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'close'],
  computed: {
    modalWidth() {
      const sizes = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        full: 'sm:max-w-full mx-4'
      }
      return sizes[this.size]
    }
  },
  data () {
    return {
      message: "",
      isLoading: false
    }
  },
  methods: {
    async closeModal(accepted: boolean) {
      if (accepted == true || accepted == false) {
        await this.sendResponse(accepted)
        this.message = ""
        this.$emit('update:modelValue', false)
        this.$emit('close', true)
      } else {
        this.$emit('update:modelValue', false)
        this.$emit('close', false)
      }
    },
    handleOverlayClick() {
      if (this.closeOnOverlayClick) {
        this.closeModal()
      }
    },
    handleEscapeKey(event) {
      if (this.closeOnEscape && event.key === 'Escape' && this.modelValue) {
        this.closeModal()
      }
    },
    async sendResponse(accepted: boolean) {
    this.isLoading = true
      const response = {
        confirm: accepted,
        message: this.message.trim()
      }
      try {
        await axios.post(`https://api-invitation.devcrespo.tech/invitations/${this.id}/confirm/`, response)
        // await axios.post(`http://localhost:8000/api/v1/invitations/${this.id}/confirm/`, response)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.error("Error sending response:", error)
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
  }
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.3s ease;
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
</style>
