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
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
              <!-- Header -->
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center w-full">
                    <h3 class="text-base gidole-regular font-semibold leading-6 text-gray-900" id="modal-title">
                      {{ title }}
                    </h3>
                  </div>
                </div>
              </div>

              <!-- Contenido -->
              <div class="bg-white px-4 py-3 sm:px-6 max-h-[70vh] overflow-y-auto">
                <p class="p-4 w-full text-center text-black gidole-regular">
                  Los nombramos fotógrafos y videógrafos oficiales de la fiesta. Capturen los momentos más espontáneos y auténticos, y compártanlos con nosotros subiendo sus archivos aquí.
                </p>

                <!-- Opciones de captura -->
                <div class="space-y-4 mb-6">
                  <!-- Opciones de cámara (foto y video) -->
                  <div class="grid grid-cols-2 gap-3">
                    <!-- Foto con cámara -->
                    <div class="text-center">
                      <label class="block mb-2">
                        <input
                          ref="cameraPhotoInput"
                          type="file"
                          accept="image/*"
                          capture="environment"
                          class="hidden"
                          @change="handleFileSelect"
                        />
                        <button
                          type="button"
                          @click="$refs.cameraPhotoInput.click()"
                          class="w-full flex flex-col items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span class="text-sm">Tomar Foto</span>
                        </button>
                      </label>
                      <p class="text-xs text-gray-500">Cámara trasera</p>
                    </div>

                    <!-- Video con cámara -->
                    <div class="text-center">
                      <label class="block mb-2">
                        <input
                          ref="cameraVideoInput"
                          type="file"
                          accept="video/*"
                          capture="environment"
                          class="hidden"
                          @change="handleFileSelect"
                        />
                        <button
                          type="button"
                          @click="$refs.cameraVideoInput.click()"
                          class="w-full flex flex-col items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-700 hover:to-pink-700 transition-all"
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                          <span class="text-sm">Grabar Video</span>
                        </button>
                      </label>
                      <p class="text-xs text-gray-500">Cámara trasera</p>
                    </div>
                  </div>

                  <!-- Opciones de galería -->
                  <div class="grid grid-cols-2 gap-3 mt-4">
                    <!-- Galería de fotos -->
                    <div class="text-center">
                      <label class="block mb-2">
                        <input
                          ref="galleryPhotoInput"
                          type="file"
                          accept="image/*"
                          class="hidden"
                          @change="handleFileSelect"
                          multiple
                        />
                        <button
                          type="button"
                          @click="$refs.galleryPhotoInput.click()"
                          class="w-full flex flex-col items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span class="text-sm">Fotos</span>
                        </button>
                      </label>
                      <p class="text-xs text-gray-500">Múltiples</p>
                    </div>

                    <!-- Galería de videos -->
                    <div class="text-center">
                      <label class="block mb-2">
                        <input
                          ref="galleryVideoInput"
                          type="file"
                          accept="video/*"
                          class="hidden"
                          @change="handleFileSelect"
                          multiple
                        />
                        <button
                          type="button"
                          @click="$refs.galleryVideoInput.click()"
                          class="w-full flex flex-col items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-medium rounded-lg hover:from-orange-700 hover:to-yellow-700 transition-all"
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span class="text-sm">Videos</span>
                        </button>
                      </label>
                      <p class="text-xs text-gray-500">Múltiples</p>
                    </div>
                  </div>

                  <!-- Límites de tamaño -->
                  <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p class="text-xs text-blue-800 font-medium mb-1">Límites de tamaño:</p>
                    <ul class="text-xs text-blue-700 space-y-1">
                      <li class="flex items-center">
                        <svg class="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Fotos: máximo 5MB cada una
                      </li>
                      <li class="flex items-center">
                        <svg class="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Videos: máximo 250MB cada uno
                      </li>
                      <li class="flex items-center">
                        <svg class="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Máximo 10 archivos en total
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Lista de archivos seleccionados -->
                <div v-if="selectedFiles.length > 0" class="mb-6">
                  <div class="flex justify-between items-center mb-3">
                    <h4 class="text-sm font-medium text-gray-700">
                      Archivos seleccionados ({{ selectedFiles.length }})
                      <span class="text-xs font-normal text-gray-500 ml-2">
                        {{ formatTotalSize() }} / 250MB
                      </span>
                    </h4>
                    <button
                      type="button"
                      @click="clearAllFiles"
                      class="text-sm text-red-600 hover:text-red-800 flex items-center gap-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                      Limpiar todo
                    </button>
                  </div>

                  <!-- Lista de archivos -->
                  <div class="space-y-2 max-h-60 overflow-y-auto p-2 bg-gray-50 rounded-lg">
                    <div
                      v-for="(file, index) in selectedFiles"
                      :key="index"
                      class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div class="flex items-center gap-3 flex-1 min-w-0">
                        <!-- Icono según tipo -->
                        <div :class="getFileTypeClass(file)">
                          <svg v-if="file.type.startsWith('image/')" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        </div>

                        <!-- Información del archivo -->
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900 truncate">
                            {{ file.name }}
                          </p>
                          <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs text-gray-500">
                              {{ formatFileSize(file.size) }}
                            </span>
                            <span class="text-xs px-2 py-0.5 rounded-full" :class="getFileTypeBadgeClass(file)">
                              {{ file.type.startsWith('image/') ? 'Imagen' : 'Video' }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Acciones -->
                      <div class="flex items-center gap-2">
                        <!-- Vista previa -->
                        <button
                          v-if="file.preview && file.type.startsWith('image/')"
                          type="button"
                          @click="previewFile(index)"
                          class="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                          title="Ver vista previa"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-weight="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </button>

                        <!-- Eliminar -->
                        <button
                          type="button"
                          @click="removeFile(index)"
                          class="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                          title="Eliminar archivo"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Barra de progreso total -->
                  <div class="mt-3">
                    <div class="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Espacio utilizado</span>
                      <span>{{ formatTotalSize() }} / 250MB</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div
                        class="bg-green-500 h-2 rounded-full transition-all duration-300"
                        :style="{ width: `${(totalSize / (250 * 1024 * 1024)) * 100}%` }"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Modal de previsualización -->
                <div v-if="previewIndex !== null" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
                  <div class="relative bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-hidden">
                    <button
                      @click="previewIndex = null"
                      class="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-opacity"
                    >
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>

                    <div v-if="selectedFiles[previewIndex]?.type.startsWith('image/')" class="p-4">
                      <img
                        :src="selectedFiles[previewIndex]?.preview"
                        alt="Vista previa"
                        class="max-w-full max-h-[70vh] object-contain mx-auto"
                      />
                    </div>

                    <div v-else-if="selectedFiles[previewIndex]?.type.startsWith('video/')" class="p-4">
                      <video
                        :src="selectedFiles[previewIndex]?.preview"
                        controls
                        class="max-w-full max-h-[70vh]"
                      >
                        Tu navegador no soporta la reproducción de videos.
                      </video>
                    </div>
                  </div>
                </div>

                <!-- Área de texto -->
                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    v-model="message"
                    :maxlength="500"
                    class="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-700 focus:border-blue-700 resize-none"
                    placeholder="Comparte un mensaje con tus archivos..."
                    rows="3"
                    :disabled="isLoading"
                  ></textarea>
                  <div class="text-right mt-1">
                    <span class="text-xs text-gray-500">{{ message.length }}/500</span>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="bg-gray-50 px-4 py-3 flex flex-col gap-3">
                <!-- Barra de progreso de subida -->
                <div v-if="isLoading" class="w-full">
                  <div class="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Subiendo archivos...</span>
                    <span>{{ uploadProgress }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div
                      class="bg-green-500 h-2 rounded-full transition-all duration-300"
                      :style="{ width: `${uploadProgress}%` }"
                    ></div>
                  </div>
                </div>

                <button
                  type="button"
                  class="w-full inline-flex justify-center items-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  :disabled="isLoading || selectedFiles.length === 0 || totalSize > 250 * 1024 * 1024"
                  @click="uploadFiles"
                >
                  <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span v-else class="flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    {{ getUploadButtonText() }}
                  </span>
                </button>

                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 transition-colors"
                  @click="closeModal"
                  :disabled="isLoading"
                >
                  Cancelar
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

interface SelectedFile {
  file: File
  preview: string
  name: string
  size: number
  type: string
}

export default {
  name: 'UploadMediaModal',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '¡Manos a la cámara!'
    },
    size: {
      type: String,
      default: 'md'
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
  emits: ['update:modelValue', 'close', 'upload-success'],
  data () {
    return {
      message: "",
      isLoading: false,
      selectedFiles: [] as SelectedFile[],
      uploadProgress: 0,
      previewIndex: null as number | null,
      totalSize: 0
    }
  },
  computed: {
    isTotalSizeExceeded(): boolean {
      return this.totalSize > 250 * 1024 * 1024 // 250MB
    }
  },
  watch: {
    selectedFiles: {
      handler() {
        this.calculateTotalSize()
      },
      deep: true
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  methods: {
    handleFileSelect(event: Event) {
      const input = event.target as HTMLInputElement
      if (input.files && input.files.length > 0) {
        this.processFiles(Array.from(input.files))
      }
      input.value = ''
    },

    async processFiles(files: File[]) {
      const MAX_TOTAL_SIZE = 250 * 1024 * 1024 // 250MB
      const MAX_FILE_COUNT = 10

      for (const file of files) {
        // Validar tipo de archivo
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          alert(`"${file.name}" no es una imagen o video válido`)
          continue
        }

        // Validar tamaño individual
        const maxIndividualSize = file.type.startsWith('image/')
          ? 5 * 1024 * 1024 // 5MB para imágenes
          : 250 * 1024 * 1024 // 250MB para videos

        if (file.size > maxIndividualSize) {
          const maxSize = file.type.startsWith('image/') ? '5MB' : '250MB'
          alert(`"${file.name}" es demasiado grande. Máximo ${maxSize}`)
          continue
        }

        // Validar límite de cantidad
        if (this.selectedFiles.length >= MAX_FILE_COUNT) {
          alert('Máximo 10 archivos por subida')
          break
        }

        // Validar tamaño total
        if (this.totalSize + file.size > MAX_TOTAL_SIZE) {
          alert('Has superado el límite total de 250MB')
          break
        }

        try {
          // Crear preview (para imágenes y videos)
          const preview = file.type.startsWith('image/') || file.type.startsWith('video/')
            ? URL.createObjectURL(file)
            : ''

          this.selectedFiles.push({
            file,
            preview,
            name: this.truncateFileName(file.name, 30),
            size: file.size,
            type: file.type
          })
        } catch (error) {
          console.error('Error procesando archivo:', error)
          alert(`Error al procesar "${file.name}"`)
        }
      }
    },

    truncateFileName(name: string, maxLength: number): string {
      if (name.length <= maxLength) return name
      const extension = name.split('.').pop()
      const nameWithoutExt = name.substring(0, name.lastIndexOf('.'))
      const truncatedName = nameWithoutExt.substring(0, maxLength - 4) + '...'
      return truncatedName + '.' + extension
    },

    calculateTotalSize() {
      this.totalSize = this.selectedFiles.reduce((total, file) => total + file.size, 0)
    },

    formatTotalSize(): string {
      return this.formatFileSize(this.totalSize)
    },

    removeFile(index: number) {
      URL.revokeObjectURL(this.selectedFiles[index].preview)
      this.selectedFiles.splice(index, 1)
      if (this.previewIndex === index) {
        this.previewIndex = null
      }
    },

    clearAllFiles() {
      this.selectedFiles.forEach(file => {
        URL.revokeObjectURL(file.preview)
      })
      this.selectedFiles = []
      this.previewIndex = null
    },

    previewFile(index: number) {
      this.previewIndex = index
    },

    formatFileSize(bytes: number): string {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },

    getFileTypeClass(file: SelectedFile): string {
      const baseClasses = 'flex-shrink-0 p-2 rounded-lg'
      if (file.type.startsWith('image/')) {
        return `${baseClasses} bg-blue-100 text-blue-600`
      } else {
        return `${baseClasses} bg-red-100 text-red-600`
      }
    },

    getFileTypeBadgeClass(file: SelectedFile): string {
      if (file.type.startsWith('image/')) {
        return 'bg-blue-100 text-blue-800'
      } else {
        return 'bg-red-100 text-red-800'
      }
    },

    getUploadButtonText(): string {
      if (this.selectedFiles.length === 0) return 'Subir archivos'

      const imageCount = this.selectedFiles.filter(f => f.type.startsWith('image/')).length
      const videoCount = this.selectedFiles.filter(f => f.type.startsWith('video/')).length

      let text = 'Subir'
      if (imageCount > 0) text += ` ${imageCount} foto${imageCount !== 1 ? 's' : ''}`
      if (videoCount > 0) {
        if (imageCount > 0) text += ' y'
        text += ` ${videoCount} video${videoCount !== 1 ? 's' : ''}`
      }

      return text
    },

    async uploadFiles() {
      if (this.selectedFiles.length === 0 || this.isTotalSizeExceeded) return

      this.isLoading = true
      this.uploadProgress = 0

      try {
        const formData = new FormData()
        formData.append('message', this.message.trim())

        // Agregar todos los archivos
        this.selectedFiles.forEach((item, index) => {
          formData.append(`files`, item.file)
        })

        // `https://envetia-api.djcrespo.dev/api/v1/gallery/upload_media/`

        const response = await axios.post(
          `https://envetia-api.djcrespo.dev/api/v1/gallery/upload_media/`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: (progressEvent) => {
              if (progressEvent.total) {
                this.uploadProgress = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                )
              }
            }
          }
        )

        // Éxito
        this.$emit('upload-success', response.data)
        this.clearAllFiles()
        this.message = ''
        this.closeModal()

      } catch (error: any) {
        console.error("Error subiendo archivos:", error)

        let errorMessage = 'Hubo un error al subir los archivos.'
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message
        } else if (error.message.includes('Network Error')) {
          errorMessage = 'Error de conexión. Verifica tu internet.'
        }

        alert(errorMessage)
      } finally {
        this.isLoading = false
        this.uploadProgress = 0
      }
    },

    closeModal() {
      this.clearAllFiles()
      this.message = ''
      this.$emit('update:modelValue', false)
      this.$emit('close', false)
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
    }
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
    this.clearAllFiles()
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
