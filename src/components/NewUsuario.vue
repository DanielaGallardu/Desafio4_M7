<script setup>
import { useUsuariosStore } from '@/stores/usuarios'
import { ref } from 'vue'

const usuariosStore = useUsuariosStore()
const nombre = ref('')
const correo = ref('')

function handleAddUsuario() {
  if (nombre.value && correo.value) {
    usuariosStore.addUsuario({
      nombre: nombre.value,
      correo: correo.value
    });

    nombre.value = '';
    correo.value = '';
  } else {
    alert("Por favor, completa todos los campos");
  }
}
</script>

<template>
  <div class="form-cereza p-4 mb-4">
    <h1 class="text-center text-white">Añadir Usuarios</h1>
    <form @submit.prevent="handleAddUsuario">
      <div class="mb-3">
        <label for="nombre" class="form-label text-white">Nombre</label>
        <input required type="text" class="form-control bg-white text-dark" id="nombre" v-model="nombre"
          placeholder="Ingresa el nombre" />
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label text-white">Correo</label>
        <input required type="email" class="form-control bg-white text-dark" id="correo" v-model="correo"
          placeholder="Ingresa el correo" />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary btn-enviar">Agregar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-cereza {
  background-color: #681623;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-enviar {
  background-color: #ffffff;
  color: #a83246;
  border: 2px solid #a83246;
  font-weight: bold;
}

.btn-enviar:hover {
  background-color: #f7d6dc;
  border-color: #8e293c;
  color: #8e293c;
}

.text-center {
  text-align: center;
}

.form-label {
  font-weight: bold;
}
</style>