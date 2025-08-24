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

              <!-- Contenido -->
              <div class="bg-white px-4 py-3 sm:px-6 max-h-[70vh] overflow-y-auto">
                <p class="p-4 w-full text-black text-center gidole-regular">
                  Gracias por tu respuesta! no pierdas esta invitación porque por este medio daremos nuevas noticias y sorpresas, gracias por tu tiempo.
                </p>
              </div>

            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'AlertModal',
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
      validator: (value: string) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
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
      const sizes: Record<'sm' | 'md' | 'lg' | 'xl' | 'full', string> = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-md',
        lg: 'sm:max-w-lg',
        xl: 'sm:max-w-xl',
        full: 'sm:max-w-full mx-4'
      }
      return sizes[this.size as 'sm' | 'md' | 'lg' | 'xl' | 'full']
    }
  },
  data () {
    return {
      message: "",
      isLoading: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:modelValue', false)
      this.$emit('close')
    },
    handleOverlayClick() {
      if (this.closeOnOverlayClick) {
        this.closeModal()
      }
    },
    handleEscapeKey(event: KeyboardEvent) {
      if (this.closeOnEscape && event.key === 'Escape' && this.modelValue) {
        this.closeModal()
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
