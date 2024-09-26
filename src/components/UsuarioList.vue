<script setup>
import { useUsuariosStore } from '@/stores/usuarios'
import { onMounted } from 'vue'

const usuariosStore = useUsuariosStore()

onMounted(() => {
  usuariosStore.fetchUsuarios()
})

function handleDelete(id) {
  usuariosStore.deleteUsuario(id)
}
</script>

<template>
  <div class="table-responsive">
    <h2 class="text-center">Gestionar Usuarios</h2>
    <table class="table table-hover table-cereza">
      <thead class="bg-cereza text-white">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, idx) in usuariosStore.usuarios" :key="usuario.id">
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ usuario.nombre || 'Sin nombre' }}</td>
          <td>{{ usuario.correo || 'Sin correo' }}</td>
          <td>
            <button class="btn btn-eliminar" @click="handleDelete(usuario.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-cereza {
  border: 2px solid #a83246;
  /* Borde color cereza */
}

.table-cereza th,
.table-cereza td {
  vertical-align: middle;
  text-align: center;
}

.bg-cereza {
  background-color: #a83246;

}

.btn-eliminar {
  background-color: #a83246;
  color: white;
  border: none;
}

.btn-eliminar:hover {
  background-color: #8e293c;

}

tbody tr:hover {
  background-color: #f7d6dc;

}
</style>